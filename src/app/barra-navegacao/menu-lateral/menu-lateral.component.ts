import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  // declarado como false para manter fechado o menu lateral
  menuToggle = false;

  constructor() { }

  ngOnInit() {
  }

  //metodo que interver o estado de false para true e vice-versa
  toggle(){
    this.menuToggle = !this.menuToggle;
  }


}
