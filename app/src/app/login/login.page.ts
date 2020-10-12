import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public email;
public password;

signin(){
  console.log(`Email: ${this.email}, Senha: ${this.password}`)
}
  constructor() { }

  ngOnInit() {
    


  }

}
