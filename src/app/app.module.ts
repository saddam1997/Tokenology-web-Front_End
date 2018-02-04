import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppRoutingModule } from  './app.route'
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
import {GrowlModule} from 'primeng/growl';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    SignupHomeComponent,
    ForgotPasswordComponent
    

  ],
  imports: [

    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    ToasterModule,
    HttpClientModule,
    GrowlModule
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
