import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './core/main/main.component';
import { UserComponent } from './core/user/user.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ProfileComponent } from './core/profile/profile.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { FormComponent } from './core/auth/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
