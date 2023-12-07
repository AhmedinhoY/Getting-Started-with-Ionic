import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial5Page } from './tutorial5.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial5PageRoutingModule {}
