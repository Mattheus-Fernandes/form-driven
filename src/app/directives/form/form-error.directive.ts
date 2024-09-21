import { Directive } from "@angular/core";

@Directive({
  selector: '[appFormError]',
  host: {
    'class': 'fv-u-form-error'
  }
})
export class FormErrorDirective {}