import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
   
    const rulles = /^(?=.*[A-Za-z])(?=.*\d).+$/

    const HAS_LETTERS_AND_NUMBERS = rulles.test(control.value)

    if(!HAS_LETTERS_AND_NUMBERS){
      return {'invalidPassword': true}
    }

    return null

  }
 
}
