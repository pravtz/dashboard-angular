import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResusoComponent } from './resuso/resuso.component';
import { ConsultaComponent } from './consulta/consulta.component';

let routes = [
  { path : "resumo", component: ResusoComponent},
  { path : "consulta", component: ConsultaComponent},
  { path : "**" , redirectTo:"/resumo"},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
