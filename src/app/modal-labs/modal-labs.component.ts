import { Component, OnInit } from '@angular/core';
import {ModalLabsService} from './modal-labs.service';
import {ModalLabs} from './modal-labs';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-modal-labs',
  templateUrl: './modal-labs.component.html',
  styleUrls: ['./modal-labs.component.scss']
})
export class ModalLabsComponent implements OnInit {

  // laboratorios: ModalLabs[];  
  laboratorios$: Observable<ModalLabs[]>;

 constructor(private service: ModalLabsService) { }

  ngOnInit() {    
    
    // this.service.list().subscribe(dados => this.laboratorios = dados);
    this.laboratorios$ = this.service.list();
   
  }
}
