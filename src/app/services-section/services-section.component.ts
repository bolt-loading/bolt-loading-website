import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  template: `
    <section class="services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="service-item">
              <figure>
                <app-hand-svg></app-hand-svg>
              </figure>
              <article>
                <h4>Easy Use</h4>
                <p>Descriptive and easy to read documentation.</p>
              </article>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure>
                <app-world-svg></app-world-svg>
              </figure>
              <article>
                <h4>Browser Support</h4>
                <p>Descriptive and easy to read documentation.</p>
              </article>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure>
                <app-css-svg></app-css-svg>
              </figure>
              <article>
                <h4>No Javascript</h4>
                <p>Descriptive and easy to read documentation.</p>
              </article>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure>
                <app-book-svg></app-book-svg>
              </figure>
              <article>
                <h4>Documentation</h4>
                <p>Descriptive and easy to read documentation.</p>
              </article>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure>
                <app-colors-svg></app-colors-svg>
              </figure>
              <article>
                <h4>Design</h4>
                <p>Descriptive and easy to read documentation.</p>
              </article>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <figure>
                <app-open-source-svg></app-open-source-svg>
              </figure>
              <article>
                <h4>Open Source</h4>
                <p>Descriptive and easy to read documentation.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ServicesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
