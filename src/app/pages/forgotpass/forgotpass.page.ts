import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage {
    constructor(private router: Router) {}

    navigateToForgotpass2() {
      this.router.navigate(['/forgotpass2']); // Navigate to the signup page
    }
  }
