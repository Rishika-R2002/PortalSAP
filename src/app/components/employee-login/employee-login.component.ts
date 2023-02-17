import { Component, OnInit, ɵgetUnknownElementStrictMode  } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private sd: FormBuilder) { } 
  loginForm = this.sd.group({ email: [''], password: [''] }) 
   ngOnInit(): void { } 
  inUrl:string = 'http://localhost:3000/employee-login'; data: any; 
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
  this.router.navigate(['/employee-profile']); 
  } else { alert("Something is wrong!!"); } } ); }

}
