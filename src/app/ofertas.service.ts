import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    public getOfertas() : Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta : any) => resposta);
    }

    public getOfertasByCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta : any) => resposta);
    }
    
    public getOfertasById(id: number) : Promise<Oferta> {
        return this.http.get(`http://localhost:3000/ofertas/?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0];
        })
    }
 }