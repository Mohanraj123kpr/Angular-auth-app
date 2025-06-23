import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: {email: string, password: string}) {
    const encoded = btoa(JSON.stringify(user));
    localStorage.setItem(user.email, encoded);
  }
  
  // Login
  login(email: string, password: string): boolean {
    const data = localStorage.getItem(email); // Look by email
    if (!data) {
      return false;
    }
    const storedUser = JSON.parse(atob(data));
    return storedUser.password === password;
  }
  
}
