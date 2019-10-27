import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resuso',
  templateUrl: './resuso.component.html',
  styleUrls: ['./resuso.component.css']
})
export class ResusoComponent implements OnInit {

  resumo; // será carregado a partir da API http://www.devup.com.br/php/api-dashboard/api/resumo

  // resumo = {
  //   consultas: {
  //     consultas_30dias_anteiores: 87,
  //     consultas_30dias_posteriores: 79
  //   },
  //   faturamento: {
  //     anterior: {
  //       valor: 100000,
  //       comparativo: 19
  //     },
  //     previsao: {
  //       valor: 90000,
  //       comparativo: -10
  //     }
  //   }
  // }

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://www.devup.com.br/php/api-dashboard/api/resumo")
      .subscribe( dados => this.resumo = dados);


  }

}
