import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallePedidoRoutingModule } from './detalle-pedido-routing.module';
import { DetallePedidoComponent } from './detalle-pedido.component';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    DetallePedidoRoutingModule,
    MaterialModule
  ]
})
export class DetallePedidoModule { }
