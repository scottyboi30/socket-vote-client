import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartVotingPage } from './start-voting.page';

const routes: Routes = [
  {
    path: '',
    component: StartVotingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartVotingPageRoutingModule {}
