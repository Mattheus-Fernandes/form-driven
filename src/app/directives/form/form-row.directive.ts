import { Directive } from "@angular/core";

@Directive({
  selector: 'app-form-row',
  host: {
    'class': 'fv-u-form-row'
  }
})

export class FormRowDirective {}