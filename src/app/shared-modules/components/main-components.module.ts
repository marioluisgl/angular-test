import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialsModule} from '../materials.module';
import {TranslateModule} from '@ngx-translate/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LangSelectorComponent } from './nav-menu/lang-selector/lang-selector.component';
import { SideNavMenuComponent } from './nav-menu/side-nav-menu/side-nav-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialsModule,
        TranslateModule.forChild(),
    ],
    declarations: [
        NavMenuComponent,
        LangSelectorComponent,
        SideNavMenuComponent
    ],
    exports: [
        NavMenuComponent,
        LangSelectorComponent,
        SideNavMenuComponent
    ]
})
export class MainComponentsModule {
}
