import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private sd: FormBuilder) { } 
  loginForm = this.sd.group({ email: [''], password: [''] }) 
   ngOnInit(): void { } 
  inUrl:string = 'http://localhost:3000/vendor-login'; data: any; 
  log() { 
  this.login(this.loginForm.value.email, 
  this.loginForm.value.password) 
  } 
  login(userid: any, password: any) { 
    console.log(userid);
  return this.http.post(this.inUrl, 
  { USERID: userid, PASSWORD: password }).subscribe( response => 
    
    { this.data = JSON.parse(JSON.stringify(response)); 
      console.log(response);
  var result = this.data; 
  if(result === '"0"') { 
    alert("Logged Successfully");
    localStorage.setItem("USERID",userid);
    var v = localStorage.getItem("USERID");
    console.log(v);
  this.router.navigate(['/vendor-profile']); 
  } else { alert("Something is wrong!!"); } } ); }

}
