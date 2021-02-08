import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRequesterRoutingModule } from './add-requester-routing.module';
import { AddRequesterComponent } from './add-requester.component';


@NgModule({
  declarations: [AddRequesterComponent],
  imports: [
    CommonModule,
    AddRequesterRoutingModule
  ]
})
export class AddRequesterModule { }
