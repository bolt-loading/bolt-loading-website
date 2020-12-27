import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  template: `
    <app-detail>
      <h2>Options</h2>
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
