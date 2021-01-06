import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple-loading',
  template: `
    <figure>
      <div class="apple-loading">
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
          <div class="segment"></div>
      </div>
    </figure>
  `,
  styles: [
  ]
})
export class AppleLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
