import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange() {

    const input = this._el.nativeElement
    let value = input.value

    value = value.replace(/\D/g, '')

    if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      value = value.replace(/(\d*)/, '($1');
    }

    input.value = value;

  }

}
