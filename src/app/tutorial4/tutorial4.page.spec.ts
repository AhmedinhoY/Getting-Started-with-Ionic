import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial4Page } from './tutorial4.page';

describe('Tutorial4Page', () => {
  let component: Tutorial4Page;
  let fixture: ComponentFixture<Tutorial4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tutorial4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
