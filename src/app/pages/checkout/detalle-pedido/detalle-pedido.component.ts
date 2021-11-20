import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Details, DetailsOrder, Ordenes } from 'src/app/shared/components/header/interfaces/ordenes.interface';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import { Libro } from '../../libros/interface/libro.interface';
import { LibrosService } from '../../libros/services/libros.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default
})
export class DetallePedidoComponent implements OnInit {
  //@Input() libros!:Libro
  //@Input() detalles!:DetailsOrder
  //@Input() ordenes!:Ordenes

  ordenes!:Ordenes[];
  libros!:Libro[];
  detalles!:DetailsOrder[];
  det !:Details[];

  constructor(private shoppingCartService:ShoppingCartService,private librosSvc:LibrosService) { }

  total$ = this.shoppingCartService.totalAction$;
  cart$ = this.shoppingCartService.cartAction$;
  /////////
  detalles$ = this.shoppingCartService.detalles$;
  detalleAction$ = this.shoppingCartService.detalleAction$;
  ordenes$ = this.shoppingCartService.ordenes$;

  ngOnInit(): void {

    this.librosSvc.getLibros()
    .pipe(
      tap((libros: Libro[]) => this.libros = libros),
    )
    .subscribe();

    this.librosSvc.getOrders()
    .pipe(
      tap((ordenes: Ordenes[]) => this.ordenes = ordenes),
    )
    .subscribe();

    this.librosSvc.getDetails()
    .pipe(
      tap((details: DetailsOrder[]) => this.detalles = details),
    )
    .subscribe();

    this.librosSvc.getDet()
    .pipe(
      tap((deta: Details[]) => this.det = deta),
    )
    .subscribe();

  }


}
