import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonorComponent } from './add-donor.component';

const routes: Routes = [
  {path:'', component:AddDonorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDonorRoutingModule { }
