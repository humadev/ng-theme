import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
    return slideToRight();
}

export function slideToRight() {
  return trigger('slideToRight', [
    state('void', style({width: '*'}) ),
    state('*', style({width: '*'}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

export function slideToLeft() {
    return trigger('slideToLeft', [
      state('void', style({width: '*'}) ),
      state('*', style({width: '*'}) ),
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
      ])
    ]);
  }

export function slideToUp() {
    return trigger('slideToUp', [
      state('void', style({width: '*'}) ),
      state('*', style({width: '*'}) ),
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({transform: 'translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
      ])
    ]);
  }


export function slideToDown() {
    return trigger('slideToDown', [
      state('void', style({width: '*'}) ),
      state('*', style({width: '*'}) ),
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({transform: 'translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
      ])
    ]);
  }
