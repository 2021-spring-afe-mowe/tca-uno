import { Component, OnInit } from '@angular/core';
import { 
  AppDataService
  , BasicStatsDisplay 
} from '../app-data.service';

import { ViewWillEnter } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { read, write } from 'clipboardy';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {

  totalUnoTime = "";

  basicStats: BasicStatsDisplay;
  handSizeFacts = {
    largestHand: 0
    , largestHandWithWin: 0
  };

  leaderboard = [];

  gameTimeFacts = {
    longest: ""
    , shortest: ""
  };

  gameTurnFacts = {
    mostTurns: ""
    , fewestTurns: ""
    , quickestWin: ""
    , quickestLoss: ""
  };
   
  gameSizeStats = [];
  
  // firstCardStats = {
  //   winningPercent: 0
  //   , numberOfGames: 0
  // };

  constructor(
    private appDataSvc: AppDataService
    , private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {

    // Init with blanks before loading via getStarted(), say what ? ? ?
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
    this.handSizeFacts = this.appDataSvc.calculateHandSizeFacts();
    this.leaderboard = this.appDataSvc.calculateLeaderboard();
    this.gameTimeFacts = this.appDataSvc.calculateGameTimeFacts();
    this.totalUnoTime = this.appDataSvc.calculateTotalUnoTime();
    this.gameTurnFacts = this.appDataSvc.calculateGameTurnFacts();
    this.gameSizeStats = this.appDataSvc.calculateGameSizeStats();
    // this.firstCardStats = this.appDataSvc.calculateFirstCardStats();

    this.getReadyToSave();

  }

  loading = false;

  async getReadyToSave() {
    const emailAndNickname = await this.appDataSvc.loadEmailAndNickname();
    const parsedEmailAndNickname = JSON.parse(emailAndNickname);
    this.email = parsedEmailAndNickname.email;
    this.appDataSvc.currentEmail = this.email;
    this.nickname = parsedEmailAndNickname.nickname;
    this.readyToSave = !(this.email.length == 0 /* || this.nickname.length == 0 */);

    if (this.readyToSave) {
      this.getStarted();
    }
  }

  async getStarted() {
    this.loading = true;
    await this.appDataSvc.loadPreviousGameResults();
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
    this.handSizeFacts = this.appDataSvc.calculateHandSizeFacts();
    this.leaderboard = this.appDataSvc.calculateLeaderboard();
    this.gameTimeFacts = this.appDataSvc.calculateGameTimeFacts();
    this.totalUnoTime = this.appDataSvc.calculateTotalUnoTime();
    this.gameTurnFacts = this.appDataSvc.calculateGameTurnFacts();
    this.gameSizeStats = this.appDataSvc.calculateGameSizeStats();
    // this.firstCardStats = this.appDataSvc.calculateFirstCardStats();

    this.reverseChron = this.appDataSvc.getResultsInReverseChron();
    this.loading = false;
  }

  ionViewWillEnter() {
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
    this.handSizeFacts = this.appDataSvc.calculateHandSizeFacts();
    this.leaderboard = this.appDataSvc.calculateLeaderboard();
    this.gameTurnFacts = this.appDataSvc.calculateGameTurnFacts();
    this.gameTimeFacts = this.appDataSvc.calculateGameTimeFacts();
    this.totalUnoTime = this.appDataSvc.calculateTotalUnoTime();
    this.gameSizeStats = this.appDataSvc.calculateGameSizeStats();
    // this.firstCardStats = this.appDataSvc.calculateFirstCardStats();
  
    this.reverseChron = this.appDataSvc.getResultsInReverseChron();
  }

  reverseChron = [];

  showOptions() {
    this.presentOptoinsActionSheet();
  }

  async presentOptoinsActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Options"
      , buttons: [
        {
          text: "Change email address"
          , handler: () => {
            this.readyToSave = false;
          }
        }
        // {
        //   text: "Delete All Data"
        //   , role: 'destructive'
        //   , handler: () => {
        //     this.appDataSvc.clearData();
        //     this.getStarted();
        //   }
        // }
        // , {
        //   text: "Copy to Clipboard"
        //   , handler: () => {
        //     this.hackToClipboard(this.appDataSvc.gameResults);
        //   }
        // }
        // , {
        //   text: "Paste from Clipboard"
        //   , handler: () => {
        //     this.hackFromClipboard();
        //   }
        // }
        , {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }

  hackToClipboard = async (data) => {
    await write(JSON.stringify(data));
    //const dataRead = await read();
    //console.log(dataRead);
  }

  hackFromClipboard = async () => {
    this.appDataSvc.updateWithPastedGameResults(JSON.parse(await read()));
  }

  get caughtNumber() {
    return this.appDataSvc.gameResults.reduce(
      (acc, x) => acc + x.actions.filter(y => y.action.startsWith("Caught")).length
      , 0
    );
  }

  get daysAgo() {
    const lastGame = Math.max(...this.appDataSvc.gameResults.map(x => Date.parse((x as any).endDateTime)));
    //console.log(lastGame);

    const now = Date.now();
    //console.log(Date.now());

    const daysAgo = (now - lastGame)/ (1000 * 60 * 60 * 24);

    return isFinite(daysAgo) ? daysAgo.toFixed(0) : "n/a";
  }

  get lastOpponents() {
    const lastGame = this.appDataSvc.getResultsInReverseChron()[0];
    return lastGame ? lastGame.opponents.join(", ") : "";
  }

  email = "";
  nickname = "";
  readyToSave = false;

  async saveEmailAndNickname() {
    if (this.email.length > 0 /*&& this.nickname.length > 0*/) {
      console.log("Saving email and nickname...");
      await this.appDataSvc.saveEmailAndNickname(this.email, this.nickname);
      this.readyToSave = true;
      this.getStarted();
    }  
  }
}
