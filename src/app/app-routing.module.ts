import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'setup-game',
    loadChildren: () => import('./setup-game/setup-game.module').then( m => m.SetupGamePageModule)
  },
  {
    path: 'play-game',
    loadChildren: () => import('./play-game/play-game.module').then( m => m.PlayGamePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      , { 
        preloadingStrategy: PreloadAllModules 
        , useHash: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
