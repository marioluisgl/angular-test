import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { TimeConverterPipe } from './time-converter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeConverterPipe
  ],
  exports: [
    TimeConverterPipe
  ]
})

export class PipesModule {
}
