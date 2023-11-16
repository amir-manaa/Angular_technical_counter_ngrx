import { NgModule } from '@angular/core';
import { DecrementCounterRoutingModule } from './decrement-counter-routing.module';
// Components
import { DecrementCounterComponent } from './component/decrement-counter.component';
import { CounterComponent } from './../counter/counter.component';

@NgModule({
  declarations: [
    DecrementCounterComponent
  ],
  imports: [
    DecrementCounterRoutingModule,
    CounterComponent
  ]
})
export class DecrementCounterModule { }
