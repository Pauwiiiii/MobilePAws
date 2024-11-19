import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petquesintro',
  templateUrl: './petquesintro.page.html',
  styleUrls: ['./petquesintro.page.scss'],
})
export class PetquesintroPage {

  constructor(private router: Router) {}

  navigateToPetques() {
    this.router.navigate(['/petques']);
  }
 
 }