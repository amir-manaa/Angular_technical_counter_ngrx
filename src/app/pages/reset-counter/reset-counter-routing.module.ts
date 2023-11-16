import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetCounterComponent } from './component/reset-counter.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [{ path: '', component: ResetCounterComponent }];

@NgModule({
  imports: [ MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetCounterRoutingModule { }
