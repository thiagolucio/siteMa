import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from "rxjs/operators";
import {ModalLabs} from './modal-labs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalLabsService {

  private readonly APILABORATORIOS = `${environment.API}/laboratorios`;


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ModalLabs[]>(this.APILABORATORIOS)     
    .pipe (      
      tap(console.log));
  }
}
