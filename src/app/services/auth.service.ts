import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/pawsconnect_api/login.php';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl, body);
  }
}
