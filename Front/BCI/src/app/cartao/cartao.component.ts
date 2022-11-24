import { Component, OnInit } from '@angular/core';
import { Cartao } from './cartao';
import { CartaoService } from './cartao.service';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit{
  cartao: Cartao = new Cartao()
  valor!: number;
  constructor(private service: CartaoService){

  }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.cartao)
  }
  pagarFatura(){
    this.service.pagarFatura(this.cartao);
  }
  comprar(){
    this.service.comprar(this.cartao, this.valor);
  }

}
