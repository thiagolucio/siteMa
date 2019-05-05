import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { HomeService } from './home.service';
import {Home} from './home';
import { stringify } from 'querystring';


declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  //Criando rotina de repeticao via json para noticias do topo do site
  homeDados: Home[];

 constructor(private service: HomeService) {   

 }

  ngOnInit() {    
    
    this.service.list().subscribe(dados => this.homeDados = dados);
       
  }

}
