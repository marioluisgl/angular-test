import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialsModule} from './materials.module';
import {MainComponentsModule} from './components/main-components.module';
import {PipesModule} from '../shared-modules/pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
    TranslateModule.forChild(),
    MainComponentsModule,
    PipesModule
  ],
  declarations: [],
  exports: [
    MaterialsModule,
    MainComponentsModule,
    PipesModule
  ]

})
export class SharedModules {
}
