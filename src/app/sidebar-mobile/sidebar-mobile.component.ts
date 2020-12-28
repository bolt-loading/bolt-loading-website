import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { Component, OnInit, Input } from '@angular/core';
import { MENU } from '../sidebar-data/sidebar-data.component';

@Component({
  selector: 'app-sidebar-mobile',
  template: `
    <div class="select-container d-block d-sm-block d-md-none">
      <select id="sidebar" name="sidebar" (change)="onChange($event.target.value)">
        <optgroup *ngFor="let item of data" label="{{item.title}}">
          <option *ngFor="let subItem of item.links" [value]="subItem.url" [selected]="current === subItem.url">{{subItem.title}}</option>
        </optgroup>
      </select>
      <app-caret-down-svg></app-caret-down-svg>
    </div>
  `,
  styles: [
  ]
})
export class SidebarMobileComponent implements OnInit {

  data = MENU;

  @Input() current: string = window.location.pathname;

  constructor(location: Location, private router: Router) {
    router.events.subscribe((val) => {
      this.current = location.path()
    })
  }

  onChange(val): void {
    this.router.navigateByUrl(val);
  }

  ngOnInit(): void {
  }

}
