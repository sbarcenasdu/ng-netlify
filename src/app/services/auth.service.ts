import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() {
    if (this.isLocalStorageAvailable()) {
      const storedAuth = localStorage.getItem('isAuthenticated');
      this.isAuthenticated = storedAuth === 'true';
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  login() {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
    console.log('AuthService: User logged in!');

  }

  logout() {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', 'false');
    console.log('AuthService: User logged out!');
  }

  checkAuthentication(): boolean {
    console.log('AuthService: Checking authentication status:', this.isAuthenticated);
    return this.isAuthenticated;
  }
}
