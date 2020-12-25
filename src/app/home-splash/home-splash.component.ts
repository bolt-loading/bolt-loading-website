import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-splash',
  template: `
    <section class="home-splash-section">
      <div class="container d-flex align-items-center">
        <app-phone-mockup></app-phone-mockup>
        <article>
          <h1>Bolt Loading</h1>
          <h2>Amazing loading animations for React. Waiting is less boring now.</h2>
          <p>Simple to use, good features and user-friendly interface.</p>
          <app-form-button [title]="'GET STARTED'" [color]="'black'" [size]="'large'"></app-form-button>
        </article>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class HomeSplashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
