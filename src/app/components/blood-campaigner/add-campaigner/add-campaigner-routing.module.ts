import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCampaignerComponent } from './add-campaigner.component';

const routes: Routes = [{
  path:'', component:AddCampaignerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class AddCampaignerRoutingModule { }
