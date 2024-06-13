import { trigger, transition, style, animate } from '@angular/animations';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  constructor() {}

  fadeInAnimation = trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
  ]);
}
