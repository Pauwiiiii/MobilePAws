import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetquesintroPage } from './petquesintro.page';

describe('PetquesintroPage', () => {
  let component: PetquesintroPage;
  let fixture: ComponentFixture<PetquesintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetquesintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
