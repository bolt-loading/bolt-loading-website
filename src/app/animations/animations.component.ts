import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  template: `
    <app-detail>
      <article class="detail-item">
        <h4>AppleLoading</h4>
        <p>Default animation.</p>
        <app-apple-loading></app-apple-loading>
      </article>
      <article class="detail-item">
        <h4>KitchenLoading</h4>
        <p>Form button is disabled. If success fill form, form button is enabled.</p>
      </article>
      <article class="detail-item">
        <h4>AtomLoading</h4>
        <p>Form button is disabled. If success fill form, form button is enabled.</p>
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
