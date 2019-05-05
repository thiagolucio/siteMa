import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import {Home} from './home';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class HomeService {

  private readonly APIHOME = `${environment.API}/home`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Home[]>(this.APIHOME)
    .pipe (tap(console.log));
  }
  
}
