import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CounterActions } from './../../../state/counter-action';
import * as counterSelectors from './../../../state/counter-selectors';
import { ICounter } from './../../../core/models';

@Component({
  selector: 'app-decrement-counter',
  templateUrl: './decrement-counter.component.html',
  styleUrls: ['./decrement-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecrementCounterComponent implements OnInit, OnDestroy {

  counter$!: Observable<ICounter>;
  private destroy$!: Subject<boolean>;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.counter$ = this.store.pipe(select(counterSelectors.getCounter)).pipe(take(1));
  }

  decrementCounter() {
    this.counter$.subscribe((counter: ICounter) => {
      this.store.dispatch(CounterActions.decrementCounter({counter: counter}));
      this.counter$ = this.store.pipe(select(counterSelectors.getCounter)).pipe(take(1));
      takeUntil(this.destroy$);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
