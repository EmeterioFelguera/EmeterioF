import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPersonaslesPage } from './datos-personasles.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPersonaslesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPersonaslesPageRoutingModule {}
