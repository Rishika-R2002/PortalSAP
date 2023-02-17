import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private router : Router, private http:HttpClient,private sd:FormBuilder) { }

  showFiller = true;
  PersonNo:any;
  EmpName:any;
  OrgUnit:any;
  OrgName:any;
  Dob:any;
  PostalCode:any;
  District:any;
  StreetAddr:any;
  Country:any;
  TelphoneNum:any;
  
  result:any;
  inUrl:string = 'http://localhost:3000/employee-profile'; 
  data:any;

  ngOnInit(): any{ 
    var a=localStorage.getItem("USERID")
      console.log(a);
    return this.http.post(this.inUrl,{
      
      USERID : a
      
      }).subscribe(response =>{
        
      this.data=JSON.parse(JSON.stringify(response));
       this.PersonNo = this.data["PERNR"];
       this.EmpName = this.data["ENAME"];
       this.OrgUnit = this.data["ORGEH"];
       this.OrgName = this.data["ORGEH_TXT"];
       this.Dob = this.data["GBDAT"];
       this.PostalCode = this.data["PSTLZ"];
       this.District = this.data["ORT01"];
       this.StreetAddr = this.data["STRAS"];
       this.Country = this.data["LAND"];
       this.TelphoneNum = this.data["TELNR"];
       
      //  console.log(this.Address)
// console.log(this.Name);
      

   var result=this.data;
  //  console.log(result["NAME"]); 
  });
  
}

}
