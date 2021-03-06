import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opera-svg',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">
  <defs>
    <linearGradient id="opera-linear-gradient" x1="0.5" y1="0.011" x2="0.5" y2="1.004" gradientUnits="objectBoundingBox">
      <stop offset="0.46" stop-color="#e52d37"/>
      <stop offset="1" stop-color="#981917"/>
    </linearGradient>
    <linearGradient id="opera-linear-gradient-2" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#e94d50"/>
      <stop offset="1" stop-color="#941914"/>
    </linearGradient>
  </defs>
  <g id="Group_41" data-name="Group 41" transform="translate(-22.56 -30.06)">
    <path id="Path_74" data-name="Path 74" d="M70.754,36.208A30,30,0,1,0,82.56,60.06,29.851,29.851,0,0,0,70.754,36.208Zm-27.6,40.217a27.138,27.138,0,0,1-.845-31.564.213.213,0,0,1,.018-.025C45.042,41.221,48.709,39,52.75,39c8.341,0,15.1,9.455,15.1,21.116s-6.762,21.116-15.1,21.116a12.757,12.757,0,0,1-9.574-4.787A.071.071,0,0,1,43.158,76.424Z" transform="translate(0 0)" fill="url(#opera-linear-gradient)"/>
    <path id="Path_75" data-name="Path 75" d="M229.643,91.859a29.946,29.946,0,0,1-11.806,23.852,22.628,22.628,0,0,1-9.029,1.873,23.445,23.445,0,0,1-18.55-9.338,12.757,12.757,0,0,0,9.574,4.787c8.341,0,15.1-9.455,15.1-21.116S208.174,70.8,199.834,70.8c-4.041,0-7.709,2.218-10.42,5.833a23.561,23.561,0,0,1,19.395-10.5,22.63,22.63,0,0,1,9.029,1.873A29.946,29.946,0,0,1,229.643,91.859Z" transform="translate(-147.083 -31.8)" fill="url(#opera-linear-gradient-2)"/>
  </g>
</svg>

  `,
  styles: [
  ]
})
export class OperaSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
