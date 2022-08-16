import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

constructor(private router :Router) { }
saveToken(token :string){

localStorage.setItem('token',token)
this.router.navigate(['/client/liste'])
}
isConnect():boolean{
  const token =localStorage.getItem(' token')
  console.log(token)
  return !! token
}
  getToken(): any{
    const token = localStorage.getItem('token')
    return token
  }
}