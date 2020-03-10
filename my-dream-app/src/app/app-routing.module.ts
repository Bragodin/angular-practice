import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './core/user/user.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChangeUserComponent } from './core/change-user/change-user.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { RequestToFriendComponent } from './core/request-to-friend/request-to-friend.component';
import { MyFriendsComponent } from './core/my-friends/my-friends.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { DialogDataComponent } from './pages/dialog/dialog-data.component';
import { DashboardContainerComponent } from './pages/dashboard/dashbord-container.component';
import { PeopleConteinerComponent } from './pages/people/people-container.component';
import { LoginContainer } from './core/auth/login/login-container';

const friendsRoutes: Routes = [
  { path: 'myfriends', component: MyFriendsComponent},
  { path: 'friendsrequest', component: RequestToFriendComponent},
];

const routes: Routes = [
  { path: 'users', canActivate: [AuthGuard], component: UserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardContainerComponent },
  { path: 'profile/:id', canActivate: [AuthGuard], component: MyProfileComponent },
  { path: 'login', component: LoginContainer },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', canActivate: [AuthGuard], component: MyProfileComponent },
  { path: 'settings', canActivate: [AuthGuard], component: SettingsComponent },
  { path: 'changeProfile', canActivate: [AuthGuard], component: ChangeUserComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleConteinerComponent },
  { path: 'friends', canActivate: [AuthGuard], component: FriendsComponent, children: friendsRoutes}, 
  { path: 'mydialog/:id', canActivate: [AuthGuard], component: DialogDataComponent },
  { path: 'mymessages', canActivate: [AuthGuard], component: MyMessagesComponent}
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
