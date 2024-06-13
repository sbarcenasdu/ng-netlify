import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  keyframes,
  query,
  stagger,
  animateChild
} from '@angular/animations';

// Fade In and Fade Out Animation
export const fadeInAnimation = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate('0.5s ease-in-out')]),
]);

// Slide In from the Left Animation
export const slideInLeftAnimation = trigger('slideInLeft', [
  state('void', style({ transform: 'translateX(-100%)' })),
  transition(':enter', [
    animate('0.5s ease-in', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
  ]),
]);

// Slide In from the Right Animation
export const slideInRightAnimation = trigger('slideInRight', [
  state('void', style({ transform: 'translateX(100%)' })),
  transition(':enter', [
    animate('0.5s ease-in', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease-out', style({ transform: 'translateX(100%)' })),
  ]),
]);

// Bounce Animation
export const bounceAnimation = trigger('bounce', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)' })),
    animate('0.3s ease-in-out', style({ transform: 'translateY(-10%)' })),
    animate('0.3s ease-in-out', style({ transform: 'translateY(0)' })),
  ]),
]);

// Rotate Animation
export const rotateAnimation = trigger('rotate', [
  transition(':enter', [
    style({ transform: 'rotate(0deg)' }),
    animate('1s ease-in-out', style({ transform: 'rotate(360deg)' })),
  ]),
  transition(':leave', [
    animate('1s ease-in-out', style({ transform: 'rotate(0deg)' })),
  ]),
]);

// Zoom In Animation
export const zoomInAnimation = trigger('zoomIn', [
  state('void', style({ transform: 'scale(0)' })),
  transition(':enter', [
    animate('0.5s ease-in-out', style({ transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease-in-out', style({ transform: 'scale(0)' })),
  ]),
]);

// Zoom Out Animation
export const zoomOutAnimation = trigger('zoomOut', [
  state('void', style({ transform: 'scale(1)' })),
  transition(':enter', [
    animate('0.5s ease-in-out', style({ transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    animate('0.5s ease-in-out', style({ transform: 'scale(0)' })),
  ]),
]);

//ANIMCIONES DE ESTADO

// animacion de estado: condicional
export const conditionalAnimation = trigger('conditional', [
  state('start', style({ backgroundColor: 'green' })),
  state('end', style({ backgroundColor: 'red' })),
  transition('start => end', [animate('1s')]),
  transition('end => start', [animate('0.5s')]),
]);

//animacion de estado: cambio de color
export const colorChangeAnimation = trigger('colorChange', [
  state('red', style({ backgroundColor: 'red' })),
  state('blue', style({ backgroundColor: 'blue' })),
  transition('red <=> blue', [animate('0.5s')]),
]);

//animacion de estado: hover
export const hoverAnimation = trigger('hover', [
  state('hover', style({ transform: 'scale(1.3)' })),
  state('normal', style({ transform: 'scale(1)' })),
  transition('normal => hover', [animate('200ms ease-in')]),
  transition('hover => normal', [animate('200ms ease-out')]),
]);







//ANIMACIONES DE LISTA
//para cada item de la lista
export const listItemAnimationUnique = trigger('listItemAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-in',
      style({ opacity: 0, transform: 'translateX(-100px)' })
    ),
  ]),
]);

// animacion de lista
export const listItemAnimation = trigger('listItem', [
  transition('* => *', [
    // Cada vez que cambia la lista
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        stagger(0.3, [
          animate(
            '300ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        stagger(0.3, [
          animate(
            '300ms ease-in',
            style({ opacity: 0, transform: 'translateY(-20px)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

//complex animation
export const complexAnimation = trigger('complex', [
  state('start', style({ backgroundColor: 'red', transform: 'scale(1)' })),
  state('end', style({ backgroundColor: 'blue', transform: 'scale(1.5)' })),
  transition('start => end', [
    group([
      animate('1s ease-in', style({ backgroundColor: 'blue' })),
      animate('1s 0.5s ease-out', style({ transform: 'scale(1.5)' })),
    ]),
  ]),
  transition('end => start', [
    animate(
      '1s',
      keyframes([
        style({ backgroundColor: 'blue', transform: 'scale(1.5)', offset: 0 }),
        style({ backgroundColor: 'red', transform: 'scale(1)', offset: 1 }),
      ])
    ),
  ]),
]);


// Ejemplo de una mala animación
export const badAnimation = trigger('bad', [
  state('inactive', style({
    transform: 'translateX(0)'
  })),
  state('active', style({
    transform: 'translateX(100px)'
  })),
  transition('inactive => active', [
    animate('1s')
  ]),
  transition('active => inactive', [
    animate('1s')
  ])
]);
// Optimización de la animación
export const optimizedAnimation = trigger('optimizedAnimation', [
  state('inactive', style({
    transform: 'translateX(0)'
  })),
  state('active', style({
    transform: 'translateX(100px)'
  })),
  transition('inactive => active', [
    animate('1s')
  ]),
  transition('active => inactive', [
    animate('1s')
  ]),
  transition('* => *', animateChild())
  ]);
  
  // Optimización: Agregar animateChild() para activar la animación solo cuando sea necesario







//ANIMACIONES DE ROUTER
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
    group([
      query(
        ':leave',
        [animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))],
        { optional: true }
      ),
      query(':enter', [animate('0.5s ease-out', style({ transform: 'translateX(0)' }))], {
        optional: true,
      }),
    ]),
  ]),
]);