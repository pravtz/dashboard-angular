import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResusoComponent } from './resuso/resuso.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumoService } from './resuso/resumo.service';
import { ConsultaService } from './consulta/consulta.service';




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
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [ResumoService, ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
