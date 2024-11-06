import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request/request.service';
import { environment } from 'src/environments/environment.prod';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  showHeader: boolean = false;      // Declare showHeader
  showBottomBar: boolean = false;   // Declare showBottomBar

  // Variables for password visibility
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  public profile = {
    name: "",
    email: ""
  };

  constructor(
    private router: Router,
    private requestservice: RequestService,
    private loadingservice: LoadingService,
    private toasterservice: ToastService,
    private storageservice: StorageService,
    private changesdetector: ChangeDetectorRef
  ) {}

  // Function to toggle password visibility
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  loginWithEmailPassword() {
    if (!this.email) {
      this.emailError = true;
      this.passwordError = false;
      return;
    }
    if (!this.password) {
      this.passwordError = true;
      this.emailError = false;
      return;
    }
  
    this.loadingservice.showLoading("Signing-in");
  
    const loginData = {
      email: this.email,
      password: this.password,
      apikey: environment.apiKey
    };
  
    this.requestservice.post(environment.apiRoute, loginData)
      .then((result: any) => {
        console.log('Login Result:', result);  // Debugging result
  
        if (result.message === 'Login successful') {
          // Save user id, name, and email in storage
          this.storageservice.setStorage("userid", result.user.id);
          this.storageservice.setStorage("name", result.user.name);
          this.storageservice.setStorage("email", result.user.email);
  
          this.loadingservice.dismiss();
          this.changesdetector.detectChanges();
  
          // Redirect to the returnUrl if provided, otherwise go to home page
          const returnUrl = this.router.url.split('?')[1]?.split('=')[1] || '/home';
          this.router.navigate([returnUrl]);
        } else {
          this.loadingservice.dismiss();
          this.toasterservice.presentToast(result.message, 5000, "top");
        }
      })
      .catch((error) => {
        this.loadingservice.dismiss();
        console.error('Login Error:', error);  // Debugging error
        this.toasterservice.presentToast("Authentication Failed", 5000, "top");
      });
  }
}  
