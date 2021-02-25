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

  appData2 = [
    {
        gameResult: "W"
        , players: [
            "Tom Tubon"
            , "Taylor"
            , "Jack"
            , "Stephanie"
        ]
    }
    , {
        gameResult: "L"
        , players: [
            "Tom Tubon"
            , "Taylor"
        ]
    }
    , {
        gameResult: "W"
        , players: [
            "Tom Tubon"
            , "Jack"
        ]
    }
  ];

  getAvailablePlayers = (): any[] =>  
    [... new Set(
      this.appData2.map(x => x.players)
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
