import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-development-environments-section',
  template: `
    <div class="development-environments-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="icon-codacy"></i>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="icon-github"></i>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <i class="icon-npm"></i>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DevelopmentEnvironmentsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
