import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {

  userDetails = {
    firstName: 'itsmedapny',
    lastName: 'Luna',
    birthday: '1990-01-01',
    age: '24 years old',
    region: 'MIMAROPA Region IV-B',
    province: 'Palawan',
    city: 'Puerto Princesa',
    barangay: 'Sicsican',
    street: 'Street Maganda',
    phoneNumber: '555-123-4567',
    email: 'name@example.com',
  };
  
  constructor() { }

  ngOnInit() {
  }

}
