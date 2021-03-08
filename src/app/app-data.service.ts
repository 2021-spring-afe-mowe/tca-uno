import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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

export interface PlayAction {
  actionDateTime: Date;
  action: string;
  cardDelta: number;
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

  constructor(private storage: Storage) { 
    //this.loadPreviousGameResults();
  }

  async loadPreviousGameResults() {
    await this.storage.ready();
    const data = await this.storage.get("tcaUnoGameResults");
    
    //console.log("loadPreviousGameResults()", data);
    this.gameResults = data ? JSON.parse(data) : [];
    //console.log("loadPreviousGameResults()", this.gameResults);
  }

  //
  // Some service properties used to store "current," "in progress," game data.
  //
  // This is a convenient way to share data between screens.
  //
  currentGameStartDateTime: Date;
  currentGameOpponents: string[];

  confirmGameEnd(
    winLossOrQuit: string
    , playActions: PlayAction[]
    , nameOfWinner?: string
  ) {

    let newGameResult: GameResult;

    switch (winLossOrQuit) {
      case "Win":
          newGameResult = {
            startDateTime: this.currentGameStartDateTime
            , endDateTime: new Date()
            , opponents: this.currentGameOpponents
            , actions: playActions
            , winningPlayer: "Me"
          };
        break;

      case "Lose":
        newGameResult = {
          startDateTime: this.currentGameStartDateTime
          , endDateTime: new Date()
          , opponents: this.currentGameOpponents
          , actions: playActions
          , winningPlayer: nameOfWinner
        };
        break;

      case "Quit":
        newGameResult = {
          startDateTime: this.currentGameStartDateTime
          , endDateTime: new Date()
          , opponents: this.currentGameOpponents
          , actions: playActions
          , winningPlayer: "None"
        };
        break;
    }

    this.gameResults = [
      ...this.gameResults
      , newGameResult
    ];

    this.storage.set("tcaUnoGameResults", JSON.stringify(this.gameResults));
    console.log("confirmGameEnd()", this.gameResults);
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

  calculateHandSizeFacts() {

    const gamesWithWinIndicatorDateAndArrayOfHandSize = this.gameResults.map(x => ({
      win: x.winningPlayer == "Me"
      , date: x.endDateTime
      , actions: x.actions.reduce(
        (acc, y) => [
          ...acc
          , acc[acc.length - 1] + y.cardDelta
        ]
        , [7]
      )
    }));

    const maxHand = Math.max(
      ...gamesWithWinIndicatorDateAndArrayOfHandSize.reduce(
        (acc, x) => [
          ...acc
          , ...x.actions
        ]
        , []
      )
    );

    const maxHandWin = Math.max(
      ...gamesWithWinIndicatorDateAndArrayOfHandSize
        .filter(x => x.win)
        .reduce(
          (acc, x) => [
            ...acc
            , ...x.actions
          ]
          , []
        )
    );


    console.log(gamesWithWinIndicatorDateAndArrayOfHandSize);

    return {
      largestHand: maxHand
      , largestHandWithWin: maxHandWin
    };
  }

  calculateLeaderboard() {
    return [
      {
        name: "Jack"
        , wins: 3
        , losses: 0
        , winningPercent: 1
      }
      , {
        name: "Tom"
        , wins: 0
        , losses: 3
        , winningPercent: 0
      }
    ];
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

  clearData() {
    this.storage.set("tcaUnoGameResults", JSON.stringify([]));
  }
}
