import { Component, OnInit } from '@angular/core';
import { Conta } from './conta';
import { ContaService } from './conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit{
  conta: Conta = new Conta();
  movimento: Conta = new Conta();
  sacar: Boolean = false;
  valor!: number;
  constructor(private service:ContaService){

  }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.conta)
  }

  movimentar(){
    this.movimento.numeroConta = this.conta.numeroConta;
      this.movimento.titular = this.conta.titular;
    if(this.sacar){
      this.movimento.saldo=this.conta.saldo-this.valor;
    } else {
      this.movimento.saldo=this.conta.saldo+this.valor;
    }
    this.service.movimentar(this.movimento).subscribe(data=>{
      alert("Movimentação feita com sucesso.")
    },error=>alert("Falha ao realizar movimentação"));
  }

}
