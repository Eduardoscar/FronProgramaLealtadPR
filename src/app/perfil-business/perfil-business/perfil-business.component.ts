import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil-business',
  templateUrl: './perfil-business.component.html',
  styleUrls: ['./perfil-business.component.css']
})
export class PerfilBusinessComponent implements OnInit{
  name_business:String='';
  name:String ="";
  birthday:String ="";
  points:number=0;
  email:String="";

  ngOnInit(): void {
    this.info()
  }
  constructor(private userService:UsersService){}

  info(){
    this.userService.perfil().subscribe((respuesta:any )=> {
      this.name = respuesta.name + ' '+ respuesta.paternalSurname + ' ' + respuesta.maternalSurname
      this.birthday = new Date(respuesta.birthday).toISOString().substring(0, 10);
      this.name_business = respuesta.name_business
      this.email= respuesta.email
    }, (error: any) => {
      console.log("fallo")
    });
  }
}
