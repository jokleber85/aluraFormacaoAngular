import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input()
  mensagem = "" // interpolação {{ mensagem }} mensagem.component.html 

  constructor() { }

  ngOnInit(): void {
  }

}
