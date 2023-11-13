import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tut4DetailsPageRoutingModule } from './tut4-details-routing.module';

import { Tut4DetailsPage } from './tut4-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tut4DetailsPageRoutingModule
  ],
  declarations: [Tut4DetailsPage]
})
export class Tut4DetailsPageModule {}
