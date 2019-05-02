import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import {Servicos} from './servicos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

 
  private readonly APISERVICOS = `${environment.API}/servicos`;


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Servicos[]>(this.APISERVICOS)   
    .pipe (tap(console.log));
  }
}
