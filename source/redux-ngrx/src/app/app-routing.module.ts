import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { CounterMyReduxComponent } from './counter-my-redux/counter-my-redux.component';

export const routesHasMenu = [
  { path: 'home', component: HomeComponent, navigatorName: 'Home' },
  { path: 'counter', component: CounterComponent, navigatorName: 'Counter' },
  {
    path: 'counter-my-redux',
    component: CounterMyReduxComponent,
    navigatorName: 'CounterMR',
  },
];

const routes: Routes = [
  ...routesHasMenu.map((menu: any) => {
    return { path: menu.path, component: menu.component };
  }),
  // { path: 'graph', component: GraphComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
