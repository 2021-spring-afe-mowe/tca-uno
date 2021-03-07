import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppDataService, PlayAction } from '../app-data.service';
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

    if (this.cardCount > 1) {
      this.presentToast('You sure?');
      return;
    }

    this.presentWinQuitActionSheet("Win");
  }

  quitGame() {
    this.presentWinQuitActionSheet("Quit");
  }

  loseGame() {
    this.presentLoseActionSheet();
  }

  get cardCount() {
    return this.playActions.reduce(
      (acc, x) => acc + x.cardDelta
      , 7
    );
  };

  playActions: PlayAction[] = [];

  playCard() {

    if (this.cardCount == 0) {
      this.presentToast('You sure?');
      return;
    }

    this.playActions = [
      ...this.playActions
      , {
        actionDateTime: new Date()
        , action: "Play Card"
        , cardDelta: -1
      }
    ];
  }

  drawTwo() {
    this.playActions = [
      ...this.playActions
      , {
        actionDateTime: new Date()
        , action: "Draw Two"
        , cardDelta: 2
      }
    ];
}

  drawFour() {
    this.playActions = [
      ...this.playActions
      , {
        actionDateTime: new Date()
        , action: "Draw Four"
        , cardDelta: 4
      }
    ];
  }

  drawTwoForgotUno() {
    this.playActions = [
      ...this.playActions
      , {
        actionDateTime: new Date()
        , action: "Caught Draw Two"
        , cardDelta: 2
      }
    ];
  }

  drawCard(played: boolean) {
    this.playActions = [
      ...this.playActions
      , {
        actionDateTime: new Date()
        , action: "Draw Card"
        , cardDelta: played ? 0 : 1 
      }
    ];
  }

  undoLastPlayAction() {
    this.playActions = this.playActions.filter((x, i) => i != this.playActions.length - 1);
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

            if(this.cardCount == 1) {
              // Assume user played their last card to win ! ! !
              this.playCard();
            }

            this.appDataSvc.confirmGameEnd(what, this.playActions);
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
              this.appDataSvc.confirmGameEnd("Lose", this.playActions, x);
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
