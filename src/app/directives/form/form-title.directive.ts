import { Directive } from "@angular/core";

@Directive({
  selector: '[appFormTitle]',
  host:{
    'class': 'fv-u-form-title'
  }
})
export class FormTitleDirective {}