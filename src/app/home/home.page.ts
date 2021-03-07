import { Component, OnInit } from '@angular/core';
import { 
  AppDataService
  , BasicStatsDisplay 
} from '../app-data.service';

import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewWillEnter {

  basicStats: BasicStatsDisplay;

  constructor(private appDataSvc: AppDataService) {}

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
}
