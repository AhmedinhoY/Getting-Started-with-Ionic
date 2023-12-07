import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial5Page } from './tutorial5.page';

describe('Tutorial5Page', () => {
  let component: Tutorial5Page;
  let fixture: ComponentFixture<Tutorial5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tutorial5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
