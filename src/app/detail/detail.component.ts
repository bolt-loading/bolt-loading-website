import { Component, OnInit, Input } from '@angular/core';
import { MENU } from '../sidebar-data/sidebar-data.component';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  template: `
    <section class="detail-section">
      <div class="container">
        <h1 class="yellow large">Bolt Loading</h1>
        <h2 class="small">{{h2}}</h2>
        <div class="row">
          <div class="col-md-3">
            <app-sidebar></app-sidebar>
          </div>
          <div class="col-md-8 offset-md-1">
            <h3>{{h3}}</h3>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  data = MENU;

  @Input() h2: string;

  @Input() h3: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.data.forEach(item => {
        item.links.forEach(subItem => {
          if (subItem.url === location.path()) {
            this.h2 = item.title;
            this.h3 = subItem.title;
          }
        })
      })
    })
  }

  ngOnInit(): void {
  }

}
