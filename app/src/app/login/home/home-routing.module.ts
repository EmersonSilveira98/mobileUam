import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
