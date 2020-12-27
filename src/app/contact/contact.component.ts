import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <app-detail>
      <h2>Contact</h2>
    </app-detail>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
