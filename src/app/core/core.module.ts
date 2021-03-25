import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {GlOBAL_CONFIG} from './configs/global.config';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, private translate: TranslateService) {
    this.translate.setDefaultLang(GlOBAL_CONFIG.LANGUAGES[1]);
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
