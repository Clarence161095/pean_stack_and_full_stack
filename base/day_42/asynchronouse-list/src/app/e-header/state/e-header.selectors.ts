import { createSelector } from '@ngrx/store';
import { State } from './e-header.reducer';

export const selectEHeaders = createSelector(
  (state: State) => state.eHeaders,
  (eHeaders) => eHeaders
);

export const selectDefaultEHeaders = createSelector(
  (state: State) => state.eDefaultHeaders,
  (eDefaultHeaders) => eDefaultHeaders
);
