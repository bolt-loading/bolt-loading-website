import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-icons',
  template: `
    <div [ngSwitch]="icon">
      <div *ngSwitchCase="'hand'"><app-hand-svg></app-hand-svg></div>
      <div *ngSwitchCase="'world'"><app-world-svg></app-world-svg></div>
      <div *ngSwitchCase="'css'"><app-css-svg></app-css-svg></div>
      <div *ngSwitchCase="'book'"><app-book-svg></app-book-svg></div>
      <div *ngSwitchCase="'colors'"><app-colors-svg></app-colors-svg></div>
      <div *ngSwitchCase="'open-source'"><app-open-source-svg></app-open-source-svg></div>
    </div>
  `,
  styles: [
  ]
})
export class ServicesIconsComponent implements OnInit {

  @Input() icon;

  constructor() { }

  ngOnInit(): void {
  }

}
