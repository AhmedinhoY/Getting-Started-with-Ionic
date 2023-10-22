import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial3PageRoutingModule } from './tutorial3-routing.module';

import { Tutorial3Page } from './tutorial3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial3PageRoutingModule
  ],
  declarations: [Tutorial3Page]
})
export class Tutorial3PageModule {}
