import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logo',
  template: `
    <div class="logo {{ isHome ? null : 'yellow' }}">
      <svg xmlns="http://www.w3.org/2000/svg" width="43.556" height="40" viewBox="0 0 43.556 40">
        <path id="Path_4" data-name="Path 4" d="M201.171,191.078l-22.589,17.075,9.589-12.776L177.637,192.2l22.689-17.15-9.589,12.775,10.447,3.153c4.332-1.9,7.028-5.247,7.028-9.834,0-6.057-4.859-9.543-14.347-9.543H172.659l-8,40H187.75c10.233,0,18.691-3.886,18.691-12.743A8.149,8.149,0,0,0,201.171,191.078Z" transform="translate(-164.656 -171.6)" fill="#fff"/>
      </svg>
    </div>
  `,
  styles: [
  ]
})

export class LogoComponent implements OnInit {

  @Input() isHome: boolean = window.location.pathname === "/";

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.isHome = location.path() === ""
    })
  }

  ngOnInit(): void { }

}