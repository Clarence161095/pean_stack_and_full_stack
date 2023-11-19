import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EHeaderComponent } from './e-header/e-header.component';

const routes: Routes = [
  {
    path: 'e-header',
    component: EHeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
