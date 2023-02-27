import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TokenService } from './token.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient:HttpClient, private tokenService:TokenService) { }

  allTransactionUser ():Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.tokenService.consultar("Token")}`)
      .set('Content-Type', 'application/json');
    return this.httpClient.get<any[]>("http://localhost:8080/transactions/user", {headers:headers}).pipe(map(response => response));
  }

  allTransactionBusiness ():Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.tokenService.consultar("Token")}`)
      .set('Content-Type', 'application/json');
    return this.httpClient.get<any[]>("http://localhost:8080/transactions", {headers:headers}).pipe(map(response => response));
  }
  
  saveTransaction(email_user:string,points:number):Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.tokenService.consultar("Token")}`);
    const id_business = this.tokenService.getIdBusiness();
    return this.httpClient.post("http://localhost:8080/transactions",
    {
      "email_user": email_user,
      "points": points,
      "id_business": id_business
  },{headers:headers})
  }
}
