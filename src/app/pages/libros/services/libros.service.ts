import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details, DetailsOrder, Ordenes } from 'src/app/shared/components/header/interfaces/ordenes.interface';
import { Libro } from '../interface/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiURL='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getLibros():Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.apiURL}/libros`);
  }

  updateStock(id:number, stock: number):Observable<any>{
    const body = {"stock":stock};
    return this.http.patch<any>(`${this.apiURL}/libros/${id}`,body)
  }

  ////////
  getOrders():Observable<Ordenes[]>{
    return this.http.get<Ordenes[]>(`${this.apiURL}/ordenes`);
  }

  getDetails():Observable<DetailsOrder[]>{
    return this.http.get<DetailsOrder[]>(`${this.apiURL}/detailsOrders`);
  }

  getDet():Observable<Details[]>{
    return this.http.get<Details[]>(`${this.apiURL}/detailsOrders`);
  }


}
