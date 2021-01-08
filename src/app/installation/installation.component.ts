import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation',
  template: `
    <app-detail>
      <article class="detail-item">
        <h4>Github</h4>
        <p class="mb-4">You can clone repo from Github and free use in your project. Copy this code and paste code in console.</p>
        <app-copy-command [code]="'git clone https://github.com/bolt-loading/bolt-loading.git'"></app-copy-command>
      </article>
      <article class="detail-item">
        <h4>NPM</h4>
        <p class="mb-4">You can download up to date npm package. Copy this code and paste code in console.</p>
        <app-copy-command [code]="'npm install bolt-loading'"></app-copy-command>
      </article>
    </app-detail>
  `,
  styles: [
  ]
})
export class InstallationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
