import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { EHeaderEffects } from './e-header/state/e-header.effects';
import { reducer as eHeaderReducer } from './e-header/state/e-header.reducer';

@NgModule({
  declarations: [AppComponent, EHeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ eHeaders: eHeaderReducer }),
    EffectsModule.forRoot([EHeaderEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
