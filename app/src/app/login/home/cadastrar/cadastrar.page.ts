import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  public consult= {};
  public doctorValue= {};
  
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
    console.log(this.consult, this.doctorValue)
  }
  constructor() { }

  ngOnInit() {
  }

}
