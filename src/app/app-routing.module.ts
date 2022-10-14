import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'datos-personasles',
    loadChildren: () => import('./pages/datos-personasles/datos-personasles.module').then( m => m.DatosPersonaslesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'dam1',
    loadChildren: () => import('./pages/dam1/dam1.module').then( m => m.Dam1PageModule)
  },
  {
    path: 'dam2',
    loadChildren: () => import('./pages/dam2/dam2.module').then( m => m.Dam2PageModule)
  },
  {
    path: 'fct',
    loadChildren: () => import('./pages/fct/fct.module').then( m => m.FctPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
