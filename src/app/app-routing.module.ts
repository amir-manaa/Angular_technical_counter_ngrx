import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'up', pathMatch: 'full' },
  { path: 'up', loadChildren: () => import('./pages/increment-counter/increment-counter.module').then(m => m.IncrementCounterModule) },
  { path: 'down', loadChildren: () => import('./pages/decrement-counter/decrement-counter.module').then(m => m.DecrementCounterModule) },
  { path: 'reset', loadChildren: () => import('./pages/reset-counter/reset-counter.module').then(m => m.ResetCounterModule) },
  { path: '**', redirectTo: 'up' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
