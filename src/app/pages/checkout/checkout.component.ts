import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model = {
    name:'Default',
    store: '',
    delegacion: '',
    estado: ''
  };

  clientes = [
    {
      id: 1,
      nombre: 'Moderna',
      estado: 'CDMX'
    },
    {
      id: 2,
      nombre: 'Kaiser',
      estado: 'CDMX'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  tipoCliente(value:boolean):void{
    console.log(value);
  }

}
