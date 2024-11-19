import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petques',
  templateUrl: './petques.page.html',
  styleUrls: ['./petques.page.scss'],
})
export class PetquesPage {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
 
 }