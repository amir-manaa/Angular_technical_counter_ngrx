import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICounter } from './../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private COUNTER_API_URL = 'http://localhost:3000/counter';

  constructor(
    private http: HttpClient
  ) {}

  getCounter(): Observable<ICounter>{
    return this.http.get<ICounter>(`${this.COUNTER_API_URL}`).pipe()
  }

  incrementCounter(counter: ICounter): Observable<ICounter> {
    const newCounter: ICounter = {
      value: counter.value + this.increaseDecreaseValue(counter.clickNumber),
      clickNumber: counter.clickNumber + 1
    }
    return this.http.put<ICounter>(`${this.COUNTER_API_URL}`, newCounter);
  }

  decrementCounter(counter: ICounter): Observable<ICounter> {
    const newCounter: ICounter = {
      value: counter.value - this.increaseDecreaseValue(counter.clickNumber),
      clickNumber: counter.clickNumber + 1
    }
    return this.http.put<ICounter>(`${this.COUNTER_API_URL}`, newCounter);
  }

  resetCounter(): Observable<ICounter> {
    const counter: ICounter = {
      value: 0,
      clickNumber: 0
    }
    return this.http.put<ICounter>(`${this.COUNTER_API_URL}`, counter);
  }
  
  increaseDecreaseValue(clickNumber: number): number {
    const increaseDecreaseValue = (Math.trunc(clickNumber / 30) === 0) ? 1 : Math.pow(2, Math.trunc(clickNumber / 30));
    return increaseDecreaseValue;
  }
}
