import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

// 0import { Acoes } from './modelo/acoes';
import { AcoesService } from './acoes.service';
// import { Subscription } from 'rxjs';

const ESPERA_DIGITACAO = 300;
@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent { // implements OnInit, OnDestroy
  acoesInput = new FormControl();

  todaAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => {console.log('Fluxo Inicial'); }));

  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    tap(() => {console.log('Fluxo do Filtro'); }),
    tap(console.log),
    filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );

  acoes$ = merge(this.todaAcoes$, this.filtroPeloInput$);

/*acoes$ = this.acoesInput.valueChanges
    .pipe(
      tap(console.log),
      switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
      tap(console.log)
    ); // this.acoesService.getAcoes(); /*acoes: Acoes; private subscription: Subscription; */

  constructor(private acoesService: AcoesService) { }

/*ngOnInit(){
    this.subscription = this.acoesService.getAcoes()
      .subscribe((acoes) => {
        this.acoes = acoes;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  } */
}
