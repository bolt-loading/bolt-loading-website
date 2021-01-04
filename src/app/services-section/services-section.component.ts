import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  template: `
    <section class="services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-4" *ngFor="let cardItem of cards">
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
      icon: "hand"
    },
    {
      title: "Browser Support",
      detail: "Descriptive and easy to read documentation.",
      icon: "world"
    },
    {
      title: "No Javascript",
      detail: "Descriptive and easy to read documentation.",
      icon: "css"
    },
    {
      title: "Documentation",
      detail: "Descriptive and easy to read documentation.",
      icon: "book"
    },
    {
      title: "Design",
      detail: "Descriptive and easy to read documentation.",
      icon: "colors"
    },
    {
      title: "Open Source",
      detail: "Descriptive and easy to read documentation.",
      icon: "open-source"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
