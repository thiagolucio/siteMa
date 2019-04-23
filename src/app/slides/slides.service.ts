import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slides } from './slides';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class SlidesService {

  private readonly APISLIDE = `${environment.API}/slides`;
  

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Slides[]>(this.APISLIDE)    
    .pipe (tap(console.log));
  }
}
