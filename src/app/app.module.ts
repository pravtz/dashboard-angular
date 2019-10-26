import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResusoComponent } from './resuso/resuso.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';


let routes = [
  { path : "resumo", component: ResusoComponent},
  { path : "consulta", component: ConsultaComponent},
  { path : "**" , redirectTo:"/resumo"}
]

@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ResusoComponent,
    ConsultaComponent,
    ConsultaPorEspecialidadeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
