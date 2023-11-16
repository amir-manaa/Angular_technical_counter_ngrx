import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementCounterComponent } from './increment-counter.component';

describe('IncrementCounterComponent', () => {
  let component: IncrementCounterComponent;
  let fixture: ComponentFixture<IncrementCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementCounterComponent]
    });
    fixture = TestBed.createComponent(IncrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
