import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial2Page } from './tutorial2.page';

describe('Tutorial2Page', () => {
  let component: Tutorial2Page;
  let fixture: ComponentFixture<Tutorial2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tutorial2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
