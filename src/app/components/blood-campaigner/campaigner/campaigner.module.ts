import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignerComponent } from './campaigner.component';
import { CampaignerRoutingModule } from './campaigner-routing.module';


@NgModule({
  declarations: [CampaignerComponent],
  imports: [

  CommonModule,
    CampaignerRoutingModule
  ]
})
export class CampaignerModule { }
