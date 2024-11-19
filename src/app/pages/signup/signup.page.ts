import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSignup() {
    if (this.signupData.password === this.signupData.confirmPassword) {
      // Call your signup logic here, e.g., AuthService.signup(this.signupData);
      console.log('Signup successful:', this.signupData);
      // Reset the form
      this.signupData = { username: '', email: '', password: '', confirmPassword: '' };
      // Redirect to the login page or home page after signup
      this.router.navigate(['/login']);
    } else {
      console.error('Passwords do not match');
      // Handle password mismatch error (e.g., show a toast message)
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']); // Navigate back to the login page
  }

  navigateToSignup1() {
    this.router.navigate(['/signup1']); // Navigate to the signup page
  }
}
