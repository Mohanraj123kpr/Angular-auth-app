import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  stage = 'verify'; // stages: 'verify' | 'reset'
  userEmail = '';
  error = '';
  success = '';
  verifyForm: any;
  resetForm: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    // Initialize forms
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
    console.log(localStorage.getItem('user'));
  }

  onVerifyEmail() {
    const email = this.verifyForm.value.email!;
    const stored = localStorage.getItem(email);
    if (!stored) {
      this.error = 'Email not found.';
      return;
    }

    this.userEmail = email;
    this.error = '';
    this.stage = 'reset';
  }

  onResetPassword() {
    const { password, confirmPassword } = this.resetForm.value;

    if (password !== confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    const userData = { email: this.userEmail, password };
    localStorage.setItem(this.userEmail, btoa(JSON.stringify(userData)));

    this.success = 'Password has been reset successfully. You can now log in.';
    this.error = '';
    this.stage = 'done';
  }

}
