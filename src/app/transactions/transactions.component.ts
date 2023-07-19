import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToasterService } from '../services/toaster.service';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  searchKey:string=""
  allTransactions:any=[]
  constructor(private api:ApiService,private toaster:ToasterService){}

  ngOnInit(): void {
    this.api.transactions().subscribe({
      next:(response:any)=>{
        this.allTransactions = response
        console.log(this.allTransactions);
      },
      error:(err:any)=>{
        this.toaster.showError(err.error,"Fail")
      }
    })
  }

  generatePDF(){
    let pdf = new jspdf()
    pdf.setFontSize(16)
    pdf.text("Mini Statement",10,10)
    autoTable(pdf, { html: '#transactionHistory' })
    pdf.output('dataurlnewwindow')
    pdf.save('ministatement.pdf')
  }

}
