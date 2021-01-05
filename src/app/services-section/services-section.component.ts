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
      title: "Simple to use",
      detail: "Easy to use and understandable options.",
      icon: "hand"
    },
    {
      title: "Browser Support",
      detail: "Browser friendly animation.",
      icon: "world"
    },
    {
      title: "No Javascript",
      detail: "No javascript, just css.",
      icon: "css"
    },
    {
      title: "Documentation",
      detail: "Descriptive and easy to read documentation.",
      icon: "book"
    },
    {
      title: "Design",
      detail: "Good and modern loading animations.",
      icon: "colors"
    },
    {
      title: "Open Source",
      detail: "You can review my code and support me.",
      icon: "open-source"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
