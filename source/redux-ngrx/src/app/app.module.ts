import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/+state/counter.reducer';
import { CounterMyReduxComponent } from './counter-my-redux/counter-my-redux.component';

export const MyStore = {
  select: () => {},
  dispatch: () => {},
};

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavigationComponent,
    HomeComponent,
    CounterMyReduxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        count: counterReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
