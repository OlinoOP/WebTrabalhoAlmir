import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from './cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  id = localStorage.getItem('clienteId')
  private readonly API = `http://localhost:4200/WebTrabalhoAlmir/cartao/${this.id}`
  private readonly API2 = `http://localhost:4200/WebTrabalhoAlmir/cartao/pagarfatura/${this.id}`
  constructor(private http: HttpClient) { }
  list(){
    return this.http.get<Cartao>(this.API)
  }
  pagarFatura(cartao: Cartao){
    return this.http.put<Cartao>(this.API2, cartao)
  }
  comprar(cartao: Cartao, valor:number):Observable<Cartao>{
    cartao.fatura+valor;
    return this.http.put<Cartao>(this.API, cartao)
  }
}
