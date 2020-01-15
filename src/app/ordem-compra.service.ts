import { Pedido } from './shared/pedido.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient){}

  public efetivarCompra(pedido: Pedido) : Observable<any> {

    let options = {
      headers: new HttpHeaders().append('Content-type', 'application/json')
    }

    return this.http.post(
        `${URL_API}/pedidos`, 
        JSON.stringify(pedido),
        options
      )
  }
}
