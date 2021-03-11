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

  updateWithPastedGameResults(results) {
    this.gameResults = results;
    this.storage.set("tcaUnoGameResults", JSON.stringify(this.gameResults));
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
      largestHand: isFinite(maxHand) ? maxHand : 0
      , largestHandWithWin: isFinite(maxHandWin) ? maxHandWin : 0
    };
  }

  calculateLeaderboard() {

    const gameResultsGroupedByPlayers = this.gameResults

      // Make sure a "Me" is always in a new players array used for grouping.
      .map(x => ({
        ...x
        , players: [
          "Me"
          , ...x.opponents
        ]
      }))
      .reduce(
        (acc, x) => {
          x.players.forEach(y => acc.set(y, [...acc.get(y)|| [], x] ));
          return acc;
        }
        , new Map()
      )
    ;

    console.log([...gameResultsGroupedByPlayers]);

    const finalShape = [...gameResultsGroupedByPlayers]
      .map(x => {
          const wins = x[1].filter(y => y.winningPlayer == x[0]).length;
          const losses = x[1].filter(y => y.winningPlayer != x[0] && y.winningPlayer != "None").length;

          return {
            name: x[0]
            , wins: wins
            , losses: losses 
            , winningPercent: (wins / (wins + losses)) || 0
          }
        }
      )

      .sort((a, b) => a.winningPercent > b.winningPercent ? -1 : 1)
    ;

    console.log(finalShape);

    return finalShape;
  }

  timeConversion(duration: number) {
    const portions: string[] = [];
  
    const msInHour = 1000 * 60 * 60;
    const hours = Math.trunc(duration / msInHour);
    if (hours > 0) {
      portions.push(hours + 'h');
      duration = duration - (hours * msInHour);
    }
  
    const msInMinute = 1000 * 60;
    const minutes = Math.trunc(duration / msInMinute);
    if (minutes > 0) {
      portions.push(minutes + 'm');
      duration = duration - (minutes * msInMinute);
    }
  
    const seconds = Math.trunc(duration / 1000);
    if (seconds > 0) {
      portions.push(seconds + 's');
    }
  
    return portions.join(' ');
  }

  calculateGameTimeFacts() {

    const gamesWithDurations = this.gameResults.map(x => Date.parse((x as any).endDateTime) - Date.parse((x as any).startDateTime));
    console.log(gamesWithDurations);

    return {
      longest: gamesWithDurations.length > 0 ? this.timeConversion(Math.max(...gamesWithDurations)) : "n/a"
      , shortest: gamesWithDurations.length > 0 ? this.timeConversion(Math.min(...gamesWithDurations)) : "n/a"
    };
  }

  calculateGameSizeStats() {

    const gameResultsGroupedByNumberOfPlayers = this.gameResults
      .reduce(
        (acc, x) => acc.set(x.opponents.length + 1, [...acc.get(x.opponents.length + 1)|| [], x] )
        , new Map()
      )
    ;

    console.log([...gameResultsGroupedByNumberOfPlayers]);

    const finalShape = [...gameResultsGroupedByNumberOfPlayers]
      .map(x => {
          const wins = x[1].filter(y => y.winningPlayer == "Me").length;
          const losses = x[1].filter(y => y.winningPlayer != "Me" && y.winningPlayer != "None").length;

          return {
            numberOfPlayers: x[0]
            , wins: wins
            , losses: losses 
            , winningPercent: (wins / (wins + losses)) || 0
          }
        }
      )

      .sort((a, b) => a.numberOfPlayers > b.numberOfPlayers ? 1 : -1)
    ;

    console.log(finalShape);

    return finalShape;
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
