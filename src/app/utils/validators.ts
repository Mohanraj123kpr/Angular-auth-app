import { AbstractControl, Validators } from '@angular/forms';

export class CustomValidators {
  static emailDomain(domains: string[]) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // First check with Angular's built-in email validator
      if (Validators.email(control)) {
        return { email: true };
      }
      
      const email = control.value;
      if (!email) return null;
      
      // Check if email matches any of the allowed domains
      const matches = domains.some(domain => 
        email.substring(email.lastIndexOf('@') + 1).endsWith(domain)
      );
      
      return matches ? null : { emailDomain: true };
    };
  }
}