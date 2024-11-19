import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.page.html',
  styleUrls: ['./adopt.page.scss'],
})
export class AdoptPage {

  selectedSegment: string = 'reqs'; // Default value can be any segment value you want

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAdoptApplication() {
    this.router.navigate(['/adopt-application']);
  }
}

