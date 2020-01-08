import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertaService.getOfertasById(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
    })
    
    /*let tempo = interval(500);
    tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })*/

    let meuObservador = Observable.create((observer: Observer<string>) => {
      observer.next('Primeiro evento da stream');
      observer.next('Segundo evento da stream');
    })

    meuObservador.subscribe((resultado: any) => console.log(resultado));
  }

}
