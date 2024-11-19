import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page {

  constructor(private router: Router) {}

   navigateToForgotpass() {
    this.router.navigate(['/forgotpass']); // Navigate to the signup page
  }

  navigateToOnboarding() {
    this.router.navigate(['/onboarding']); // Navigate to the signup page
  }

  navigateToTermcons1() {
    this.router.navigate(['/termcons1']); // Navigate to the signup page
  }

}
