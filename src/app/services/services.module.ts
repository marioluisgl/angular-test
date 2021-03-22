import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HandleSharedService } from '../services/handle-services.service';


@NgModule({
  imports: [
CommonModule,
    HttpClientModule
  ],
  providers: [
    HandleSharedService,
  ],
  declarations: []
})
export class ServiceModule { }
