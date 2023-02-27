import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent {
  points!: number;
  email_user:string;
  mensaje:string;
  CreacionFallo=false;
  CreacionExitosa=false;
  constructor (private transactionsService:TransactionsService) {
    this.email_user=""
    this.mensaje=""
  }
  
  register(){
    this.transactionsService.saveTransaction(this.email_user, this.points).subscribe((respuesta:any )=> {
      this.mensaje = "Compra registrada"
      this.CreacionExitosa = true;
      setTimeout(() => {
        this.CreacionExitosa = false;
        this.mensaje = ""
        this.email_user=""
        this.points=0
      }, 7000);
  }, (error: any) => {
    this.mensaje=error.error.message
    this.CreacionFallo = true;
    setTimeout(() => {
      this.CreacionFallo = false;
      this.mensaje = ""
      this.points=0
    }, 7000);
  });
}
}
