import { Component, OnInit, ChangeDetectionStrategy, DestroyRef, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Store, select } from '@ngrx/store';

import { CounterActions } from '@rootStore';
import { counterSelectors } from '@rootStore';
import { ICounter } from '@rootModels';

@Component({
  selector: 'app-decrement-counter',
  templateUrl: './decrement-counter.component.html',
  styleUrls: ['./decrement-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecrementCounterComponent implements OnInit {

  private counter$!: Observable<ICounter>;
  private destroyRef = inject(DestroyRef);
  private store = inject(Store<ICounter>);

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.counter$ = this.store.pipe(
      select(counterSelectors.getCounter),
      take(1)
    );
  }

  decrementCounter() {
    this.counter$
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )  
      .subscribe((counter: ICounter) => {
        this.store.dispatch(CounterActions.decrementCounter({counter: counter}));
        this.counter$ = this.store.pipe(
          select(counterSelectors.getCounter),
          take(1)
        );
      })
  }
}
