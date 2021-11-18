import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Libro } from "src/app/pages/libros/interface/libro.interface";

@Injectable({
    providedIn: 'root'
})

export class ShoppingCartService{
    libros: Libro[] = [];

    private nomLibro = new Subject<Libro[]>();
    private totalLibro = new Subject<number>();
    private cantidadLibro = new Subject<number>();


    get totalAction$():Observable<number>{
        return this.totalLibro.asObservable();
    }

    get quantityAction$():Observable<number>{
        return this.cantidadLibro.asObservable();
    }
    
    get cartAction$():Observable<Libro[]>{
        return this.nomLibro.asObservable();
    }

    updateCart(libro: Libro):void{
        this.addToCart(libro);
        this.quantityProducts();
        this.calcTotal();
    }


    private addToCart(libro: Libro):void{
        this.libros.push(libro);
        this.nomLibro.next(this.libros);
    }

    private quantityProducts():void{
        const quantity = this.libros.length;
        this.cantidadLibro.next(quantity);
    }

    private calcTotal(): void{
        const total = this.libros.reduce((acc,lib) => acc+=lib.precio,0);
        this.totalLibro.next(total);
    }

}