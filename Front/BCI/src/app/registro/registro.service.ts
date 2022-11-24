import { Injectable } from '@angular/core';
import { RegistroUsuario } from './registroUsuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseUrl="http://localhost:4200/WebTrabalhoAlmir/registro";
  constructor(private httpClient: HttpClient) { }

  registrarUsuario(usuario: RegistroUsuario):Observable<object>{
    console.log(usuario);
    return this.httpClient.post<RegistroUsuario>('${this.baseUrl}', usuario);
  }
}
