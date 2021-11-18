import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Libro } from '../interface/libro.interface';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  @Input() libro!:Libro
  @Output() addToCartClick = new EventEmitter<Libro>();


  onClick(): void{
    this.addToCartClick.emit(this.libro);
  }

}
