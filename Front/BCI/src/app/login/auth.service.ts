import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:4200/WebTrabalhoAlmir/login";
  public autenticado: Usuario = new Usuario()
  constructor(private httpClient: HttpClient) { }

  loginUsuario(usuario: Usuario):Observable<Usuario>{
    console.log(usuario);
    return this.httpClient.post<Usuario>(`${this.baseUrl}`, usuario);
  }
}
