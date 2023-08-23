import { createReducer, on } from '@ngrx/store';
import { action } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(action.tang, (state) => state + 1),
  on(action.giam, (state) => state - 1),
  on(action.reset, () => initialState),
  on(action.tang5, (state) => state + 5),
  on(action.giam10, (state) => state - 10),
  on(action.tangX, (state, { value }) => state + value),
  on(action.giamX, (state, { value }) => state - value),
);
