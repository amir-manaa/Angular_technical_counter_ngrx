import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetCounterComponent } from './reset-counter.component';

describe('ResetCounterComponent', () => {
  let component: ResetCounterComponent;
  let fixture: ComponentFixture<ResetCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetCounterComponent]
    });
    fixture = TestBed.createComponent(ResetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
