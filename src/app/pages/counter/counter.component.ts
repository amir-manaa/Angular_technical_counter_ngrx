import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
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

  constructor(
    private store: Store<ICounter>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.store.pipe(select(counterSelectors.getCounter)).subscribe(counter => {
      this.counter$.next(counter)
    })
  }
}
