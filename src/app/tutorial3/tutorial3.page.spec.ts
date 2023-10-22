import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial3Page } from './tutorial3.page';

describe('Tutorial3Page', () => {
  let component: Tutorial3Page;
  let fixture: ComponentFixture<Tutorial3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tutorial3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
