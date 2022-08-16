import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Details } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private apiDetails="http://localhost:8000/api/details/"

  constructor(private http: HttpClient) { }

  getDatails(id:number): Observable<any>{
    return this.http.get<any>(this.apiDetails+ id).pipe(
      map(
        data => {

    
        return data
        

      })
    
  )
}

}
