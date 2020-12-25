import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-button',
  template: `
    <button class="{{color}} {{size}}">{{title}}</button>
  `,
  styles: [
  ]
})
export class FormButtonComponent implements OnInit {

  @Input() title: string;

  @Input() color: string;

  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
