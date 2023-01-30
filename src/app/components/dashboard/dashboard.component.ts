import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router, private http:HttpClient,private sd:FormBuilder) { }

  salesdocno : any;
  crtDate:any;
  crtBy:any;
  docDate:any;


  ngOnInit(): void {
  }

}
