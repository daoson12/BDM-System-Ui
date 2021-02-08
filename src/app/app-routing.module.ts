import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginUserComponent } from './security/login-user/login-user.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { LoginAdminComponent } from './security/login-admin/login-admin.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';

const routes: Routes = [

// {path:'', component:HomeComponent},
{path:'', component:LandingPageComponent},
{path:'login-user', component:LoginUserComponent},
{path:'login-admin', component:LoginAdminComponent},
{path:'sign-up', component:SignUpComponent},
{path:'home', component:HomeComponent,

children:[ 
{
  path: '', 
  loadChildren: () => import('./layout/dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path: 'add-donor', 
  loadChildren: () => import('./components/blood-donor/add-donor/add-donor.module').then(m => m.AddDonorModule)
},
{
  path: 'donor', 
  loadChildren: () => import('./components/blood-donor/donors/donors.module').then(m => m.DonorsModule)
},
{
  path: 'add-requester', 
  loadChildren: () => import('./components/blood-requester/add-requester/add-requester.module').then(m => m.AddRequesterModule)
},

{
  path: 'requester', 
  loadChildren: () => import('./components/blood-requester/requester/requester.module').then(m => m.RequesterModule)
},
{
  path: 'add-campaigner', 
  loadChildren: () => import('./components/blood-campaigner/add-campaigner/add-campaigner.module').then(m => m.AddCampaignerModule)
},
{
  path: 'campaigner', 
  loadChildren: () => import('./components/blood-campaigner/campaigner/campaigner.module').then(m => m.CampaignerModule)
},
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
