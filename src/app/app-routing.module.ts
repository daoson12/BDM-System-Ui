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
{path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
