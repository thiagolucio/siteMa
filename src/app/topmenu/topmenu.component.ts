import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { TopmenuService } from './topmenu.service';
import { Topmenu } from './topmenu';


declare var $;

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
  preserveWhitespaces: true
})


export class TopmenuComponent implements OnInit {

  //Criando rotina de repeticao via json para noticias do topo do site
  noticia: Topmenu[];  

  constructor(private service: TopmenuService) { }

  ngOnInit() {
          
      $('[data-toggle="tooltip"]').tooltip();
  
    
    this.service.list().subscribe(dados => this.noticia = dados);  
    
   
  }

}
