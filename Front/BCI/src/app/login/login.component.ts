import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario()
  public autenticado: boolean = false
  public userId!: number;
  

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {

  }
  fazerLogin() {
    console.log(this.usuario);
    this.authservice.loginUsuario(this.usuario).subscribe(data => {
      this.usuario
      this.userId = this.usuario.id;
      alert("Logado com sucesso.");
      localStorage.setItem('clienteId', ''+this.userId);
      this.autenticado = true;
      this.router.navigate(['/conta'])
    }, error => alert("Falha no login!"))
  }

}
