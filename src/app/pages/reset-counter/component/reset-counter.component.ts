import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CounterService } from '../../../core/services';
import { CounterActions } from './../../../state/counter-action';
import { isAgeOver18 } from '../../../shared/utils';
import { ICounter } from './../../../core/models';
import * as counterSelectors from './../../../state/counter-selectors';

@Component({
  selector: 'app-reset-counter',
  templateUrl: './reset-counter.component.html',
  styleUrls: ['./reset-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetCounterComponent implements OnInit, OnDestroy {

  counter$: Subject<ICounter> = new Subject();
  submit = false;
  birthdayForm!: FormGroup;
  maxCalendarDate = new Date();

  constructor(
    private readonly formBuilder: FormBuilder,
    private counterService: CounterService,
    private _snackBar: MatSnackBar,
    private store: Store<ICounter>
  ) {}

  ngOnInit(): void {
    this.getCounterValues();
    this.createForm();
    this.counterService.getCounter();
  }

  onSubmit() {
    this.submit = true;
    if (this.birthdayForm.invalid) {
      return;
    }

    let notificationMessage = '';
    const birthdayDate = this.birthdayForm.get('birthday')!.value;
    if (isAgeOver18(birthdayDate) === true) {
      notificationMessage = 'You are over 18, the counter is reset to 0.';
      this.store.dispatch(CounterActions.resetCounter());
    } else {
      notificationMessage = 'You are under 18, the counter will not be reset.';
    }
    this.showNotification(notificationMessage);
  }

  private getCounterValues() {
    this.store.dispatch(CounterActions.loadCounter());
    this.store.pipe(select(counterSelectors.getCounter)).subscribe(counter => {
      this.counter$.next(counter);
      console.log(counter.value);
    });
  }

  private createForm() {
    this.birthdayForm = this.formBuilder.group({
      birthday: new FormControl('', [Validators.required])
    });
  }

  private showNotification(message: string) {
    this._snackBar.open(message, 'close', {duration: 10000});
  }

  private hideNotification() {
    this._snackBar.dismiss();
  }

  ngOnDestroy(): void {
    this.hideNotification();
  }
}
