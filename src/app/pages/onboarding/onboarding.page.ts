import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {

  constructor(private router: Router) {}

 navigateToPetquesintro() {
   this.router.navigate(['/petquesintro']); // Navigate to the signup page
 }

}
