import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./auth-component/auth.module').then(m => m.AuthModule),
    data: {preload: true}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
  providers: [
  ]
})

export class RoutingModule {
}
