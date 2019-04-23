import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topmenu } from './topmenu';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class TopmenuService { 


  private readonly APINOTICIAS = `${environment.API}/blocoNoticia`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Topmenu[]>(this.APINOTICIAS)    
    .pipe (tap(console.log));
  }
 
}