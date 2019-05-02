import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { ServicosService } from './servicos.service';
import {Servicos} from './servicos';
import { stringify } from 'querystring';


declare var $;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})


export class ServicosComponent implements OnInit {

  servicos: Servicos[]; 

 constructor(private service: ServicosService) {   

 }

  ngOnInit() {    
    
    this.service.list().subscribe(dados => this.servicos = dados);         
   
  }

}
