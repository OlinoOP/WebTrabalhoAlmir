import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencias } from './transferencias';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {
  //id: number = this.login.userId;
  private readonly API = 'http://localhost:4200/WebTrabalhoAlmir/transferencia/${this.id}'
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Transferencias>(this.API);
  }
}
