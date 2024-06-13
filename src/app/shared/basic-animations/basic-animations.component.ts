import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-animations',
  standalone: true,
  imports: [],
  template: `
    <p>basic-animations works!</p>
    <div class="animated-element">Elemento Animado</div>
    <button class="animated-button">Hover me!</button>
    <br />
    <div class="animated-box fade-in"></div>
    <div class="animated-box slide-in-left"></div>
    <div class="animated-box slide-in-right"></div>
    <div class="animated-box bounce"></div>
    <div class="animated-box rotate"></div>
    <div class="animated-box spin"></div>
    <div class="animated-box blink"></div>
    <div class="animated-box swing"></div>
    <div class="animated-box fade-scale"></div>
    <br />
    <div class="container">
      <div class="box"></div>
    </div>
  `,
  styleUrl: './basic-animations.component.css',
})
export class BasicAnimationsComponent {}
