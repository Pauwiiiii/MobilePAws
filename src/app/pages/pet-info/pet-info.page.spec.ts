import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetInfoPage } from './pet-info.page';

describe('PetInfoPage', () => {
  let component: PetInfoPage;
  let fixture: ComponentFixture<PetInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
