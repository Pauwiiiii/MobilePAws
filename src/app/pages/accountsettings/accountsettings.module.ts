import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsettingsPageRoutingModule } from './accountsettings-routing.module';

import { AccountSettingsPage } from './accountsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsettingsPageRoutingModule
  ],
  declarations: [AccountSettingsPage]
})
export class AccountsettingsPageModule {}
