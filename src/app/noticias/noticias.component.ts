import { Component, OnInit } from '@angular/core';
import {NoticiasService} from './noticias.service';
import {Noticias} from './noticias';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { stringify } from 'querystring';


declare var $;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  // noticias: Noticias[];  
  noticias$: Observable<Noticias[]>;

 constructor(private service: NoticiasService) { }

  ngOnInit() {    
    
    // this.service.list().subscribe(dados => this.noticias = dados);
    this.noticias$ = this.service.list();
   
  }
}
