import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  name:string;
  maternalSurname:string;
  paternalSurname:string;
  email:string;
  password:string;
  mensaje:string;
  CreacionFallo=false;
  constructor (private usersService:UsersService) {
    this.name=""
    this.maternalSurname=""
    this.paternalSurname=""
    this.email=""
    this.password=""
    this.mensaje=""
  }
  
  create(){this.usersService.createUser(this.name, this.maternalSurname,this.paternalSurname,this.email,this.password).subscribe((respuesta:any )=> {
    console.log("usuarioCreado")
  }, (error: any) => {
    console.log(error)
    this.mensaje="Email y/o Contraseña incorrectas intente de nuevo"
    this.CreacionFallo=true
  });
}
}
