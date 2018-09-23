/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { trigger, state, animate, style, transition } from '@angular/animations';
/**
 * @return {?}
 */
export function routerTransition() {
    return slideToRight();
}
/**
 * @return {?}
 */
export function slideToRight() {
    return trigger('slideToRight', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
export function slideToLeft() {
    return trigger('slideToLeft', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
export function slideToUp() {
    return trigger('slideToUp', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
export function slideToDown() {
    return trigger('slideToDown', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
/**
 * @return {?}
 */
export function fadeUp() {
    return trigger('fadeUp', [
        state('void', style({ width: '*' })),
        state('*', style({ width: '*' })),
        transition(':enter', [
            // before 2.1: transition('void => *', [
            style({ transform: 'translateY(10px)', opacity: 0 }),
            animate('0.3s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
            // before 2.1: transition('* => void', [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate('0.3s ease-in-out', style({ transform: 'translateY(-10px)', opacity: 0 }))
        ])
    ]);
}
/**
 * @return {?}
 */
export function ringing() {
    return trigger('ringing', [
        transition('* => *', [
            style({ transform: 'rotate(13deg)' }),
            animate('0.3s ease-in', style({ transform: 'rotate(0deg)' }))
        ]),
        transition('* => *', [
            style({ transform: 'rotate(-13deg)' }),
            animate('0.1s ease-in', style({ transform: 'rotate(0deg)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animation.js.map