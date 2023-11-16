import { createActionGroup ,props, emptyProps } from '@ngrx/store'
import { ICounter } from '../core/models';

export const CounterActions = createActionGroup({
    source: 'COUNTER',
    events: {
        'load counter': emptyProps(),
        'load counter success': props<{ counter: ICounter }>(),
        'Increment counter': props<{ counter: ICounter }>(),
        'Increment counter success': props<{ counter: ICounter }>(),
        'Decrement counter': props<{ counter: ICounter }>(),
        'Decrement counter success': props<{ counter: ICounter }>(),
        'Reset counter': emptyProps(),
        'Reset counter success': emptyProps()
    }
})