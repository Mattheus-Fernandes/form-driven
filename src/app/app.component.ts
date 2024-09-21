import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isRotate: boolean = false
  
  valueRotate(value: boolean) {
    this.isRotate = value
  }

}
