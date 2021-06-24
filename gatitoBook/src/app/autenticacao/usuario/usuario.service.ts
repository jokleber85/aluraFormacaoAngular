import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuirToken()){
      this.decodificarJWT();
    }
   }

  private decodificarJWT(){

    const token = this.tokenService.retornarToken();

    const usuario = jwt_decode(token) as Usuario;

    this.usuarioSubject.next(usuario);
  }

  retornarUsuario(){

    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string){

    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){

    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  estarLogado(){

    return this.tokenService.possuirToken();
  }
}
