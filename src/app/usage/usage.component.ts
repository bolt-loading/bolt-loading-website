import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  template: `
    <app-detail>
      <h2>Usage</h2>
    </app-detail>
  `,
  styles: [
  ]
})
export class UsageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
