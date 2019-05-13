import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { QuemSomosContentComponent } from './quem-somos/quem-somos-content/quem-somos-content.component';
import { AterrosSanitariosContentComponent } from './aterros-sanitarios/aterros-sanitarios-content/aterros-sanitarios-content.component';



const routes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'top', component: TopmenuComponent },   
  { path: 'perguntas', component: PerguntasComponent },   
  { path: 'contentquemsomos', component: QuemSomosContentComponent },
  { path: 'aterrossanitarioscontent', component: AterrosSanitariosContentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
