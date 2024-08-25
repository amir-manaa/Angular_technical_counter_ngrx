import { Component, OnInit, ChangeDetectionStrategy, DestroyRef, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
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
  private destroyRef = inject(DestroyRef);
  private store = inject(Store<ICounter>);

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.counter$ = this.store.pipe(
      select(counterSelectors.getCounter),
      take(1)
    );
  }

  incrementCounter() {
    this.counter$
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    ) 
    .subscribe((counter: ICounter) => {
      this.store.dispatch(CounterActions.incrementCounter({ counter }));
      this.counter$ = this.store.pipe(
        select(counterSelectors.getCounter),
        take(1)
      )}    
    )
  }
}
