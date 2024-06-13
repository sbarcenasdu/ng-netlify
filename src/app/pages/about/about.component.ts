import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: ` <p>about works!</p> `,
  styles: `
  :host{
    display:block;
    height:70vh;
  }
  `,
})
export class AboutComponent {}
