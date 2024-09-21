import { Directive, HostBinding, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  private colorTextInput: string = 'gray';
  private colorTextInputError: string = '#c71b1b';
  private isBlur: boolean = false;

  @HostBinding('style.color') propStyle: string = this.colorTextInput;

  @HostListener('blur') onBlur() {
    this.isBlur = true;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.isBlur ? this.apply(control.value) : null
  }

  private apply(value: string): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(value);

    
    return !isValidEmail ? (this.propStyle = this.colorTextInputError, { 'invalidEmail': true }) : (this.propStyle = this.colorTextInput, null);
  }
}
