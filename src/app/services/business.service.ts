import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TokenService } from './token.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private httpClient:HttpClient, private tokenService:TokenService) { }

  allBusiness ():Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.tokenService.consultar("Token")}`)
      .set('Content-Type', 'application/json');
    return this.httpClient.get<any[]>("http://localhost:8080/business", {headers:headers}).pipe(map(response => response));
  }

}
