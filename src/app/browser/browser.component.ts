import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser',
  template: `
    <app-detail>
      <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="browser-card">
                <app-explorer-svg></app-explorer-svg>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="browser-card">
                <app-edge-svg></app-edge-svg>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="browser-card">
                <app-firefox-svg></app-firefox-svg>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="browser-card">
                <app-opera-svg></app-opera-svg>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="browser-card">
                <app-safari-svg></app-safari-svg>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="browser-card">
                <app-chrome-svg></app-chrome-svg>
            </div>
        </div>
      </div>
    </app-detail>
  `,
  styles: [
  ]
})
export class BrowserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
