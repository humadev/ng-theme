import {trigger, state, animate, style, transition, AnimationTriggerMetadata} from '@angular/animations';

export function routerTransition(): AnimationTriggerMetadata {
    return slideToRight();
}

export function slideToRight(): AnimationTriggerMetadata {
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

export function slideToLeft(): AnimationTriggerMetadata {
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

export function slideToUp(): AnimationTriggerMetadata {
    return trigger('slideToUp', [
      state('void', style({width: '*'}) ),
      state('*', style({width: '*'}) ),
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({transform: 'translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
      ])
    ]);
  }


export function slideToDown(): AnimationTriggerMetadata {
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

export function fadeUp(): AnimationTriggerMetadata {
      return trigger('fadeUp', [
            state('void', style({ width: '*' })),
            state('*', style({ width: '*' })),
            transition(':enter', [  // before 2.1: transition('void => *', [
                  style({ transform: 'translateY(10px)', opacity: 0 }),
                  animate('0.3s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
            ]),
            transition(':leave', [  // before 2.1: transition('* => void', [
                  style({ transform: 'translateY(0%)', opacity: 1}),
                  animate('0.3s ease-in-out', style({ transform: 'translateY(-10px)', opacity: 0 }))
            ])
      ])
}

export function ringing(): AnimationTriggerMetadata {
      return trigger('ringing', [
            transition('* => *', [
                  style({ transform: 'rotate(13deg)'}),
                  animate('0.3s ease-in', style({ transform: 'rotate(0deg)'}))
            ]),
            transition('* => *', [
                  style({ transform: 'rotate(-13deg)'}),
                  animate('0.1s ease-in', style({ transform: 'rotate(0deg)'}))
            ])
      ])
}
