import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string;
  password:string;
  mensaje:string;
  LoginFallo=false;
  constructor (private usersService:UsersService,private tokenService:TokenService, public router: Router) {
    this.email=""
    this.password=""
    this.mensaje=""
  }
  login() {
    this.usersService.Login(this.email, this.password).subscribe((respuesta:any )=> {
      console.log("Se guarda el token en localStorage");
      this.tokenService.almacenar("Token",respuesta.body.Token);
      const role = this.tokenService.getRole();
      console.log(role)
      if (role=="ROLE_ADMIN"){
        window.location.reload();
        this.router.navigateByUrl('/home-admin', { replaceUrl: true }).then(() => {
          window.location.reload();
        });
      }
      else if (role=="ROLE_USER"){
        this.router.navigateByUrl('/home-user', { replaceUrl: true }).then(() => {
          window.location.reload();
        });
      }
      else if (role=="ROLE_BUSINESS"){
        this.router.navigateByUrl('/home-business', { replaceUrl: true }).then(() => {
          window.location.reload();
        });
      }
      else{
        this.router.navigateByUrl('/home', { replaceUrl: true }).then(() => {
          window.location.reload();
        });
      }
    }, (error: any) => {
      this.mensaje="Email y/o Contraseña incorrectas intente de nuevo"
      this.LoginFallo=true
    });
  }
}
