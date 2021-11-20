import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
{ path: 'gracias', loadChildren: () => import('./gracias/gracias.module').then(m => m.GraciasModule) },
{ path: 'detalle-pedido', loadChildren: () => import('./detalle-pedido/detalle-pedido.module').then(m => m.DetallePedidoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
