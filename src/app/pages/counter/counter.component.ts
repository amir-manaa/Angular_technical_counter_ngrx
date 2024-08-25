import { ChangeDetectionStrategy, Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Store, select } from '@ngrx/store';

import { ICounter } from '@rootModels';
import { CounterActions } from '@rootStore';
import { counterSelectors } from '@rootStore';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  
  counter$: Subject<ICounter> = new Subject();

  private destroyRef = inject(DestroyRef);
  private store = inject(Store<ICounter>);

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.store.pipe(select(counterSelectors.getCounter))
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )  
      .subscribe(counter => {
        this.counter$.next(counter)
      })
  }
}
