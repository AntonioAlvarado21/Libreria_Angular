import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../interfaces/clientes.interface";

@Injectable({
  providedIn: 'root'
})

export class DataService{
  private apiURL='http://localhost:3000';
  constructor(private http:HttpClient) {}

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiURL}/clientes`)
  }
}
