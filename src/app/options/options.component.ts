import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  template: `
    <app-detail>
      <article class="detail-item">
        <h4>isShow</h4>
        <p class="feature"><strong>Type:</strong> Boolean</p>
        <p class="feature"><strong>Default:</strong> false</p>
        <p>You can control visibility.</p>
      </article>
      <article class="detail-item">
        <h4>loadingAnimation</h4>
        <p class="feature"><strong>Type:</strong> Loadings</p>
        <p class="feature"><strong>Default:</strong> Loading.AppleLoading</p>
        <p>You can select loading animation. If you not select animation, default selected apple animation loading.</p>
      </article>
      <article class="detail-item">
        <h4>hasContainer</h4>
        <p class="feature"><strong>Type:</strong> Boolean</p>
        <p class="feature"><strong>Default:</strong> false</p>
        <p>You can change this feature if you want animation inside container.</p>
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
