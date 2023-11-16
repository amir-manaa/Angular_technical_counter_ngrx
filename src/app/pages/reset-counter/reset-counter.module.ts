import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetCounterRoutingModule } from './reset-counter-routing.module';
// Components
import { ResetCounterComponent } from './component/reset-counter.component';
// Angular material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    ResetCounterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ResetCounterRoutingModule,
    MatInputModule, 
    MatIconModule,
    MatNativeDateModule, 
    MatDatepickerModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ]
})
export class ResetCounterModule { }
