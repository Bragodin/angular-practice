import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './core/main/main.component';
import { UserComponent } from './core/user/user.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './core/profile/profile.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { FormComponent } from './core/auth/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParamInterceptor } from '../app/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { ChangeUserComponent } from './core/change-user/change-user.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PeopleComponent } from './pages/people/people.component';
import { UserListElementComponent } from './core/user-list-element/user-list-element.component';
import { HeaderComponent } from './core/header/header.component';
import { GalleryComponent } from './core/gallery-components/gallery/gallery.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AlbumComponent } from './core/gallery-components/album/album.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WebsocketService } from './features/services/websoket.service';
import { FriendsComponent } from './pages/friends/friends.component';
import { RequestToFriendComponent } from './core/request-to-friend/request-to-friend.component';
import { MatCardModule } from '@angular/material/card';
import { UploadButtonComponent } from './ui/upload-button/upload-button.component';
import { NotificationComponent } from './ui/notification/notification.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from './core/pop-up/pop-up.component';
import { MatCommonModule, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './features/store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './features/store/effects/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { NotificationsEffects } from './features/store/effects/notifications.effects';
import { MyFriendsComponent } from './core/my-friends/my-friends.component';
import { UserEffects } from './features/store/effects/user.effects';
import { FriendsEffects } from './features/store/effects/friends.effects';
import { AvatarComponent } from './ui/avatar/avatar.component';
import { MyMessagesComponent } from './pages/my-messages/my-messages.component';
import { MessageComponent } from './ui/message/message.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { DialogEffects } from './features/store/effects/dialog.effect';
import { DialogDataComponent } from './pages/dialog/dialog-data.component';
import { ProfileContainerComponent } from './core/profile/profile-container';
import { DashboardContainerComponent } from './pages/dashboard/dashbord-container.component';
import { PeopleConteinerComponent } from './pages/people/people-container.component';
import { PhotoComponent } from './core/gallery-components/photo-in-album/photo.component';
import { ActivePhotoComponent } from './core/gallery-components/active-photo/active-photo.component';
import { LoginContainer } from './core/auth/login/login-container';
import { PaginationComponent } from './core/pagination/pagination.component';
import { MatSelectModule } from '@angular/material/select';

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
    MyFriendsComponent,
    AvatarComponent,
    MyMessagesComponent,
    MessageComponent,
    DialogComponent,
    DialogDataComponent,
    ProfileContainerComponent,
    DashboardContainerComponent,
    PeopleConteinerComponent,
    PhotoComponent,
    ActivePhotoComponent,
    LoginContainer,
    PaginationComponent
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
    MatSelectModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, NotificationsEffects, AuthEffects, FriendsEffects, DialogEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  entryComponents: [
    PopUpComponent,
    ActivePhotoComponent
  ],
  
  providers: [
    {
      provide: MAT_BOTTOM_SHEET_DATA,
      useValue: {} 
    },
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
