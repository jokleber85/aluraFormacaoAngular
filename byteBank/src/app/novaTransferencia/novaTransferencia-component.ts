import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferenciaService';

@Component({
  selector: 'app-novaTransferencia',
  templateUrl: './novaTransferencia-component.html',
  styleUrls: ['./novaTransferencia-component.scss'],
})

export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')  
      },(error) => console.error(error)
    )
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
