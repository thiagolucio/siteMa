import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { QuemSomosContentComponent } from './quem-somos/quem-somos-content/quem-somos-content.component';
import { AterrosSanitariosContentComponent } from './aterros-sanitarios/aterros-sanitarios-content/aterros-sanitarios-content.component';
import { ResiduoIndustrialComponent } from './servicos/residuo-industrial/residuo-industrial.component';
import { RecepcaoResiduosComponent } from './servicos/recepcao-residuos/recepcao-residuos.component';
import { TratamentoResiduosComponent } from './servicos/tratamento-residuos/tratamento-residuos.component';
import { TratamentoEfluentesComponent } from './servicos/tratamento-efluentes/tratamento-efluentes.component';
import { BlendagemResiduosComponent } from './servicos/blendagem-residuos/blendagem-residuos.component';
import { IncineracaoComponent } from './servicos/incineracao/incineracao.component';
import { DisposicaoFinalComponent } from './servicos/disposicao-final/disposicao-final.component';
import { CuidadosAdicionaisComponent } from './servicos/cuidados-adicionais/cuidados-adicionais.component';
import { ResponsabilidadeLegalComponent } from './responsabilidade-legal/responsabilidade-legal.component';
import { ModalSistemaComponent } from './modal-sistema/modal-sistema.component';



const routes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'top', component: TopmenuComponent },   
  { path: 'perguntas', component: PerguntasComponent },   
  { path: 'contentquemsomos', component: QuemSomosContentComponent},
  { path: 'aterrossanitarioscontent', component: AterrosSanitariosContentComponent},
  { path: 'residuoIndustrial', component: ResiduoIndustrialComponent},
  { path: 'recepcaoResiduos', component: RecepcaoResiduosComponent},  
  { path: 'tratamentoResiuduos', component: TratamentoResiduosComponent},
  { path: 'tratamentoEfluentes', component: TratamentoEfluentesComponent},
  { path: 'blendagemResiduos', component: BlendagemResiduosComponent},
  { path: 'incineracao', component: IncineracaoComponent},
  { path: 'disposicaoFinal', component: DisposicaoFinalComponent},
  { path: 'cuidadosAdicionais', component: CuidadosAdicionaisComponent},
  { path: 'responsabilidadeLegal', component: ResponsabilidadeLegalComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
