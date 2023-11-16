import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { ICounter } from './../core/models';

import { CounterActions } from './counter-action';

export const ROOT_FEATURE_KEY = 'rootCounter';

export interface counterState {
    readonly [ROOT_FEATURE_KEY]: ICounter
}

const initialCounter: ICounter = {
    value: 1,
    clickNumber: 0
};

// DEBUG: Add log funtion to MetaReducer array
function log(reducer: ActionReducer<counterState>): ActionReducer<counterState> {
    return (state, action) => {
        const currentState = reducer(state, action);
        
        console.groupCollapsed(action.type);
        console.log('Etat precedent: ', state);
        console.log('Action: ', action);
        console.log('Etat suivant: ', currentState);
        console.groupEnd();

        return currentState;
    }
}

export const metaReducers: MetaReducer[] = [];

export const counterReducer = createReducer<ICounter>(initialCounter,
    on(CounterActions.loadCounter, (state: ICounter) => {
        return {
            ...state
        }
    }),

    on(CounterActions.loadCounterSuccess, (state: ICounter, props) => {
        return {
            ...props.counter
        }
    }),

    on(CounterActions.incrementCounter, (state: ICounter, props) => {
        return {
            ...state
        }
    }),

    on(CounterActions.incrementCounterSuccess, (state: ICounter, props) => {
        return {
            ...props.counter
        }
    }),

    on(CounterActions.decrementCounter, (state: ICounter, props) => {
        return {
            ...state 
        }
    }),

    on(CounterActions.decrementCounterSuccess, (state: ICounter, props) => {
        return {
            ...props.counter
        }
    }),

    on(CounterActions.resetCounter, (state: ICounter) => {
        return {
            ...state
        }
    }),

    on(CounterActions.resetCounterSuccess, (state: ICounter) => {
        return {
            value: 0,
            clickNumber: 0
        }
    })
);
