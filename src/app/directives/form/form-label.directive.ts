import { Directive } from "@angular/core";

@Directive({
  selector: '[appFormLabel]',
  host: {
    'class': 'fv-u-form-label'
  }
})

export class FormLabelDirective {}