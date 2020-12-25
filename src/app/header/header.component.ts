import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="container d-flex align-items-center justify-content-between">
        <app-logo></app-logo>
        <app-form-button [title]="'Documentation'" [color]="'yellow'"></app-form-button>
      </div>
    </header>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
