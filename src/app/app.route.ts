import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SignupHomeComponent } from './signup-home/signup-home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes =[    
                        { path: 'home',component: HomeComponent },
                        { path: 'login',component: LoginComponent },
                        { path: '',redirectTo : 'login', pathMatch : 'full'},
                        { path: 'signup', component: SignupComponent },
                        { path: 'signupHome',component: SignupHomeComponent },
                        { path: 'forgotpassword',component: ForgotPasswordComponent }
];

@NgModule({  
	imports: [   
	 CommonModule,   
	  BrowserModule,    
	  RouterModule.forRoot(routes) 
	   ], 
	    exports: [  ],
})
export class AppRoutingModule { }