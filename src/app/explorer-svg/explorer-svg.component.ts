import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-svg',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
  <path id="internet-explorer-brands" d="M56.607,18.715a28.718,28.718,0,0,0,2.511-10.3C59.118-.1,49.785-3.11,34.547,3.9,21.934,3.056,9.794,12.53,6.762,25.748c3.615-4.085,9.172-9.644,14.294-11.854a77.448,77.448,0,0,0-15.9,20.293C2.724,38.631,0,45.813,0,51.181,0,62.733,10.881,61.318,21.123,56.1c3.682,1.808,7.8,1.825,11.917,1.825,11.382,0,21.592-6.363,25.408-17.112H44.288c-6.153,10.382-23.065,6.21-23.065-5.559h38.53a26.908,26.908,0,0,0-3.147-16.542ZM7.566,40.649A27.237,27.237,0,0,0,19.315,55.1C8.916,60.834-.989,58.509,7.566,40.649ZM21.157,27.891c.234-6.463,5.892-11.118,12.185-11.118,6.26,0,11.951,4.655,12.185,11.118ZM42.782,5.906c2.511-1.206,5.691-2.578,8.5-2.578a6.065,6.065,0,0,1,6.36,6.3,26.216,26.216,0,0,1-1.707,7.953C52.858,12.621,48.2,8.016,42.782,5.906Z" transform="translate(0 0)" fill="#20b5e7"/>
</svg>

  `,
  styles: [
  ]
})
export class ExplorerSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
