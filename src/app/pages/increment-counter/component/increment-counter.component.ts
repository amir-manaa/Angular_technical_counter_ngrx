import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as counterSelectors from './../../../state/counter-selectors';
import { CounterActions } from './../../../state/counter-action';
import { ICounter } from 'src/app/core/models';

@Component({
  selector: 'app-increment-counter',
  templateUrl: './increment-counter.component.html',
  styleUrls: ['./increment-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementCounterComponent implements OnInit, OnDestroy {

  counter$!: Observable<ICounter>;
  private destroy$!: Subject<boolean>;
  
  constructor(
    private store: Store<ICounter>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.counter$ = this.store.pipe(select(counterSelectors.getCounter)).pipe(take(1));
  }

  incrementCounter() {
    this.counter$.subscribe((counter: ICounter) => {
        this.store.dispatch(CounterActions.incrementCounter({ counter }));
        this.counter$ = this.store.pipe(select(counterSelectors.getCounter)).pipe(take(1));
        takeUntil(this.destroy$);
      }    
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
