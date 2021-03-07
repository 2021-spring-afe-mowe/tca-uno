import { Injectable } from '@angular/core';

export interface BasicStatsDisplay {
  numberOfGames: number;
  wins: number;
  losses: number;
  winningPercent: number;
  quits: number;
  completionPercent: number;
}

export interface AvailablePlayerDisplay {
  name: string;
  checked: boolean;
}

interface PlayAction {

  actionDateTime: Date;
  action: string;
}

interface GameResult {
  
  startDateTime: Date;
  endDateTime: Date;

  // "Me" means I won ! ! ! "None" will mean quit, i-o-g ? ? ?
  winningPlayer: string;

  // Only the other players, not "Me" ? ? ? So number of players is length + 1 ! ! ! For now : - O
  //
  // Also, can't allow dupes or "Me" or "None" to be added. They mean something special ! ! !
  opponents: string[];

  // Under construction . . . Losely turns ? ? ?
  actions: PlayAction[];
}
@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  //
  // Some service properties used to store "current," "in progress," game data.
  //
  // This is a convenient way to share data between screens.
  //
  currentGameStartDateTime: Date;
  currentGameOpponents: string[];

  confirmGameEnd(winLossOrQuit: string) {

    let newGameResult: GameResult;

    switch (winLossOrQuit) {
      case "Win":
          newGameResult = {
            startDateTime: this.currentGameStartDateTime
            , endDateTime: new Date()
            , opponents: this.currentGameOpponents
            , actions: []
            , winningPlayer: "Me"
          };
        break;

      case "Lose":
        break;

      case "Quit":
        newGameResult = {
          startDateTime: this.currentGameStartDateTime
          , endDateTime: new Date()
          , opponents: this.currentGameOpponents
          , actions: []
          , winningPlayer: "None"
        };
        break;
    }

    this.gameResults = [
      ...this.gameResults
      , newGameResult
    ];

    console.log(this.gameResults);
  }

  calculateBasicWinLossStats(): BasicStatsDisplay {

    const wins = this.gameResults.filter(x => x.winningPlayer == "Me").length;
    const losses = this.gameResults.filter(x => x.winningPlayer != "Me" && x.winningPlayer != "None").length;
    const totalGames = this.gameResults.length;
    const quits = totalGames - (wins + losses);
    return (
      {
        numberOfGames: this.gameResults.length
        , wins: wins
        , losses: losses
        , winningPercent: wins / (wins + losses)
        , quits: quits
        , completionPercent: (totalGames - quits) / totalGames
      }
    );
  }

  gameResults: GameResult[] = [];

  public getPreviousOpponents() {
    return this.getOpponents(this.gameResults);
  }

  private getOpponents = (results: GameResult[]): AvailablePlayerDisplay[] =>  
    [... new Set(
      results.map(x => x.opponents)
        .reduce(
          (acc, x) => [...acc, ...x]
          , []
      )
    )]
    .sort()
    .map(x => ({
          name: x
          , checked: false
    }))
  ;
}
