import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  loginWithEmailPassword() {
    this.router.navigate(['/home']);
  }

  loginWithGoogle() {
    this.router.navigate(['/home']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); 
  }

  navigateToLogin2() {
    this.router.navigate(['/login2']); 
  }
}
