import { NgModule } from '@angular/core';

import { IncrementCounterRoutingModule } from './increment-counter-routing.module';
// Components
import { IncrementCounterComponent } from './component/increment-counter.component';
import { CounterComponent } from './../counter/counter.component';

@NgModule({
  declarations: [
    IncrementCounterComponent
  ],
  imports: [
    IncrementCounterRoutingModule,
    CounterComponent
  ]
})
export class IncrementCounterModule { }
