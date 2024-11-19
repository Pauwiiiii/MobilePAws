import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetquesPage } from './petques.page';

describe('PetquesPage', () => {
  let component: PetquesPage;
  let fixture: ComponentFixture<PetquesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
