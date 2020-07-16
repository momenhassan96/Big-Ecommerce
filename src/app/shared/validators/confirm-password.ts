import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export class ConfirmPassword {
   static passwordErrorValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
        const password = control.get('Password');
        const confirmPassword = control.get('confirmPassword');
            return password.value != confirmPassword.value ? { 'passwordError': true } : null;        
      };
}
