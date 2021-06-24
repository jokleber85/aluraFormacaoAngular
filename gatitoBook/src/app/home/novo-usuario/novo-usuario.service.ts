import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})

export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){

    return this.httpClient.post("http://localhost.3000/user/signup", novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string){

    return this.httpClient.get(`http://localhost.3000/user/exists/${nomeUsuario}`)
  }
}
