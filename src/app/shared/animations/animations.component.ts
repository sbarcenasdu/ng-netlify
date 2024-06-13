import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bounceAnimation,
  fadeInAnimation,
  rotateAnimation,
  slideInLeftAnimation,
  slideInRightAnimation,
  zoomInAnimation,
  zoomOutAnimation,
  conditionalAnimation,
  complexAnimation,
  colorChangeAnimation,
  listItemAnimation,
  hoverAnimation,
  badAnimation,
  optimizedAnimation,
} from '../../animations/animations';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animated-box" [@fadeIn]></div>
    <!-- [] enlace de propiedad -->
    <div class="animated-box" [@slideInLeft]></div>
    <div class="animated-box" [@slideInRight]></div>
    <div class="animated-box" [@bounce]></div>
    <div class="animated-box" [@rotate]></div>
    <div class="animated-box" [@zoomIn]></div>
    <div class="animated-box" [@zoomOut]></div>
    <div class="animated-box" [@conditional]="state" (click)="toggle()"></div>
    <div class="animated-box" [@complex]="state" (click)="toggle()"></div>
    <div
      class="animated-box"
      [@colorChange]="stateColor"
      (click)="toggleColor()"
    ></div>

    <ul [@listItem]="items.length">
      @for(item of items; track $index){
      <li class="animated-box"></li>
      }
    </ul>
    <button (click)="addItem()">Add Item</button>
    <button (click)="removeItem()">Remove Item</button>
<br>
    <div
      [@hover]="stateh"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
      class="animated-box"
    >
      Hover over me
    </div>
<br>
    <div class="animated-box" [@bad]="badState" (click)="toggleBad()"></div>
<br>
    <div class="animated-box" [@optimizedAnimation]="optimizedState" (click)="toggleOptimized()"></div>
  `,
  styles: `
    ul { list-style: none; padding: 0; }
    .animated-box {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      background-color: lightblue;
      margin: 20px;
      display: inline-block;
    }

    button{
      margin: 8px;
      padding: 4px;
      border-radius: 2px;
      background-color: #5bc0de;
      cursor: pointer;
    }
  `,
  animations: [
    fadeInAnimation,
    slideInLeftAnimation,
    slideInRightAnimation,
    bounceAnimation,
    rotateAnimation,
    zoomInAnimation,
    zoomOutAnimation,
    conditionalAnimation,
    complexAnimation,
    colorChangeAnimation,
    listItemAnimation,
    hoverAnimation,
    badAnimation,
    optimizedAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationsComponent {
  state = 'start';
  toggle() {
    this.state = this.state === 'start' ? 'end' : 'start';
  }

  stateColor = 'red';
  toggleColor() {
    this.stateColor = this.stateColor === 'red' ? 'blue' : 'red';
  }

  items = ['Item 1', 'Item 2', 'Item 3'];
  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem() {
    this.items.pop();
  }

  stateh = 'normal';
  onMouseEnter() {
    this.stateh = 'hover';
  }

  onMouseLeave() {
    this.stateh = 'normal';
  }

  badState = 'inactive';
  toggleBad() {
    this.badState = this.badState === 'inactive' ? 'active' : 'inactive';
  }

  optimizedState = 'inactive';
  toggleOptimized() {
    this.optimizedState = this.optimizedState === 'inactive' ? 'active' : 'inactive';
  }
}
