import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AvionService {
  apiURL: string = 'http://localhost:8085/avions/api/all';

  avions!: Avion[]; 
  //un tableau de avions
  //TypeAvs : TypeAv[];

  constructor(private http: HttpClient) {}


  listeAvion(): Observable<Avion[]> {
    return this.http.get<Avion[]>(this.apiURL);
  }
}
