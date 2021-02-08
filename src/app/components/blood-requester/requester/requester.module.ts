import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequesterComponent } from './requester.component';
import { RequesterRoutingModule } from './requester-routing.module';


@NgModule({
  declarations: [RequesterComponent],
  imports: [

  CommonModule,
    RequesterRoutingModule
  ]
})
export class RequesterModule { }
