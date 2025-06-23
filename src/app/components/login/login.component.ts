import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../shared/button/button.component';
import { LinkComponent } from '../shared/link/link.component';
import { CustomValidators } from '../../utils/validators';
@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    LinkComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  error = '';
  loginForm: any;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          CustomValidators.emailDomain(['.com', '.co', '.in', '.org', '.net']),
        ],
      ],
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

  // Helper methods for template
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
