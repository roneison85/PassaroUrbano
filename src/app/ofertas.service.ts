import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas() : Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
        .toPromise()
        .then((resposta : any) => resposta);
    }

    public getOfertasByCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise()
        .then((resposta : any) => resposta);
    }
    
    public getOfertasById(id: number) : Promise<Oferta> {
        return this.http.get(`${URL_API}/?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0];
        })
    }
 }