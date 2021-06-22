import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferenciaService';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    //this.transferencias = this.service.transferencias;
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
