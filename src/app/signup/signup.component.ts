import { Component, OnInit ,NgModule} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService ,UserService } from '../_services/index';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
    selector : 'signup',
    templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {
    loading = false;
    returnUrl: string;
    submitted: boolean;
    registerForm: FormGroup;
    signUpDetails: SignupDetail;
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private messageService: MessageService) 
    { 
        this.http = http 
         
         this.signUpDetails = {           
            lastName: '',
            firstName: '',
            email:'',
            password:''         
           
           }



    }

    ngOnInit() {
        // reset login status
        this.loginFormInit();
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    loginFormInit(){
      this.registerForm = this.fb.group({
            'firstName': new FormControl('', Validators.required),
            'lastName': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required),
            
        });
    }

        register() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});

        this.loading = true;
        this.userService.create(this.signUpDetails).subscribe(
                data => {
                    this.messageService.add({severity:'success', summary:'Registration successful'});
                    this.router.navigate(['/login']);
                },
                error => {
                    this.messageService.add({severity:'error', summary:'server error'});
                    this.alertService.error(error.msg);
                    this.loading = false;
                });
    }
}
