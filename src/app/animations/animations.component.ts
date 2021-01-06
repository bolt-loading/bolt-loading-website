import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  template: `
    <app-detail>
      <article class="detail-item">
        <h4>AppleLoading</h4>
        <app-apple-loading></app-apple-loading>
      </article>
      <article class="detail-item">
        <h4>KitchenLoading</h4>
        <app-kitchen-loading></app-kitchen-loading>
      </article>
      <article class="detail-item">
        <h4>AtomLoading</h4>
        <app-atom-loading></app-atom-loading>
      </article>
    </app-detail>
  `,
  styles: [
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
