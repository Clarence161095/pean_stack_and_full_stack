import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EHeaderService } from '../e-header.service';
import * as EHeaderActions from './e-header.actions';
import * as EHeaderSelectors from './e-header.selectors';

@Injectable({
  providedIn: 'root',
})
export class EHeaderFacade {
  eHeaders$: Observable<any[]> = this.store.select(
    EHeaderSelectors.selectEHeaders as any
  );

  getDefaultHeader$: Observable<any[]> = this.store.select(
    EHeaderSelectors.selectDefaultEHeaders as any
  );

  constructor(private store: Store, eHeaderService: EHeaderService) {
    this.getDefaultHeader$ = eHeaderService.getDefaultEHeaders();
  }

  loadEHeaders() {
    this.store.dispatch(EHeaderActions.loadEHeaders());
  }

  loadDefaultHeader() {
    this.store.dispatch(EHeaderActions.loadDefaultEHeaders());
  }
}
