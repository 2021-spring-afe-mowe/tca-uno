import { Injectable } from '@angular/core';

export interface BasicStatsDisplay {
  numberOfGames: number;
  wins: number;
  losses: number;
  winningPercent: number;
}

export interface AvailablePlayerDisplay {
  name: string;
  checked: boolean;
}

interface GameResult {
  
  // "Me" means I won ! ! !
  winningPlayer: string;

  // Only the other players, not "Me" ? ? ? So number of players is length + 1 ! ! ! For now : - O
  //
  // Also, can't allow dupes or "Me" to be added. It's means something special ! ! !
  opponents: string[];

  // Under construction . . . Losely turns ? ? ?
  actions: string[];
}
@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor() { }

  calculateBasicWinLossStats(): BasicStatsDisplay {
    return (
      {
        numberOfGames: 3
        , wins: 2
        , losses: 1
        , winningPercent: 0.667
      }
    );
  }

  gameResults: GameResult[] = [
    {
        winningPlayer: "Me"
        , opponents: [
            "Tom Tubon"
            , "Taylor"
            , "Jack"
            , "Stephanie"
        ]
        , actions: []
    }
    , {
        winningPlayer: "Taylor"
        , opponents: [
            "Tom Tubon"
            , "Taylor"
        ]
        , actions: []
    }
    , {
        winningPlayer: "Me"
        , opponents: [
            "Tom Tubon"
            , "Jack"
        ]
        , actions: []
    }
  ];

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
