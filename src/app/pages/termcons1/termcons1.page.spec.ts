import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Termcons1Page } from './termcons1.page';

describe('Termcons1Page', () => {
  let component: Termcons1Page;
  let fixture: ComponentFixture<Termcons1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Termcons1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
