import { Directive, HostBinding, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appLengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LengthValidatorDirective,
      multi: true
    }
  ]
})
export class LengthValidatorDirective implements Validator {

  private colorTextInput: string = 'gray'
  private colorTextInputError: string = '#c71b1b'
  private isBlur: boolean = false

  @HostBinding('style.color') propStyle: string = this.colorTextInput

  @HostListener('blur') onBlur(){
      this.isBlur = true
  }

  validate(control: AbstractControl): ValidationErrors | null {
    
    return this.isBlur ? this.apply(control.value) : null
  
  }

  private apply(value: string): ValidationErrors | null {
    const invalid = value?.length < 5

    return invalid ? (this.propStyle = this.colorTextInputError, { 'invalidLength': true }) : (this.propStyle = this.colorTextInput, null);
  }
}
