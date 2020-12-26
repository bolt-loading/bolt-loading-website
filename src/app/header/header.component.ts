import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="container d-flex align-items-center justify-content-between">
        <a routerLink="/">
          <app-logo></app-logo>
        </a>
        <a routerLink="/installation">
          <app-form-button [title]="'Documentation'" [color]="'yellow'"></app-form-button>
        </a>
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
