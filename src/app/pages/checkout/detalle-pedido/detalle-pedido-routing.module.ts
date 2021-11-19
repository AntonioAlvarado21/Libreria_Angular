import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePedidoComponent } from './detalle-pedido.component';

const routes: Routes = [{ path: '', component: DetallePedidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePedidoRoutingModule { }
