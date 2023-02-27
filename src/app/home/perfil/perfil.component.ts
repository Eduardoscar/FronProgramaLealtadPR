import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  name:String ="";
  maternalSurname:String="";
  paternalSurname:String="";
  email:String="";
  ngOnInit(): void {
    this.info()
  }
  constructor(private userService:UsersService){}

  info(){
    this.userService.perfil().subscribe((respuesta:any )=> {
      this.name = respuesta.name
      this.maternalSurname = respuesta.maternalSurname
      this.paternalSurname= respuesta.paternalSurname
      this.email= respuesta.email
    }, (error: any) => {
      console.log("fallo")
    });
  }
}
