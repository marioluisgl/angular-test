import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialsModule} from '../materials.module';
import {TranslateModule} from '@ngx-translate/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LangSelectorComponent } from './nav-menu/lang-selector/lang-selector.component';
import { SideNavMenuComponent } from './nav-menu/side-nav-menu/side-nav-menu.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard/wizard-step.component';
import { ModalUsageCalendarComponent } from '../modals/modal-usage-calendar/modal-usage-calendar.component';
import { ModalUsageCounterComponent } from '../modals/modal-usage-counter/modal-usage-counter.component';
import { ModalUsageWizardComponent } from '../modals/modal-usage-wizard/modal-usage-wizard.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialsModule,
        TranslateModule.forChild(),
    ],
    declarations: [
        NavMenuComponent,
        LangSelectorComponent,
        SideNavMenuComponent,
        WizardComponent,
        WizardStepComponent,
        ModalUsageCalendarComponent,
        ModalUsageCounterComponent,
        ModalUsageWizardComponent,
        TimerComponent
    ],
    exports: [
        NavMenuComponent,
        LangSelectorComponent,
        SideNavMenuComponent,
        WizardComponent,
        WizardStepComponent,
        TimerComponent
    ]
})
export class MainComponentsModule {
}
