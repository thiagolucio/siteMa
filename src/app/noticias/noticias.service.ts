import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import {Noticias} from './noticias';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private readonly APINOTICIAS = `${environment.API}/noticias`;


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Noticias[]>(this.APINOTICIAS)     
    .pipe (tap(console.log));
  }
}
