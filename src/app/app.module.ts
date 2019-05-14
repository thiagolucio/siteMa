import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopmenuComponent } from './topmenu/topmenu.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SlidesComponent } from './slides/slides.component';
import { SearchComponent } from './search/search.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VideosComponent } from './videos/videos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component'
import { QuemSomosContentComponent } from './quem-somos/quem-somos-content/quem-somos-content.component';
import { AterrosSanitariosComponent } from './aterros-sanitarios/aterros-sanitarios.component';
import { AterrosSanitariosContentComponent } from './aterros-sanitarios/aterros-sanitarios-content/aterros-sanitarios-content.component';
import { VariedadesComponent } from './variedades/variedades.component'


@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    SlidesComponent,
    SearchComponent,
    NoticiasComponent,
    VideosComponent,
    ServicosComponent,
    PerguntasComponent,
    QuemSomosComponent,
    QuemSomosContentComponent,
    AterrosSanitariosComponent,
    AterrosSanitariosContentComponent,
    VariedadesComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
  ],
  exports: [
    SearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
