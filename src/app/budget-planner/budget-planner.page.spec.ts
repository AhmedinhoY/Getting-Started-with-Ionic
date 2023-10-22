import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetPlannerPage } from './budget-planner.page';

describe('BudgetPlannerPage', () => {
  let component: BudgetPlannerPage;
  let fixture: ComponentFixture<BudgetPlannerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BudgetPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
