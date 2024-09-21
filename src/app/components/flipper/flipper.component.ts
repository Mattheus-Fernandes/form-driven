import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flipper',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.scss']
})
export class FlipperComponent implements OnChanges {

  @Input() isRegister: boolean = false
  @ViewChild('flipper') flipperEl!: ElementRef<HTMLDivElement>


  ngOnChanges(changes: SimpleChanges) {

    const CLICKED = this.isRegister

    if (CLICKED) {
      this.flipperEl.nativeElement.classList.add('rotate')
    }else {
      this.flipperEl?.nativeElement.classList.remove('rotate')
    }
  }
}
