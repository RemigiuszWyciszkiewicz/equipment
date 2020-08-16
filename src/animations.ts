import { trigger, transition, animate, style, state } from '@angular/animations';

export const transAnimation = trigger('openClose', [
  state(
    'open',
    style({
      width: '50%',
      left: '50%',
      height: '100%',
      opacity: 1,
    })
  ),
  state(
    'closed',
    style({
      'z-index': '-1',
      left: '0px',
      height: '100%',
      opacity: 0,
    })
  ),
  transition('open => closed', [animate('0.7s 0s cubic-bezier(0.165, 0.84, 0.44, 1)')]),
  transition('closed => open', [animate('0.25s 0s cubic-bezier(0.86, 0, 0.07, 1)')]),
]);
