import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  template: `
    <app-detail>
      <article class="detail-item">
        <h4>isShow</h4>
        <p class="feature"><strong>Type:</strong> Boolean</p>
        <p class="feature"><strong>Default:</strong> false</p>
        <p>Form button is disabled. If success fill form, form button is enabled.</p>
      </article>
      <article class="detail-item">
        <h4>loadingAnimation</h4>
        <p class="feature"><strong>Type:</strong> Loadings</p>
        <p class="feature"><strong>Default:</strong> Loading.AppleLoading</p>
        <p>Form button is disabled. If success fill form, form button is enabled.</p>
      </article>
    </app-detail>
  `,
  styles: [
  ]
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
