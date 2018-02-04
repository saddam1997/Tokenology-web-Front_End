import { Component, OnInit ,NgModule} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector : 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    msgs: Message[] = [];
    loading = false;
    returnUrl: string;
    submitted: boolean;
    loginDetail:LoginDetail;
    loginform: FormGroup;
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,private messageService: MessageService) 
        { 
           this.http = http;
           this.loginDetail = { 
             email:'',
             password:''   
           } }

    ngOnInit() {
        // reset login status
        this.loginFormInit();
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    loginFormInit(){
      this.loginform = this.fb.group({
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
            
        });
    }

    login() {   
      this.messageService.add({severity:'success', summary:'Login Succesfully'});
        this.loading = true;
        this.authenticationService.login(this.loginDetail)
            .subscribe(
                data => {                    
                 this.messageService.add({severity:'success', summary:'Login Succesfully'});
                 this.router.navigate(['/home']);
                },
                error => {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: 'server not response' });
                 // this.alertService.error(error.msg);
                    this.loading = false;
                });
    }
}
