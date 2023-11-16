import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecrementCounterComponent } from './component/decrement-counter.component';

const routes: Routes = [{ path: '', component: DecrementCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecrementCounterRoutingModule { }
