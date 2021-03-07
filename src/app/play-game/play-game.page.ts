import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController
    , private router: Router
    , private appDataSvc: AppDataService
    , private toastController: ToastController
    ) { }

  ngOnInit() {
  }

  winGame() {
    this.presentWinQuitActionSheet("Win");
  }

  quitGame() {
    this.presentWinQuitActionSheet("Quit");
  }

  loseGame() {
    this.presentLoseActionSheet();
  }

  cardCount = 7;

  playCard() {

    if (this.cardCount == 0) {
      this.presentToast('You sure?');
      return;
    }

    this.cardCount -= 1;
  }

  drawTwo() {
    this.cardCount += 2;
  }

  drawFour() {
    this.cardCount += 4;
  }

  drawTwoForgotUno() {
    this.cardCount += 2;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  async presentWinQuitActionSheet(what: string) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: `Confirm ${what}`,
          handler: () => {
            this.appDataSvc.confirmGameEnd(what);
            this.router.navigate(["/"]);
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

  async presentLoseActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Choose winner..."
      , buttons: [
          ...this.appDataSvc.currentGameOpponents.map(x => ({
            text: x
            , handler: () => {
              this.appDataSvc.confirmGameEnd("Lose", x);
              this.router.navigate(["/"]);
            }
          }))
        , {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }  
}
