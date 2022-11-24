import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from './registroUsuario';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  registroUsuario: RegistroUsuario = new RegistroUsuario()
  
  constructor(private registroService: RegistroService){

  }
  ngOnInit(): void {
   
  }
  fazerRegistro(){
    if(!(this.registroUsuario.nome==null||this.registroUsuario.senha==null||this.registroUsuario.email==null||this.registroUsuario.telefone==null||this.registroUsuario.endereco==null)){
    console.log(this.registroUsuario)
    this.registroService.registrarUsuario(this.registroUsuario).subscribe(data=>{
      alert("Usuario registrado com sucesso!")
    },error=>alert("Falha ao registrar usuario"));
    }
  }

}
