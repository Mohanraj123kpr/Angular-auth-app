import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userEmail = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('loggedInUser') || 'Guest';
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}

