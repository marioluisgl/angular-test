import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModules} from '../../shared-modules/shared-modules.module';
import {TranslateModule} from '@ngx-translate/core';
import {ClockTimerCronoComponent} from './clock-timer-crono.component';
import {ClockComponent} from './components/clock/clock.component';
import {PipesModule} from '../../shared-modules/pipes/pipes.module';

const routes: Routes = [
  {path: '', redirectTo: 'clock', pathMatch: 'full'},
  {
    path: '', component: ClockTimerCronoComponent,
    children: [
      {
        path: 'clock', component: ClockComponent,
        data: {preload: true}
      },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    SharedModules,
    PipesModule
  ],
  exports: [
  ],
  declarations: [
    ClockTimerCronoComponent,
    ClockComponent
  ]
})
export class ClockTimerCronoModule {
}
