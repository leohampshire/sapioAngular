import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  private _valor: number;
  private _destino: number;

  constructor() {
    this._valor = 0;
    this._destino = 0;
  }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }


  get valor(): number {
    return this._valor;
  }

  set valor(value: number) {
    this._valor = value;
  }

  get destino(): number {
    return this._destino;
  }

  set destino(value: number) {
    this._destino = value;
  }

}
