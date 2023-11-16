import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs'

import { CounterActions } from './counter-action';
import { ICounter } from './../core/models';
import { CounterService } from './../core/services';

@Injectable()
export class CounterEffects{

  constructor(
    private action$: Actions,
    private counterService: CounterService
  ) {}

    loadCounter$ = createEffect(() => 
        this.action$.pipe(
            ofType(CounterActions.loadCounter),
            mergeMap(() => this.counterService.getCounter().pipe(
                map((counter: ICounter) => CounterActions.loadCounterSuccess({ counter }))
            ))
        )
    )

    incrementCounter$ = createEffect(() =>
      this.action$.pipe(
        ofType(CounterActions.incrementCounter),
        mergeMap(action => this.counterService.incrementCounter(action.counter).pipe(
          map((counter: any) => CounterActions.loadCounterSuccess({ counter })
        ))
      ))
    )

    decrementCounter$ = createEffect(() =>
      this.action$.pipe(
        ofType(CounterActions.decrementCounter),
        mergeMap(action => this.counterService.decrementCounter(action.counter).pipe(
          map((counter: any) => CounterActions.loadCounterSuccess({ counter })
        ))
      ))
    )

    resetCounter$ = createEffect(() =>
      this.action$.pipe(
        ofType(CounterActions.resetCounter),
        mergeMap(() => this.counterService.resetCounter().pipe(
          map(() => CounterActions.resetCounterSuccess())
        ))
      )
    )
}
