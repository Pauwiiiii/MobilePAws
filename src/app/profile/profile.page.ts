import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isEditing: boolean = false;

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

  constructor() {}

  ngOnInit() {}

  toggleEdit() {
    if (this.isEditing) {
      // Save user details (implement save logic here)
      console.log('User details saved:', this.userDetails);
    }
    this.isEditing = !this.isEditing;
  }

  onSignOut() {
    // Implement sign-out logic here
    console.log('User signed out');
  }

  uploadImage() {
    // Logic to upload the image
    // You might use a file input element or a file picker here
    console.log('Upload image logic here');
  }
}
