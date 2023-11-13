import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial4PageRoutingModule } from './tutorial4-routing.module';

import { Tutorial4Page } from './tutorial4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial4PageRoutingModule
  ],
  declarations: [Tutorial4Page]
})
export class Tutorial4PageModule {}
