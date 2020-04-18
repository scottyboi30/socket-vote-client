import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartVotingPageRoutingModule } from './start-voting-routing.module';

import { StartVotingPage } from './start-voting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartVotingPageRoutingModule
  ],
  declarations: [StartVotingPage]
})
export class StartVotingPageModule {}
