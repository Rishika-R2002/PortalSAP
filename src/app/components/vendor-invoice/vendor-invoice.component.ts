import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendor-invoice',
  templateUrl: './vendor-invoice.component.html',
  styleUrls: ['./vendor-invoice.component.css']
})
export class VendorInvoiceComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private sd: FormBuilder) { } 
  inUrl: string = 'http://localhost:3000/vendor-inv';
  data: any;

  ngOnInit(): any {
    var a = localStorage.getItem("USERID")
    console.log(a);
    return this.http.post(this.inUrl, { 
        USERID: a 
    }).subscribe(response => {
        this.data = JSON.parse(JSON.stringify(response));
        console.log(this.data)
    });
  }

}