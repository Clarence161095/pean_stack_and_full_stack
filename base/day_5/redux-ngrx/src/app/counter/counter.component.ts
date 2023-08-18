import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  // count$: Observable<number>;

  constructor() {
    // TODO: Connect `this.count$` stream to the current store `count` state
  }

  increment() {
    // TODO: Dispatch an increment action
  }

  decrement() {
    // TODO: Dispatch a decrement action
  }

  reset() {
    // TODO: Dispatch a reset action
  }
}
