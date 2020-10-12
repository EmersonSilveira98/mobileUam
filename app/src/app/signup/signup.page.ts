import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signup = {};

  register(){
    console.log(this.signup)
  }

  constructor() { }

  ngOnInit() {
  }

}
