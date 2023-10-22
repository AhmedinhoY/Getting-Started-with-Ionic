import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPlannerPageRoutingModule } from './budget-planner-routing.module';

import { BudgetPlannerPage } from './budget-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetPlannerPageRoutingModule
  ],
  declarations: [BudgetPlannerPage]
})
export class BudgetPlannerPageModule {}
