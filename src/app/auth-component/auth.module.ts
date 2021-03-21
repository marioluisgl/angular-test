import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {  AuthComponent } from './auth.component';
import {SharedModules} from '../shared-modules/shared-modules.module';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {path: '', component: AuthComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    SharedModules
  ],
  exports: [
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule {
}
