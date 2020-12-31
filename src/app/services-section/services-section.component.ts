import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  template: `
    <section class="services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4" *ngFor="let cardItem of cards">
            <app-card-item [card]="cardItem"></app-card-item>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ServicesSectionComponent implements OnInit {

  cards = [
    {
      title: "Easy Use",
      detail: "Descriptive and easy to read documentation.",
      icon: "<app-hand-svg></app-hand-svg>"
    },
    {
      title: "Browser Support",
      detail: "Descriptive and easy to read documentation.",
      icon: "<app-hand-svg></app-hand-svg>"
    },
    {
      title: "No Javascript",
      detail: "Descriptive and easy to read documentation.",
      icon: "<app-hand-svg></app-hand-svg>"
    },
    {
      title: "Documentation",
      detail: "Descriptive and easy to read documentation.",
      icon: "<app-hand-svg></app-hand-svg>"
    },
    {
      title: "Design",
      detail: "Descriptive and easy to read documentation.",
      icon: "<app-hand-svg></app-hand-svg>"
    },
    {
      title: "Open Source",
      detail: "Descriptive and easy to read documentation.",
      icon: "<app-hand-svg></app-hand-svg>"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
