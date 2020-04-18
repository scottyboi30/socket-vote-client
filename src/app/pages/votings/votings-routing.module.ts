import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotingsPage } from './votings.page';

const routes: Routes = [
  {
    path: '',
    component: VotingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingsPageRoutingModule {}
