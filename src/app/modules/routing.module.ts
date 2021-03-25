import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: {preload: true}
  },
  {
    path: 'clock',
    loadChildren: () => import('./clock-timer-crono/clock-timer-crono.module').then(m => m.ClockTimerCronoModule),
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
