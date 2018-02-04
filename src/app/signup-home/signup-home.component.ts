import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-home',
  templateUrl: './signup-home.component.html',
  styleUrls: ['./signup-home.component.css']
})
export class SignupHomeComponent implements OnInit {
model: any = {};
    loading = false;
  constructor(
        private router: Router,
        //private userService: UserService,
        ) { }

  ngOnInit() {
  }
  signup() {
        this.loading = true;
        
    }

}



