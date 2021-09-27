import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DeleteComponent } from './delete/delete.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpdateComponent } from './update/update.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    SidenavComponent,
    routingComponents,
    DeleteComponent,
    UpdateComponent,
    SigninComponent,
    ProfileComponent,
    AdminsigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            'clientId'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
