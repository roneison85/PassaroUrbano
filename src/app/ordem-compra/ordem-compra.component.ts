import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: number;
  public complemento: string = '';
  public formaPagamento: string = '';

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    console.log('Endereco: ', endereco);
    this.endereco = endereco;
  }

  public atualizaNumero(numero: number): void {
    console.log('Numero: ', numero);
    this.numero = numero;
  }

  public atualizaComplemento(complemento: string): void {
    console.log('Complemento: ', complemento);
    this.complemento = complemento;
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    console.log('Forma de Pagamento: ', formaPagamento);
    this.formaPagamento = formaPagamento;
  }

}
