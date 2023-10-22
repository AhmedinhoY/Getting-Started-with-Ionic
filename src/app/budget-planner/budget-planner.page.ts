import { Component, OnInit } from '@angular/core';

interface Budget {
  reason: string;
  amount: number;
}
@Component({
  selector: 'app-budget-planner',
  templateUrl: './budget-planner.page.html',
  styleUrls: ['./budget-planner.page.scss'],
})
export class BudgetPlannerPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  xReason = '';
  xAmount = '';
  list: Budget[] = [];

  addExpense() {
    this.list.push({
      reason: this.xReason,
      amount: Number(this.xAmount),
    });
  }

  deleteExpense() {
    this.list.pop();
  }
}
