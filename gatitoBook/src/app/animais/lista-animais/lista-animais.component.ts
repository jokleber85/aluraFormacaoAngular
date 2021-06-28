import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;
  //animais$!: Observable<Animais>; alterado por add o resolve

/*Alterado por add o resolve
  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService) { }*/

  constructor( private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
/*  this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      })
    }); */ 

/*  perdeu a função por conta do resolve
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    ) */

    this.activatedRoute.params.subscribe((params) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }

}
