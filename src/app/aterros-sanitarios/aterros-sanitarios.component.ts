import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { AterrosSanitariosService } from './aterros-sanitarios.service';
import {AterrosSanitarios} from './aterros-sanitarios';
import { stringify } from 'querystring';


declare var $;

@Component({
  selector: 'app-aterros-sanitarios',
  templateUrl: './aterros-sanitarios.component.html',
  styleUrls: ['./aterros-sanitarios.component.scss']
})
export class AterrosSanitariosComponent implements OnInit {

    aterros$: Observable<AterrosSanitarios[]>;

  constructor(private service: AterrosSanitariosService) { }

  ngOnInit() {
    this.aterros$ = this.service.list();
  }

}
