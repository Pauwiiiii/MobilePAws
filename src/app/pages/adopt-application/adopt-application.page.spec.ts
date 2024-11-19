import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptApplicationPage } from './adopt-application.page';

describe('AdoptApplicationPage', () => {
  let component: AdoptApplicationPage;
  let fixture: ComponentFixture<AdoptApplicationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
