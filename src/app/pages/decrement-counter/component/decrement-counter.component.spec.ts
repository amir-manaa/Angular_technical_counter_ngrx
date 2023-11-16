import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementCounterComponent } from './decrement-counter.component';

describe('DecrementCounterComponent', () => {
  let component: DecrementCounterComponent;
  let fixture: ComponentFixture<DecrementCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecrementCounterComponent]
    });
    fixture = TestBed.createComponent(DecrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
