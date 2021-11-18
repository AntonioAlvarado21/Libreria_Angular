import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interface/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiURL='http://localhost:3000/libros';
  constructor(private http: HttpClient) { }

  getLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.apiURL);
  }
}
