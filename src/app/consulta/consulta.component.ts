import { Component, OnInit } from '@angular/core';

import { ConsultaService } from './consulta.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultaInscricao;
  consultas;

  //exemplo do que será retornado na api consultas
//   consultas = {
//     "realizadas" : [
//         { "especialidade" : "Cardiologia", "quantidade" : 20 },
//         { "especialidade" : "Clínica Geral", "quantidade" : 30 },
//         { "especialidade" : "Dermatologia", "quantidade" : 14 },
//         { "especialidade" : "Gastroenterologia", "quantidade" : 10 },
//         { "especialidade" : "Pediatria", "quantidade" : 13 }
//     ],
//     "marcadas" : [
//         { "especialidade" : "Cardiologia", "quantidade" : 19 },
//         { "especialidade" : "Clínica Geral", "quantidade" : 28 },
//         { "especialidade" : "Dermatologia", "quantidade" : 13 },
//         { "especialidade" : "Gastroenterologia", "quantidade" : 8 },
//         { "especialidade" : "Pediatria", "quantidade" : 11 }
//     ]
// }

  constructor(private consultaService:ConsultaService) { }

  ngOnInit() {
    this.consultaInscricao = this.consultaService.getConsulta().subscribe(dados => this.consultas = dados)
  }

  ngOnDestroy(){
    this.consultaInscricao.unsubscribe();
  }

}
