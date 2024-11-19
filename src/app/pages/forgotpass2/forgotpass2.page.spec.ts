import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forgotpass2Page } from './forgotpass2.page';

describe('Forgotpass2Page', () => {
  let component: Forgotpass2Page;
  let fixture: ComponentFixture<Login2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgotpass2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});