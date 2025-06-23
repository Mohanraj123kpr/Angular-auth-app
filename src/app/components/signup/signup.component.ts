import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
  error = '';
  signupForm: any;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) return;
    const { email, password, confirmPassword } = this.signupForm.value;
    if (password !== confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
    this.auth.register({ email: email!, password: password! });
    this.router.navigate(['/login']);
  }
}
