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
import { ParamInterceptor } from '../app/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { ChangeUserComponent } from './core/change-user/change-user.component';
import { SettingsComponent } from './core/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PeopleComponent } from './core/people/people.component';
import { UserListElementComponent } from './core/user-list-element/user-list-element.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegistrationComponent,
    FormComponent,
    ChangeUserComponent,
    SettingsComponent,
    PeopleComponent,
    UserListElementComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
