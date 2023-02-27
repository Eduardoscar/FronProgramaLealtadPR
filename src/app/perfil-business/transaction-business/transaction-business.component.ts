import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-business',
  templateUrl: './transaction-business.component.html',
  styleUrls: ['./transaction-business.component.css']
})
export class TransactionBusinessComponent implements OnInit {
  transactions: any[] = [];
  PointsGenerados:number= 0;
  PointsCanjeados:number=0;
  transactionsFiltradas: any[] = [];
  options = ['Todas', 'Generados', 'Canjeados'] 
  filtro: string = 'Todas';
  constructor (private transactionsService:TransactionsService) {
    this.filtro = 'Todas'
  }

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions() {
    this.transactionsService.allTransactionBusiness().subscribe(response => {
      this.transactions = response;
      this.transactionsFiltradas = response;
      this.PointsBusiness();
    });
  }
  
  applyFilter(): void {
    if (this.filtro === 'Generados') {
      this.transactionsFiltradas = this.transactions.filter(transaction=> transaction.points > 0);
    }else if (this.filtro === 'Canjeados') {
      this.transactionsFiltradas = this.transactions.filter(transaction=> transaction.points < 0);
    }else if (this.filtro === 'Todas'){
      this.transactionsFiltradas = this.transactions;
    }
  }

  PointsBusiness():void {
    const transaccionesPointsGenerados = this.transactions.filter(transaccion => transaccion.points > 0);
    const transaccionesPointsCanjedos = this.transactions.filter(transaccion => transaccion.points < 0);

    this.PointsGenerados = transaccionesPointsGenerados.reduce((total, transaccion) => total + transaccion.points, 0);
    this.PointsCanjeados = Math.abs(transaccionesPointsCanjedos.reduce((total, transaccion) => total + transaccion.points, 0));
  }

  

}