import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'votings', pathMatch: 'full' },
  {
    path: 'votings',
    loadChildren: () => import('./pages/votings/votings.module').then( m => m.VotingsPageModule)
  },
  {
    path: 'votings/:id',
    loadChildren: () => import('./pages/voting-details/voting-details.module').then( m => m.VotingDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
