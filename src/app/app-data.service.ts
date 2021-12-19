import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { marshall } from '@aws-sdk/util-dynamodb';
import { HttpClient } from '@angular/common/http';

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
  actionDateTime: string;
  action: string;
  cardDelta: number;
}

interface GameResult {
  
  startDateTime: string;
  endDateTime: string;

  // "Me" means I won ! ! ! "None" will mean quit, i-o-g ? ? ?
  winningPlayer: string;

  // Only the other players, not "Me" ? ? ? So number of players is length + 1 ! ! ! For now : - O
  //
  // Also, can't allow dupes or "Me" or "None" to be added. They mean something special ! ! !
  opponents: string[];

  // Under construction . . . Losely turns ? ? ?
  actions: PlayAction[];

  firstCardPlayedBy: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(
    private storage: Storage
    , private httpSvc: HttpClient
  ) { 
    //this.loadPreviousGameResults();
  }

  async loadPreviousGameResults() {
    await this.storage.ready();
    const data = await this.storage.get("tcaUnoGameResults");
    
    //console.log("loadPreviousGameResults()", data);
    this.gameResults = data ? JSON.parse(data) : [];
    console.log("loadPreviousGameResults()", this.gameResults);

    // One time ! ! !
    // const isoData = this.gameResults.map(x => ({
    //   ...x
    //   , startDateTime: new Date(x.startDateTime).toISOString()
    //   , endDateTime: new Date(x.endDateTime).toISOString()
    //   , actions: x.actions.map(y => ({
    //     ...y
    //     , actionDateTime: new Date(y.actionDateTime).toISOString()
    //   }))
    // }));

    // console.log(isoData);

    // this.storage.set("tcaUnoGameResults", JSON.stringify(isoData));

  }

  getResultsInReverseChron() {
    return [...(this.gameResults.sort((a, b) => a.endDateTime >= b.endDateTime ? -1 : 1))];
  }

  //
  // Some service properties used to store "current," "in progress," game data.
  //
  // This is a convenient way to share data between screens.
  //
  currentGameStartDateTime: string;
  currentGameOpponents: string[];

  confirmGameEnd(
    winLossOrQuit: string
    , playActions: PlayAction[]
    , firstCardPlayedBy: string
    , nameOfWinner?: string
  ) {

    let newGameResult: GameResult;

    switch (winLossOrQuit) {
      case "Win":
          newGameResult = {
            startDateTime: this.currentGameStartDateTime
            , endDateTime: new Date().toISOString()
            , opponents: this.currentGameOpponents
            , actions: playActions
            , winningPlayer: "Me"
            , firstCardPlayedBy: firstCardPlayedBy
          };
        break;

      case "Lose":
        newGameResult = {
          startDateTime: this.currentGameStartDateTime
          , endDateTime: new Date().toISOString()
          , opponents: this.currentGameOpponents
          , actions: playActions
          , winningPlayer: nameOfWinner
          , firstCardPlayedBy: firstCardPlayedBy
        };
        break;

      case "Quit":
        newGameResult = {
          startDateTime: this.currentGameStartDateTime
          , endDateTime: new Date().toISOString()
          , opponents: this.currentGameOpponents
          , actions: playActions
          , winningPlayer: "None"
          , firstCardPlayedBy: firstCardPlayedBy
        };
        break;
    }

    // https://32wop75hhc.execute-api.us-east-1.amazonaws.com/prod/data/?user=tsteele@madisoncollege.edu&game=tca-uno
    
    const marshalledGameResult = marshall(
      newGameResult
      , {
        removeUndefinedValues: true
        , convertClassInstanceToMap: true
      }
    );

    console.log("marshalledGameResult", marshalledGameResult);

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

  calculateGameTurnFacts() {

    const gamesWithTurnCounts = this.gameResults.map(x => x.actions.length);
    const gameWinsTurnCounts = this.gameResults
      .filter(x => x.winningPlayer == "Me")
      .map(x => x.actions.length)
    ;
    const gameLossesTurnCounts = this.gameResults
      .filter(x => x.winningPlayer != "Me" && x.winningPlayer != "None")
      .map(x => x.actions.length)
    ;

    return {
      mostTurns: gamesWithTurnCounts.length > 0 ? Math.max(...gamesWithTurnCounts).toString() : "n/a"
      , fewestTurns: gamesWithTurnCounts.length > 0 ? Math.min(...gamesWithTurnCounts).toString() : "n/a"
      , quickestWin: gameWinsTurnCounts.length > 0 ? Math.min(...gameWinsTurnCounts).toString() : "n/a"
      , quickestLoss: gameLossesTurnCounts.length > 0 ? Math.min(...gameLossesTurnCounts).toString() : "n/a"
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

  calculateFirstCardStats() {

    const gameResultsWithFirstPlayerData = this.gameResults.filter(x => x.firstCardPlayedBy && x.firstCardPlayedBy.length > 0 && x.winningPlayer != "None");
    console.log("calculateFirstCardStats", gameResultsWithFirstPlayerData);

    const firstPlayerWonCount = gameResultsWithFirstPlayerData.filter(x => x.firstCardPlayedBy == x.winningPlayer).length;

    return {
      winningPercent: firstPlayerWonCount / gameResultsWithFirstPlayerData.length
      , numberOfGames: gameResultsWithFirstPlayerData.length
    };
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

  saveGame = () => {
    this.httpSvc.post(
      "https://32wop75hhc.execute-api.us-east-1.amazonaws.com/prod/data"
      , `
        {
          "TableName": "tca-data",
          "Item": {
              "pk": {
                  "S": "tsteele@madisoncollege.edu"
              },
              "sk": {
                  "S": "tca-uno#2021-12-16T23:43:41.360Z"
              }
          }
      }      
      `
    ).subscribe();
  };
}
