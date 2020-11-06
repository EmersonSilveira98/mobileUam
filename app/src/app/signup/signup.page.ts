import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {};
  public url = 'http://localhost:3001/users'
  public method = 'post'
  register(){
    axios[this.method](this.url, this.user)
    this.user= ''
  } 

  constructor() { }

  ngOnInit() {
  }

}
