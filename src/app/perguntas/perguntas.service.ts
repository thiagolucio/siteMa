import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from "rxjs/operators";
import {Perguntas} from './perguntas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  private readonly APIPERGUNTAS = `${environment.API}/perguntas`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Perguntas[]>(this.APIPERGUNTAS)     
    .pipe (      
      tap(console.log));
  }
}
