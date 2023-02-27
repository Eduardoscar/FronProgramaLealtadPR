import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient, private tokenService:TokenService) { }

  Login(email:string,password:string): Observable<any> {
    return this.httpClient.post("http://localhost:8080/login",
    {
      "email": email,
      "password":password
    }, {observe: 'response'})
  }

  perfil ():Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.tokenService.consultar("Token")}`)
      .set('Content-Type', 'application/json');
    const id = this.tokenService.getId();
    return this.httpClient.get("http://localhost:8080/users/"+ id, {headers:headers})
  }

  allUsers ():Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.tokenService.consultar("Token")}`)
      .set('Content-Type', 'application/json');
    return this.httpClient.get("http://localhost:8080/users", {headers:headers})
  }

  createUser (name:string,maternalSurname:string,paternalSurname:string,email:string,password:string):Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.post("http://localhost:8080/users",
    {
      "name": name,
      "maternalSurname": maternalSurname,
      "paternalSurname": paternalSurname,
      "email": email,
      "password":password
  },{headers:headers})
  }

}
