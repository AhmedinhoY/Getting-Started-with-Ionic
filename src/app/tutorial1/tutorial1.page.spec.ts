import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial1Page } from './tutorial1.page';

describe('Tutorial1Page', () => {
  let component: Tutorial1Page;
  let fixture: ComponentFixture<Tutorial1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tutorial1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
