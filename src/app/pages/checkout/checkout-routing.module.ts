import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [{ path: '', component: CheckoutComponent }, { path: 'detalle-pedido', loadChildren: () => import('./detalle-pedido/detalle-pedido.module').then(m => m.DetallePedidoModule) }, { path: 'gracias', loadChildren: () => import('./gracias/gracias.module').then(m => m.GraciasModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
