import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `
    <section class="detail-section">
      <div class="container">
        <h1 class="yellow large">Supreme Validation</h1>
        <h2 class="small">GETTING STARTED</h2>
        <div class="row">
          <div class="col-md-3">
            <app-sidebar></app-sidebar>
          </div>
          <div class="col-md-8 offset-md-1">
            <h3>Installation</h3>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
