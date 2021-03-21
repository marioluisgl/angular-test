import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
        paramsInheritanceStrategy: 'always'
      },
    )
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}
