import { Component, OnInit } from '@angular/core';
import { 
  AppDataService
} from '../app-data.service';
@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor(private appDataSvc: AppDataService) { }

  availablePlayers = [];

  ngOnInit() {

    this.availablePlayers = this.appDataSvc.getPreviousOpponents();
  }

  newPlayerName = "";

  addNewPlayer() {
    this.availablePlayers = [
      ...this.availablePlayers
      , {
        name: this.newPlayerName
        , checked: true // Assume adding name to play with this player right away ! ! !
      }
    ];

    this.newPlayerName = "";
  }

}
