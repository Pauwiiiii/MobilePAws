import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:5000/login'; // API URL

  constructor(private http: HttpClient) {}

  // Update the method to accept email 
  login(email: string, password: string): Observable<any> {
    const body = { email, password }; 
    return this.http.post(this.apiUrl, body);
  }

  // Method to set the login state
  setLoginState(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }

  // Method to check if the user is logged in
  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Method to log out
  logout(): void {
    this.setLoginState(false); // Set the login state to false
    localStorage.removeItem('user'); // Clear user data if stored
  }
}
