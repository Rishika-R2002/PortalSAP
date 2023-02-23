import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormBuilder } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-vendor-debit',
  templateUrl: './vendor-debit.component.html',
  styleUrls: ['./vendor-debit.component.css']
})
export class VendorDebitComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private sd: FormBuilder) { } 
  inUrl: string = 'http://localhost:3000/vendor-debit';
  data: any;
  len: any;
  BELNR: any;

  ngOnInit(): any {
    var a = localStorage.getItem("USERID")
    console.log(a);
    return this.http.post(this.inUrl, { 
        USERID: a 
    }).subscribe(response => {
        this.data = JSON.parse(JSON.stringify(response));
        this.len = this.data.length;
        console.log(this.data)
    });
  }

  downloadPdf() {
    const doc = new jsPDF();
    const pdfName = 'example.pdf';
    let content = document.getElementById('table1') as HTMLElement;

    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save(pdfName);
    });

}

Search() {

  if(this.BELNR == "")
  
  {
  
    this.ngOnInit();
  
  }
  
  else{
  
    this.data = this.data.filter((res: { BELNR: string; }) =>{
  
      return res.BELNR.toLocaleLowerCase().match(this.BELNR.toLocaleLowerCase());
  
    })
  
  }
  
  }
}
