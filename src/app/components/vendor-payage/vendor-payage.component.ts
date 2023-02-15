import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendor-payage',
  templateUrl: './vendor-payage.component.html',
  styleUrls: ['./vendor-payage.component.css']
})
export class VendorPayageComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private sd: FormBuilder) { } 
  inUrl: string = 'http://localhost:3000/vendor-payage';
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
