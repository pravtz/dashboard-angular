// Note que importamos Output EventEmitter do pacote @angular/core.
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  //Tornamos um evento ouvível quando anotamos com @Output
  //Instanciando o EventEmitter para disparar um evento.
  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // Criando a função que irá disparar o evento, o seu nome é disparaEvento para ser mais intuitivo o que essa função faz.
  disparaEvento(){
    this.onToggle.emit();
  }
}
