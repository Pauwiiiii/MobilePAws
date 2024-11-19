import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page {
  constructor(private router: Router) {}

  loginWithEmailPassword() {
    // Add your login logic here
    // Navigate to home or dashboard upon successful login
    this.router.navigate(['/home']);
  }

  loginWithGoogle() {
    // Add your Google login logic here
    // Navigate to home or dashboard upon successful Google login
    this.router.navigate(['/home']);
  }

  navigateToSignup2() {
    this.router.navigate(['/signup2']); // Navigate to the signup page
  }

}