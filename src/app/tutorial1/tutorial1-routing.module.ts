import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial1Page } from './tutorial1.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial1PageRoutingModule {}
