import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tut4DetailsPage } from './tut4-details.page';

describe('Tut4DetailsPage', () => {
  let component: Tut4DetailsPage;
  let fixture: ComponentFixture<Tut4DetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tut4DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
