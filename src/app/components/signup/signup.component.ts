import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../shared/button/button.component';
import { LinkComponent } from '../shared/link/link.component';
import { CustomValidators } from '../../utils/validators';
@Component({
  selector: 'app-signup',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    LinkComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  error = '';
  signupForm: any;

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            CustomValidators.emailDomain([
              '.com',
              '.co',
              '.in',
              '.org',
              '.net',
            ]),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
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

  // Custom validator to check if passwords match
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
