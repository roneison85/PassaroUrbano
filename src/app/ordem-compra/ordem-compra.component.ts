import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import CarrinhoService from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;
  public itensCarrinho: ItemCarrinho[] = [];

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(60) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.maxLength(20) ]),
    'complemento': new FormControl(null, [ Validators.maxLength(60) ]),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    console.log(this.itensCarrinho);
  }

  public confirmarCompra(): void {
    if(this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched(),
      this.formulario.get('numero').markAsTouched(),
      this.formulario.get('complemento').markAsTouched(),
      this.formulario.get('formaPagamento').markAsTouched()
    }else {

      if(this.carrinhoService.exibirItens().length === 0){
        alert('Você não selecionou nenhum item!');
      }else{
        let pedido: Pedido = new Pedido(
          null,
          this.formulario.get('endereco').value,
          this.formulario.get('numero').value,
          this.formulario.get('complemento').value,
          this.formulario.get('formaPagamento').value,
          this.carrinhoService.exibirItens()
        )
        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((pedido: Pedido) => {
            this.idPedidoCompra = pedido.id;
            this.carrinhoService.limparCarrinho();
          })
      }
    }
  }

  adicionarQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  diminuirQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
  }

}
