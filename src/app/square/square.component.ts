import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button class="x" *ngIf="value == 'X'">{{ value }}</button>
    <button class="o" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styleUrls: ["./square.component.scss"]
})
export class SquareComponent  {

  @Input() value: string = '';

}
