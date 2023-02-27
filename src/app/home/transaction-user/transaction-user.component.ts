import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-user',
  templateUrl: './transaction-user.component.html',
  styleUrls: ['./transaction-user.component.css']
})
export class TransactionUserComponent implements OnInit{
  transactions: any[] = [];
  transactionsFiltradas: any[] = [];
  options = ['Todas', 'Obtenidos', 'Gastados'] 
  filtro: string = 'Todas';
  constructor (private transactionsService:TransactionsService) {
    this.filtro = 'Todas'
  }

  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions() {
    this.transactionsService.allTransactionUser().subscribe(response => {
      this.transactions = response;
      this.transactionsFiltradas = response;
    });
  }
  
  applyFilter(): void {
    if (this.filtro === 'Obtenidos') {
      this.transactionsFiltradas = this.transactions.filter(transaction=> transaction.points > 0);
    }else if (this.filtro === 'Gastados') {
      this.transactionsFiltradas = this.transactions.filter(transaction=> transaction.points < 0);
    }else if (this.filtro === 'Todas'){
      this.transactionsFiltradas = this.transactions;
    }
  }

}
