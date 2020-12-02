import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {};
  public url = 'http://localhost:3333/signup'
  public method = 'post'
  register(){
    axios.post(this.url, this.user)
      .then(_ => {
        this.router.navigateByUrl('');
      })
    this.user=''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
