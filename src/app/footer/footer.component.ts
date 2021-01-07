import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container d-flex align-items-center justify-content-between flex-column flex-md-row">
        <strong><a href="https://yasinkalkan.com/" target="blank">YASIN BURAK KALKAN</a> © 2020</strong>
        <a routerLink="/installation">
          <app-form-button [title]="'GET STARTED'" [color]="'yellow'"></app-form-button>
        </a>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
