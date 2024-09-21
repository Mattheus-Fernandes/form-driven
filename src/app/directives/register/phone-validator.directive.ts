import { Directive, HostBinding, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors | null {

    const phoneRules = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;

    const PHONE_INVALID = phoneRules.test(control.value);
    
    return PHONE_INVALID ? null : {'invalidLengthPhone': true}
  }

}
