import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialsModule} from './materials.module';
import { MainComponentsModule } from './components/main-components.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
    TranslateModule.forChild(),
    MainComponentsModule,
  ],
  declarations: [],
  exports: [
    MaterialsModule,
    MainComponentsModule,
  ]

})
export class SharedModules {
}
