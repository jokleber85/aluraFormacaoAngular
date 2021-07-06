import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { AcoesComponent } from './acoes.component';
import { Acao, AcoesAPI } from './modelo/acoes';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpClient: HttpClient) { }

/*getAcoes(){
    return this.httpClient
      .get<AcoesAPI>('http://localhost:3000/acoes')
      .pipe(
        tap((valor) => console.log(valor)),
        pluck('payload'), // map((api) => api.payload),
        map((acoes) =>
          acoes.sort((acaoA, acaoB) =>
            this.ordenaPorCodigo(acaoA, acaoB))
          )
      );
  } */

  getAcoes(valor?: string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<AcoesAPI>('http://localhost:3000/acoes', { params })
      .pipe(
        tap((valor) => console.log(valor)),
        pluck('payload'), // map((api) => api.payload),
        map((acoes) =>
          acoes.sort((acaoA, acaoB) =>
            this.ordenaPorCodigo(acaoA, acaoB))
          )
      );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao){
    if (acaoA.codigo > acaoB.codigo){
      return 1;
    }

    if (acaoB.codigo > acaoA.codigo){
      return -1;
    }

    return 0;
  }
}
