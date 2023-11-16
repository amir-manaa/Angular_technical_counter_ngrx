import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncrementCounterComponent } from './component/increment-counter.component';

const routes: Routes = [{ path: '', component: IncrementCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncrementCounterRoutingModule { }
