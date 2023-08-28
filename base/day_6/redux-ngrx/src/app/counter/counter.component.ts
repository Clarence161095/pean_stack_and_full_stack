import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { action } from './+state/counter.action./';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;
  tuanCount = 0;
  inputValue: number = 0;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(action.tang());
    this.tuanCount++;
  }

  plus5() {
    // tạo 1 trigger cho plus5
    // dispatch với payload action tang 5
    this.store.dispatch(action.tang5());
  }

  minus10() {
    // tạo 1 trigger cho minus10
    // dispatch với payload action giam 10
    this.store.dispatch(action.giam10());
  }

  plus() {
    this.store.dispatch(action.tangX({ value: this.inputValue })); // Truyền tham số value
  }

  minus() {
    this.store.dispatch(action.giamX({ value: this.inputValue })); // Truyền tham số value
  }


  decrement() {
    this.store.dispatch(action.giam());
    this.tuanCount--;
  }

  reset() {
    this.store.dispatch(action.reset());
    this.tuanCount = 0;
  }
}

