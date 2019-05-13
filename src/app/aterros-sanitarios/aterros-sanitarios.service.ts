import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import {AterrosSanitarios} from './aterros-sanitarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AterrosSanitariosService {

  private readonly APIATERROS = `${environment.API}/aterros`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<AterrosSanitarios[]>(this.APIATERROS)
    .pipe (tap(console.log));
  }
}
