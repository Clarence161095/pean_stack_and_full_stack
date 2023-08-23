import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { action } from '../counter/+state/counter.actions';
import { MyStore } from '../app.module';

@Component({
  selector: 'app-counter-my-redux',
  templateUrl: './counter-my-redux.component.html',
  styleUrls: ['./counter-my-redux.component.scss'],
})
export class CounterMyReduxComponent {
  count$: Observable<number> = of(0);
  tuanCount = 0;
  inputValue: number = 0;
  store;

  constructor() {
    this.store = MyStore;
    // this.count$ = this.store.select('count');
  }

  increment() {
    // this.store.dispatch(action.tang());
    this.tuanCount++;
  }

  plus5() {
    // tạo 1 trigger cho plus5
    // dispatch với payload action tang 5
    // this.store.dispatch(action.tang5());
  }

  minus10() {
    // tạo 1 trigger cho minus10
    // dispatch với payload action giam 10
    // this.store.dispatch(action.giam10());
  }

  plus() {
    // this.store.dispatch(action.tangX({ value: this.inputValue })); // Truyền tham số value
  }

  minus() {
    // this.store.dispatch(action.giamX({ value: this.inputValue })); // Truyền tham số value
  }

  decrement() {
    // this.store.dispatch(action.giam());
    this.tuanCount--;
  }

  reset() {
    // this.store.dispatch(action.reset());
    this.tuanCount = 0;
  }
}

// const ClassA = {
//   constructor: (store: any) => {
//     return {};
//   },
// };

// const test = ClassA.constructor({});
// const test = new CounterMyReduxComponent({} as any);
