import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial4Page } from './tutorial4.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial4PageRoutingModule {}
