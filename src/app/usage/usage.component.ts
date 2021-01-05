import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  template: `
    <app-detail>
      <article class="detail-item">
        <h4>Import</h4>
        <p class="mb-4">Firstly import bolt-loading library.</p>
        <app-copy-command [code]="importCode"></app-copy-command>
      </article>
      <article class="detail-item">
        <h4>Usage</h4>
        <p class="mb-4">In the simplest form, you can use it this way.</p>
        <app-copy-command [code]="usageCode"></app-copy-command>
      </article>
    </app-detail>
  `,
  styles: [
  ]
})
export class UsageComponent implements OnInit {

  importCode: string = "import BoltLoading from 'bolt-loading';";

  usageCode: string = "<BoltLoading isShow={true} />";

  constructor() { }

  ngOnInit(): void {
  }

}
