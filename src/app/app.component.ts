import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCounter } from './state/counter-selectors';
import { CounterActions } from './state/counter-action';
import { ICounter } from './core/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  counter$!: Observable<ICounter>
  
  constructor(
    private store: Store<ICounter>
  ) {}

  title = 'counter';

  ngOnInit(): void {
    this.store.dispatch(CounterActions.loadCounter());
    this.counter$ = this.store.pipe(select(getCounter));
  }
}
