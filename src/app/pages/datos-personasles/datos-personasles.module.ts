import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPersonaslesPageRoutingModule } from './datos-personasles-routing.module';

import { DatosPersonaslesPage } from './datos-personasles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPersonaslesPageRoutingModule
  ],
  declarations: [DatosPersonaslesPage]
})
export class DatosPersonaslesPageModule {}
