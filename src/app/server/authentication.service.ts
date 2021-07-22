import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../model/user';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    this.baseURL = this.baseURL + '';
  }

  // baseURL = 'https://60cd9e2591cc8e00178dbb09.mockapi.io/api/';
  baseURL = 'http://localhost:8200/api/';

  public login(user: User): Observable<any> {
    return this.http.post<any>(this.baseURL + `login`, user);
  }

  public getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
  }

  public setToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
