import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDonorComponent } from './add-donor.component';

import { AddDonorRoutingModule } from './add-donor-routing.module';


@NgModule({
  declarations: [AddDonorComponent],
  imports: [

  CommonModule,
    AddDonorRoutingModule
  ]
})
export class AddDonorModule { }
