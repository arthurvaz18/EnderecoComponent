import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IbgeServiceService {

  private baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private http: HttpClient) {}

  getEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/estados`);
  }

  getCidadesPorEstado(estadoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/estados/${estadoId}/municipios`);
  }

}
