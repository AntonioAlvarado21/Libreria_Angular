import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Cliente } from 'src/app/shared/components/header/interfaces/clientes.interface';
import { DataService } from 'src/app/shared/components/header/services/data.service';

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

  clientes: Cliente[] = [ ]
  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  tipoCliente(value:boolean):void{
    console.log(value);
  }

  onSubmit():void{
    console.log('Guardar')
  }

  getClientes():void{
    this.dataSvc.getClientes()
    .pipe(
      tap((clientes:Cliente[]) => this.clientes = clientes))
    .subscribe()
  }

}
