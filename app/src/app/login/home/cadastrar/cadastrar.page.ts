import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  public consult= {};
  public doctorValue= {};

  
  public url = 'http://localhost:3001/users'
  public method = 'post'

  public doctor = [
    {
      name: "Dr. Eduardo",

    },
    {
      name: "Dr. Emerson",
    },
    {
      name: "Dr. Esther",

    }
]
  schedule(){
    axios[this.method](this.url, this.consult)
  }
  constructor() { }

  ngOnInit() {
  }

}
