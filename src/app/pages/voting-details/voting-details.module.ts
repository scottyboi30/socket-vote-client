import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotingDetailsPageRoutingModule } from './voting-details-routing.module';

import { VotingDetailsPage } from './voting-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotingDetailsPageRoutingModule
  ],
  declarations: [VotingDetailsPage]
})
export class VotingDetailsPageModule {}
