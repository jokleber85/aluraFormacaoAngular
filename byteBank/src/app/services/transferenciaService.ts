import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia)
    //this.listaTransferencia.push(transferencia); // this.valor = $event.valor, this.destino = $event.destino
  }

  private hidratar(transferencia: any){
     transferencia.data = new Date();
  }
}
