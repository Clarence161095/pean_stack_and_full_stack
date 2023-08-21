import { createAction } from '@ngrx/store';

export const action = {
  tang: createAction('[Counter Component] Tang gia tri counter + 1 :D'),
  giam: createAction('[Counter Component] Gia gia tri counter - 1 :('),
  reset: createAction('[Counter Component] Thuc hien Reset lai counter => 0'),
};
