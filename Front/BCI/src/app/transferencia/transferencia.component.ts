import { Component, OnInit } from '@angular/core';
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

  transferenciasRecebidas = transferenciasRecebidas;
  transferenciasEnviadas = transferenciasEnviadas;
  transferencias: Transferencias = new Transferencias();

  constructor(private service: TranferenciaService) {

  }
  ngOnInit(): void {
    this.service.list().subscribe(dados => this.transferencias);
    this.transferenciasEnviadas = this.transferencias.transferenciasEnviadas;
    this.transferenciasRecebidas = this.transferencias.transferenciasRecebidas;
  }
}
