import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Proyecto_Angular';
  isExistToken: boolean = false;
  rutaPerfil: string ='';
  rutaActual: string = '';

  constructor(private tokenService:TokenService, private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
    });
    this.isExistToken = this.tokenService.isExistToken();
    if (this.isExistToken) this.getRutaPerfil()
  
  }

  getRutaPerfil(){
    let role = this.tokenService.getRole()
    if (role=="ROLE_ADMIN"){
      this.rutaPerfil= '/home-admin';
    }
    else if (role=="ROLE_BUSINESS"){
      this.rutaPerfil= '/home-business';
    }
    else{
      this.rutaPerfil= '/home-user';
    }
   }

   logout(){
    this.tokenService.borrar("Token")
   }

}
