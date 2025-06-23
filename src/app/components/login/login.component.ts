import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {  
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
  error = '';
  loginForm: any;
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    const success = this.auth.login(email!, password!);
    if (success) this.router.navigate(['/dashboard']);
    else this.error = 'Invalid credentials';
  }

}
