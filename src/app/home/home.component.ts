import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-home-splash></app-home-splash>
    <app-services-section></app-services-section>
    <app-development-environments-section></app-development-environments-section>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
