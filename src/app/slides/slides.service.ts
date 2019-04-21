import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slides } from './slides';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class SlidesService {

  private readonly APISLIDE = 'http://localhost:3000/slides';
  

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Slides[]>(this.APISLIDE)    
    .pipe (tap(console.log));
  }
}
