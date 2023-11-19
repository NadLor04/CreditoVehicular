import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Entidad } from '../model/entidad';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  basePath: string = environment.entidadPath;
  entidad!: Entidad;
  entidad$!: Subject<Entidad>;

  constructor(private http: HttpClient) {
    this.entidad$ = new Subject<Entidad>();
  }

  getEntidades() {
    return this.http.get<Entidad[]>(this.basePath);
  }
  addEntidad(user: Entidad) {
    return this.http.post<Entidad>(this.basePath, user);
  }
  getEntidadById(id: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.basePath}/${id}`);
  }
  
}