import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home }from './home';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class HomeService {

  private readonly APINOTICIAS = `${environment.API}/blocoNoticia`;
  private readonly APISERVICOS = `${environment.API}/servicos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Home[]>(this.APINOTICIAS),
    this.http.get<Home[]>(this.APISERVICOS)
    .pipe (tap(console.log));
  }
}
