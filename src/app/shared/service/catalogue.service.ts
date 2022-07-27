import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Catalogue } from '../models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private apiCatalogue="http://localhost:8000/api/catalogues"

  constructor(private http:HttpClient) { }
  getCatalogue():Observable<Catalogue> {
    return this.http.get<Catalogue>(this.apiCatalogue).pipe(
      // tap(console.log)
      map(
        data => {
          data.produit = [...data.menu,...data.burger]
          return data
         }
       )
    )
    
  }
}
