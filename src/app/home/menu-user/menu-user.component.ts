import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit{
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
      this.points = respuesta.points
      this.email= respuesta.email
    }, (error: any) => {
      console.log("fallo")
    });
  }
}
