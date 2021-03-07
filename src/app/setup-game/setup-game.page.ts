import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  AppDataService
} from '../app-data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor(
    private appDataSvc: AppDataService
    , private router: Router
    , private toastController: ToastController
  ) { }

  availablePlayers = [];

  ngOnInit() {

    this.availablePlayers = this.appDataSvc.getPreviousOpponents();
  }

  newPlayerName = "";

  addNewPlayer() {

    // Validate unique player name, and not "Me" or "None"...
    if (
      this.newPlayerName.trim().length == 0
      || this.newPlayerName.toUpperCase() == "ME"
      || this.newPlayerName.toUpperCase() == "NONE"
      || this.availablePlayers.some(x => x.name.toUpperCase() == this.newPlayerName.toUpperCase())
    ) {
      this.presentToast('Please enter unique name');
      return;
    }
    
    this.availablePlayers = [
      ...this.availablePlayers
      , {
        name: this.newPlayerName
        , checked: true // Assume adding name to play with this player right away ! ! !
      }
    ].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);

    this.newPlayerName = "";
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  startGame() {

    if (!this.availablePlayers.some(x => x.checked)) {
      this.presentToast('Pick at least one opponent');
      return;
    }

    this.appDataSvc.currentGameStartDateTime = new Date();

    this.appDataSvc.currentGameOpponents = [
      ...this.availablePlayers
        .filter(x => x.checked)
        .map(x => x.name)
    ];

    this.router.navigate(["/play-game"]);
  }
}
