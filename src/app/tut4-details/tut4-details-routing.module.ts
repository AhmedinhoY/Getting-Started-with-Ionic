import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tut4DetailsPage } from './tut4-details.page';

const routes: Routes = [
  {
    path: '',
    component: Tut4DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tut4DetailsPageRoutingModule {}
