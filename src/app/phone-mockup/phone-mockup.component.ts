import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-mockup',
  template: `
    <div class="phone-mockup">
      <app-phone-svg></app-phone-svg>
      <app-loading></app-loading>
    </div>
  `,
  styles: [
  ]
})
export class PhoneMockupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
