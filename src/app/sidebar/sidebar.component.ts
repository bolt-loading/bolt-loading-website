import { Component, OnInit, Input } from '@angular/core';
import { MENU } from '../sidebar-data/sidebar-data.component';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  template: `
    <aside>
      <app-sidebar-mobile></app-sidebar-mobile>
      <ul *ngFor="let item of data" class="d-none d-sm-none d-md-block">
        <li><h4>{{item.title}}</h4></li>
        <li *ngFor="let subItem of item.links">
          <a routerLink="{{subItem.url}}" class="{{ current === subItem.url ? 'active' : null }}">{{subItem.title}}</a>
        </li>
      </ul>
    </aside>
  `,
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  data = MENU;

  @Input() current: string = window.location.pathname;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.current = location.path()
    })
  }

  ngOnInit(): void {
  }

}
