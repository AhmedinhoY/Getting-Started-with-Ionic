import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial5PageRoutingModule } from './tutorial5-routing.module';

import { Tutorial5Page } from './tutorial5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial5PageRoutingModule
  ],
  declarations: [Tutorial5Page]
})
export class Tutorial5PageModule {}
