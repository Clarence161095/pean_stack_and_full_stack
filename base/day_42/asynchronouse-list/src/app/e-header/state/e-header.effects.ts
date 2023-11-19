import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as EHeaderActions from './e-header.actions';
import { EHeaderService } from '../e-header.service';

@Injectable()
export class EHeaderEffects {
  loadEHeaders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EHeaderActions.loadEHeaders),
      switchMap(() =>
        this.eHeaderService.getEHeaders().pipe(
          map((eHeaders) => EHeaderActions.loadEHeadersSuccess({ eHeaders })),
          catchError((error) =>
            of(EHeaderActions.loadEHeadersFailure({ error }))
          )
        )
      )
    )
  );

  loadDefaultEHeaders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EHeaderActions.loadDefaultEHeaders),
      switchMap(() =>
        this.eHeaderService.getDefaultEHeaders().pipe(
          map((eDefaultHeaders) =>
            EHeaderActions.loadDefaultEHeadersSuccess({ eDefaultHeaders })
          ),
          catchError((error) =>
            of(EHeaderActions.loadDefaultEHeadersFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private eHeaderService: EHeaderService
  ) {}
}
