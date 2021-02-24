import { Injectable } from '@angular/core';


export interface BasicStatsDisplay {
  numberOfGames: number;
  wins: number;
  losses: number;
  winningPercent: number;
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
}
