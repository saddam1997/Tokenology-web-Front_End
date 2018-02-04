import { Component, OnInit ,NgModule} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import {FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
import {  Message } from 'primeng/primeng';
@Component({
    selector : 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
     msgs: Message[] = [];
    loading = false;
    returnUrl: string;
    submitted: boolean;
    loginform: FormGroup;
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private alertService: AlertService, private toaster_Service : ToasterService) { this.http = http }

    ngOnInit() {
        // reset login status
        this.loginFormInit();
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    loginFormInit(){
      this.loginform = this.fb.group({
            'username': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
            
        });
    }

    login() {      
        this.loading = true;
        this.authenticationService.login(this.loginform.controls.username.value, this.loginform.controls.password.value)
            .subscribe(
                data => {
                    this.msgs = [];
                    this.msgs.push({ severity: 'success', summary: 'Login Succesfully' });
                    //this.toaster_Service.pop('success', 'Login Succesfully');
                    this.router.navigate(['/home']);
                },
                error => {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: 'Enable email and password' });
                 // this.alertService.error(error.msg);
                    this.loading = false;
                });
    }
}
