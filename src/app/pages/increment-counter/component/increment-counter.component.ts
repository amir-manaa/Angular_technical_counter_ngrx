import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { counterSelectors } from '@rootStore';
import { CounterActions } from '@rootStore';
import { ICounter } from '@rootModels';

@Component({
  selector: 'app-increment-counter',
  templateUrl: './increment-counter.component.html',
  styleUrls: ['./increment-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementCounterComponent implements OnInit {

  counter$!: Observable<ICounter>;
  
  constructor(
    private store: Store<ICounter>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.counter$ = this.store.pipe(
      select(counterSelectors.getCounter),
      take(1)
    );
  }

  incrementCounter() {
    this.counter$.subscribe((counter: ICounter) => {
      this.store.dispatch(CounterActions.incrementCounter({ counter }));
      this.counter$ = this.store.pipe(
        select(counterSelectors.getCounter),
        take(1)
      )}    
    )
  }
}
