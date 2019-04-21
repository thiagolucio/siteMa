import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topmenu } from './topmenu';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})



export class TopmenuService { 


  private readonly APINOTICIAS = 'http://localhost:3000/blocoNoticia';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Topmenu[]>(this.APINOTICIAS)    
    .pipe (tap(console.log));
  }
 
}
