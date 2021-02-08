import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';

import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { LoginUserComponent } from './security/login-user/login-user.component';
import { LoginAdminComponent } from './security/login-admin/login-admin.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { EditDonorComponent } from './components/blood-donor/edit-donor/edit-donor.component';
import { EditRequesterComponent } from './components/blood-requester/edit-requester/edit-requester.component';
import { EditCampaignerComponent } from './components/blood-campaigner/edit-campaigner/edit-campaigner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    LandingPageComponent,
    LoginUserComponent,
    LoginAdminComponent,
    SignUpComponent,
    EditDonorComponent,
    EditRequesterComponent,
   
    EditCampaignerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
