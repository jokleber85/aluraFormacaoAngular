import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferenciaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'byteBank';
//transferencias: any[] = []; // valor: number; destino: number;

  constructor(private service: TransferenciaService){}
}
