import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRequesterComponent } from './add-requester.component';

const routes: Routes = [
  {
    path:'', component:AddRequesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class AddRequesterRoutingModule { }
