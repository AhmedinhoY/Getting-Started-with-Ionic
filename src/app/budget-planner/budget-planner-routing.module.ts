import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetPlannerPage } from './budget-planner.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetPlannerPageRoutingModule {}
