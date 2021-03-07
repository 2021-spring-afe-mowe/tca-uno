import { Component, OnInit } from '@angular/core';
import { 
  AppDataService
  , BasicStatsDisplay 
} from '../app-data.service';

import { ViewWillEnter } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {

  basicStats: BasicStatsDisplay;

  constructor(
    private appDataSvc: AppDataService
    , private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {

    // Init with blanks before loading via getStarted(), say what ? ? ?
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
    
    this.getStarted();
  }

  async getStarted() {
    await this.appDataSvc.loadPreviousGameResults();
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
  }

  ionViewWillEnter() {
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
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
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }
}
