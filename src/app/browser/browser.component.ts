import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser',
  template: `
    <app-detail>
      <h2>Browser</h2>
    </app-detail>
  `,
  styles: [
  ]
})
export class BrowserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
