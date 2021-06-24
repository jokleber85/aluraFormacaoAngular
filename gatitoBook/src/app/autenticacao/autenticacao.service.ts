import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

/* APENAS O BODY DA REQUISIÇÃO
  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    })
  } */

//HEADER E O BODY DA REQUISIÇÃO,
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
    { observe: 'response'}
    ).pipe(
      tap((res) => {

        const authToken = res.headers.get('x-access-token')?? 'token';
        this.usuarioService.salvarToken(authToken);
      })
    )
  }
}
