import { createAction, props } from '@ngrx/store';

export const loadEHeaders = createAction('[EHeader] Load EHeaders');
export const loadEHeadersSuccess = createAction(
  '[EHeader] Load EHeaders Success',
  props<{ eHeaders: any[] }>()
);
export const loadEHeadersFailure = createAction(
  '[EHeader] Load EHeaders Failure',
  props<{ error: any }>()
);

export const loadDefaultEHeaders = createAction(
  '[EHeader] Load Default EHeaders'
);
export const loadDefaultEHeadersSuccess = createAction(
  '[EHeader] Load Default EHeaders Success',
  props<{ eDefaultHeaders: any[] }>()
);
export const loadDefaultEHeadersFailure = createAction(
  '[EHeader] Load Default EHeaders Failure',
  props<{ error: any }>()
);
