import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CounterService } from '@rootServices';
import { CounterActions } from '@rootStore';
import { isAgeOver18 } from '@rootUtils';
import { ICounter } from '@rootModels';
import { counterSelectors } from '@rootStore';

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

  private formBuilder = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private counterService = inject(CounterService);
  private _snackBar = inject(MatSnackBar);
  private store = inject(Store<ICounter>);

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
    this.store.pipe(select(counterSelectors.getCounter))
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )  
      .subscribe(counter => {
        this.counter$.next(counter);
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
