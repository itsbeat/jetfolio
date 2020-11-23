import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state(
      'in',
      style({
        transform: 'translateY(0px)'
      })
    ),
    state(
      'out',
      style({
        transform: 'translateY(250px)'
      })
    ),
    transition('in => out', [
      group([
        animate(
          '600ms ease-in-out',
          style({
            transform: 'translateY(250px)'
          })
        )
      ])
    ]),
    transition('out => in', [
      group([
        animate(
          '600ms ease-in-out',
          style({
            transform: 'translateY(0px)'
          })
        )
      ])
    ])
  ])
];
