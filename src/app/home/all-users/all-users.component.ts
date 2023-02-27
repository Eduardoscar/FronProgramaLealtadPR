import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  all:any;
  ngOnInit(): void {
    this.allUsers()
  }
  constructor(private userService:UsersService){}

  allUsers(){
    this.userService.allUsers().subscribe((respuesta:any )=> {
      this.all=respuesta;
    }, (error: any) => {
      console.log("fallo")
    });
  }
}
