import { createReducer, on } from '@ngrx/store';
import * as EHeaderActions from './e-header.actions';

export interface State {
  eHeaders: any[];
  eDefaultHeaders: any[];
  error: any;
}

export const initialState: State = {
  eHeaders: [],
  eDefaultHeaders: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(EHeaderActions.loadEHeadersSuccess, (state, { eHeaders }) => ({
    ...state,
    eHeaders,
  })),
  on(EHeaderActions.loadEHeadersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(EHeaderActions.loadDefaultEHeadersSuccess, (state, { eDefaultHeaders }) => ({
    ...state,
    eDefaultHeaders,
  })),
  on(EHeaderActions.loadDefaultEHeadersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
