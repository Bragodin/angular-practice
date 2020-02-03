import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './core/user/user.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ProfileComponent } from './core/profile/profile.component';
import { LoginComponent } from './core/auth/login/login.component';
import { MainComponent } from './core/main/main.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
