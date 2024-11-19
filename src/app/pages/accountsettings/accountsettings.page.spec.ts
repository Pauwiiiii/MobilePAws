import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsettingsPage } from './accountsettings.page';

describe('AccountsettingsPage', () => {
  let component: AccountsettingsPage;
  let fixture: ComponentFixture<AccountsettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
