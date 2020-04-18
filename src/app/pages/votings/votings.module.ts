import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotingsPageRoutingModule } from './votings-routing.module';

import { VotingsPage } from './votings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotingsPageRoutingModule
  ],
  declarations: [VotingsPage]
})
export class VotingsPageModule {}
