import { Component } from '@angular/core';
import { 
  AppDataService
  , BasicStatsDisplay 
} from '../app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  basicStats: BasicStatsDisplay;

  constructor(private appDataSvc: AppDataService) {
    //console.log(this.appDataSvc.calculateBasicWinLossStats());
    this.basicStats = this.appDataSvc.calculateBasicWinLossStats();
  }
}
