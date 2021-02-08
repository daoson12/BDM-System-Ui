import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCampaignerComponent } from './add-campaigner.component';

import { AddCampaignerRoutingModule } from './add-campaigner-routing.module';


@NgModule({
  declarations: [AddCampaignerComponent],
  imports: [

  CommonModule,
    AddCampaignerRoutingModule
  ]
})
export class AddCampaignerModule { }
