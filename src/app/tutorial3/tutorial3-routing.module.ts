import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial3Page } from './tutorial3.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial3PageRoutingModule {}
