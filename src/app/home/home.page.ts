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

  gameSizeStats = [];
  
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
    this.gameSizeStats = this.appDataSvc.calculateGameSizeStats();

    this.getStarted();
  }

  async getStarted() {
    await this.appDataSvc.loadPreviousGameResults();
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
    this.handSizeFacts = this.appDataSvc.calculateHandSizeFacts();
    this.leaderboard = this.appDataSvc.calculateLeaderboard();
    this.gameTimeFacts = this.appDataSvc.calculateGameTimeFacts();
    this.gameSizeStats = this.appDataSvc.calculateGameSizeStats();
  }

  ionViewWillEnter() {
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
    this.handSizeFacts = this.appDataSvc.calculateHandSizeFacts();
    this.leaderboard = this.appDataSvc.calculateLeaderboard();
    this.gameTimeFacts = this.appDataSvc.calculateGameTimeFacts();
    this.gameSizeStats = this.appDataSvc.calculateGameSizeStats();
  }

  showOptions() {
    this.presentOptoinsActionSheet();
  }

  async presentOptoinsActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Choose wisely..."
      , buttons: [
        {
          text: "Delete All Data"
          , role: 'destructive'
          , handler: () => {
            this.appDataSvc.clearData();
            this.getStarted();
          }
        }
        , {
          text: "Copy to Clipboard"
          , handler: () => {
            this.hackToClipboard(this.appDataSvc.gameResults);
          }
        }
        , {
          text: "Paste from Clipboard"
          , handler: () => {
            this.hackFromClipboard();
          }
        }
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

    return ((now - lastGame)/ (1000 * 60 * 60 * 24)).toFixed(0);
  }
}
