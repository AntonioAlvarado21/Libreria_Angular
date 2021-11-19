import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallePedidoRoutingModule } from './detalle-pedido-routing.module';
import { DetallePedidoComponent } from './detalle-pedido.component';


@NgModule({
  declarations: [
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    DetallePedidoRoutingModule
  ]
})
export class DetallePedidoModule { }
