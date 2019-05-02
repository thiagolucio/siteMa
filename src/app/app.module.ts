import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTweetModule } from "ngx-tweet";

import { TopmenuComponent } from './topmenu/topmenu.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SlidesComponent } from './slides/slides.component';
import { SearchComponent } from './search/search.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VideosComponent } from './videos/videos.component';
import { ServicosComponent } from './servicos/servicos.component';


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
    ServicosComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    NgxTweetModule,     
  ],
  exports: [
    SearchComponent,
    NgxTweetModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
