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
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
  }

  ionViewWillEnter() {
    console.log("here");
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
  }
}
