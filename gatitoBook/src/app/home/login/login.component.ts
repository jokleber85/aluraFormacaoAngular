import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    //console.log(`Usuário: ${this.usuario} e Senha: ${this.senha}`);
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      console.log("Autenticado com sucesso");
    }, (error) => {
      alert("Usuário ou senha inválido");
      console.log(error);
      this.router.navigate(['animais']); // essa rota era para "Autenticado com sucesso", mas o servidor com dados de login esta corrompido
    });
  }

}
