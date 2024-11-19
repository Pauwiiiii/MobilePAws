import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page {

  constructor(private router: Router) {}

   navigateToForgotpass() {
    this.router.navigate(['/forgotpass']); // Navigate to the signup page
  }

  navigateToHome() {
    this.router.navigate(['/home']); // Navigate to the signup page
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }


}