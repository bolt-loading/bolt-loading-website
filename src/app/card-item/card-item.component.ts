import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  template: `
    <div class="service-item">
      <figure>
        <app-services-icons [icon]="card.icon"></app-services-icons>
      </figure>
      <article>
        <h4>{{card.title}}</h4>
        <p>{{card.detail}}</p>
      </article>
    </div>
  `,
  styles: [
  ]
})
export class CardItemComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit(): void {
  }

}
