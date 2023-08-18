import { createReducer, on } from '@ngrx/store';
import { action } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(action.tang, (state) => state + 1),
  on(action.giam, function (state: any) {
    return state - 1;
  }),
  on(action.reset, (state) => initialState)
);
