import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DadosTransferencia } from './dadosTransferencia';
import { TranferenciaService } from './transferencia.service';
import { Transferencias } from './transferencias';


var transferenciasRecebidas: DadosTransferencia[];
var transferenciasEnviadas: DadosTransferencia[]; 


@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  novaTranferencia: DadosTransferencia = new DadosTransferencia();
  numeroConta!: number;
  transferenciasRecebidas = transferenciasRecebidas;
  transferenciasEnviadas = transferenciasEnviadas;
  transferencias: Transferencias = new Transferencias();

  constructor(private service: TranferenciaService) {

  }
  criarNovaTransferencia(){
    this.novaTranferencia.contaOrigem = this.numeroConta;
    console.log(this.novaTranferencia)
    this.service.novaTransferencia(this.novaTranferencia).subscribe(data=>{
      alert("Nova transferencia realizada com sucesso.")
    },error=>alert("Falha ao criar nova tranferencia!"));
  }
  ngOnInit(): void {
    this.service.list().subscribe(dados => this.transferencias);
    this.transferenciasEnviadas = this.transferencias.transferenciasEnviadas;
    this.transferenciasRecebidas = this.transferencias.transferenciasRecebidas;
    this.numeroConta = this.transferencias.numeroConta;
  }
}
