// src/app/pages/accountsettings/accountsettings.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountSettingsPage {
  userName = 'Karina Ano';
  userEmail = 'Karina.ano@example.com';
  isLoggedIn = true;

  constructor(private navCtrl: NavController) {}

  navigateToEditProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  navigateToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  signOut() {
    this.isLoggedIn = false;
    this.navCtrl.navigateRoot('/login');
  }
}
