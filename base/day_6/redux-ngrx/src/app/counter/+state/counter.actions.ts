import { createAction, props } from '@ngrx/store';

export const action = {
  tang: createAction('[Counter Component] Tang gia tri counter + 1 :D'),
  giam: createAction('[Counter Component] Giam gia tri counter - 1 :('),
  reset: createAction('[Counter Component] Thuc hien Reset lai counter => 0'),
  tang5: createAction('Tang 5'),
  giam10: createAction('Giam 10'),
  tangX: createAction('Tang X', props<{ value: number }>()),
  giamX: createAction('Giam X', props<{ value: number }>()),
};

