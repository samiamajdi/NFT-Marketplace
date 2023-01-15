import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,private test:TestService ) {

  }

  profile(){
    this.test.loginmsk();
    this.test.profilee();


 }
  ngOnInit(): void {
    this.test.loginmsk();
  }
  create(){
    this.router.navigate(["mint"]);
  }

}
