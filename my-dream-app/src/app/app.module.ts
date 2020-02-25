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
import { GalleryComponent } from './core/gallery/gallery.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AlbumComponent } from './core/album/album.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './features/services/websoket.service';
import { FriendsComponent } from './pages/my-friends/friends/friends.component';
import { RequestToFriendComponent } from './core/request-to-friend/request-to-friend.component';
import { MatCardModule } from '@angular/material/card';
import { UploadButtonComponent } from './ui/upload-button/upload-button.component';
import { NotificationComponent } from './ui/notification/notification.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from './core/pop-up/pop-up.component';
import { MatCommonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './features/store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './features/store/effects/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { NotificationsEffects } from './features/store/effects/notifications.effects';
import { FriendItemInListComponent } from './core/friend-item-in-list/friend-item-in-list.component';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };


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
    HeaderComponent,
    GalleryComponent,
    MyProfileComponent,
    AlbumComponent,
    FriendsComponent,
    RequestToFriendComponent,
    UploadButtonComponent,
    NotificationComponent,
    PopUpComponent,
    FriendItemInListComponent 
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
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    SocketIoModule.forRoot(config),
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatCommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([NotificationsEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
    
  ],
  entryComponents: [
    PopUpComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: ParamInterceptor,
      multi: true
    },
    AuthGuard,
    WebsocketService,
   {
     provide:  MatDialogRef,
     useValue: {}
   },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
