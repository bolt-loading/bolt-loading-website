import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atom-loading',
  template: `
    <figure>
      <div class="atom-loading">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    </figure>
  `,
  styles: [
  ]
})
export class AtomLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
