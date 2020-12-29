import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <app-detail>
      <p>You can send mail for questions and problems. I am waiting every time your feedback. Please help me for better development my project. You can fast reach me in email.</p>
      <a href="mailto:yasinburakkalkan@gmail.com" class="d-flex align-items-center mt-3"><app-mail-svg></app-mail-svg> yasinburakkalkan@gmail.com</a>
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
