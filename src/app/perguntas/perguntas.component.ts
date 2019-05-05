import { Component, OnInit } from '@angular/core';
import {Perguntas} from './perguntas';
import { Http, Response, JsonpModule } from "@angular/http";
import { Observable, Subscriber } from 'rxjs';
import {PerguntasService} from './perguntas.service';

declare var $;

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {


 // noticias: Noticias[];  
 perguntas$: Observable<Perguntas[]>;

 constructor(private service: PerguntasService) { }

  ngOnInit() {    
    
    // this.service.list().subscribe(dados => this.noticias = dados);
    this.perguntas$ = this.service.list();
   
  }

}
