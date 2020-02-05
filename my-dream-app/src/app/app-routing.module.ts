import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './core/user/user.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ProfileComponent } from './core/profile/profile.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { SettingsComponent } from './core/settings/settings.component';
import { ChangeUserComponent } from './core/change-user/change-user.component';

const routes: Routes = [
  { path: 'users', canActivate: [AuthGuard], component: UserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'profile/:id', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent },
  { path: 'changeProfile', canActivate: [AuthGuard], component: ChangeUserComponent }
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
