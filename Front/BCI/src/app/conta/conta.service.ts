import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from './conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  id = localStorage.getItem('clienteId')
  private readonly API = `http://localhost:4200/WebTrabalhoAlmir/conta/${this.id}`
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Conta>(this.API)
  }
  movimentar(movimento: Conta):Observable<Conta>{
    return this.http.put<Conta>(this.API, movimento)
  }
}
