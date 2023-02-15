import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {

  constructor(private router : Router, private http:HttpClient,private sd:FormBuilder) { }

  showFiller = true;
  CustId:any;
  Name:any;
  CountryKey:any;
  Address:any;
  District:any;
  Street:any;
  Pc:any;
  
  result:any;
  inUrl:string = 'http://localhost:3000/vendor-profile'; 
  data:any;

  ngOnInit(): any{ 
    var a=localStorage.getItem("USERID")
      console.log(a);
    return this.http.post(this.inUrl,{
      
      USERID : a
      
      }).subscribe(response =>{
        
      this.data=JSON.parse(JSON.stringify(response));
       this.CustId = this.data["LIFNR"];
       this.Name = this.data["NAME1"];
       this.CountryKey = this.data["LAND1"];
       this.Address = this.data["ADRNR"];
       this.District = this.data["ORT01"];
       this.Street = this.data["STRAS"];
       this.Pc = this.data["PSTLZ"]
       
       console.log(this.Address)
// console.log(this.Name);
      

   var result=this.data;
  //  console.log(result["NAME"]); 
  });
  
}

}
