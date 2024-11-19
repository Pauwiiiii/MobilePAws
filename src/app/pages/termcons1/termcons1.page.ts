import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termcons1',
  templateUrl: './termcons1.page.html',
  styleUrls: ['./termcons1.page.scss'],
})
export class Termcons1Page {

  constructor(private router: Router) {}

   navigateToSignup2() {
    this.router.navigate(['/signup2']); // Navigate to the signup page
  }

}
