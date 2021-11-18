import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Libro } from './interface/libro.interface';
import { LibrosService } from './services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros!:Libro[];
  constructor(private librosSvc: LibrosService) { }

  ngOnInit(): void {

    this.librosSvc.getLibros()
    .pipe(
      tap((libros: Libro[]) => this.libros = libros)
    )
    .subscribe();

  }

}
