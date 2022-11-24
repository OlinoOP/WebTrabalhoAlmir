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
  constructor(private service:ContaService){

  }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.conta)
  }

}
