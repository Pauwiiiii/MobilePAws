import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermconsPage } from './termcons.page';

describe('TermconsPage', () => {
  let component: TermconsPage;
  let fixture: ComponentFixture<TermconsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
