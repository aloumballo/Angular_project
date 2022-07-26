import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private apiCatalogue="http://localhost:8000/api/catalogues"

  constructor(private http:HttpClient) { }
  getCatalogue():Observable<any> {
    return this.http.get<any>(this.apiCatalogue)
  }
}
