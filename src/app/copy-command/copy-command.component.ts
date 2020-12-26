import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copy-command',
  template: `
    <div class="copy-command {{size}} {{copied ? 'copied' : null}}" (click)="onClick()">
      <div class="copy-message">Copied text to clipboard.</div>
      <code>{{code}}</code>
      <i class="icon-copy"></i>
    </div>
  `,
  styles: [
  ]
})
export class CopyCommandComponent implements OnInit {

  @Input() code: string;

  @Input() size: string;

  @Input() copied: boolean = false;

  constructor() { }

  onClick(): void {
    if (!this.copied) {
      this.copied = true;
      navigator.clipboard.writeText(this.code)
      this.resetCopiedInfo();
    }
  }

  resetCopiedInfo(): void {
    let resetInterval = setInterval(() => {
      this.copied = false;

      clearInterval(resetInterval)
    }, 3000);
  }

  ngOnInit(): void {
  }

}
