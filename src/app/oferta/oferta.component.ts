import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  
  public oferta: Oferta;

  constructor(
    public route: ActivatedRoute,
    public ofertaService: OfertasService,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertaService.getOfertasById(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
      })
    })
    
  }

  public adicionarOfertaCarrinho() {
    this.carrinhoService.incluirItem(this.oferta);
  }

}
