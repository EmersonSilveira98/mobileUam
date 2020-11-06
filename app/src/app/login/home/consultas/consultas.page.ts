import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  public scheduling = [
    {
      doctor: "Dr. Eduardo",
      date: "27/11/2020"
    },
    {
      doctor: "Dr. Emerson",
      date: "09/11/2020"
    },
    {
      doctor: "Dr. Esther",
      date: "20/12/2020"
    },
    {
      doctor: "Dr. Davi",
      date: "04/07/2020"
    },
    { 
      doctor: "Dr Luan",
      date: "20/10/2020"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
