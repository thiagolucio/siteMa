import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import {Videos} from './videos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private readonly APIVIDEOS = `${environment.API}/videos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Videos[]>(this.APIVIDEOS)
    .pipe (tap(console.log));
  }
}
