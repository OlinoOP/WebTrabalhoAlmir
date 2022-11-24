import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosTransferencia } from './dadosTransferencia';
import { Transferencias } from './transferencias';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {
  id = localStorage.getItem('clienteId')
  private readonly API = `http://localhost:4200/WebTrabalhoAlmir/transferencia/${this.id}`
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Transferencias>(this.API);
  }
  novaTransferencia(novaTransferencia:DadosTransferencia):Observable<DadosTransferencia>{
    return this.http.post<DadosTransferencia>(this.API, novaTransferencia)
  }
}
