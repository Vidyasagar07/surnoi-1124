import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  fromdate:string="";
  todate:string="";
  typeOfLeave:string = "";
  note:string = "";
  notify:string = "";

  register(){
    let bodyData = {
      "fromdate":this.fromdate,
      "todate":this.todate,
      "typeOfLeave":this.typeOfLeave,
      "note":this.note,
      "notify":this.notify
    };

    this.http.post("http://localhost:8082/RequestLeave",bodyData).subscribe((resultData: any)=>{
      console.log(resultData);
      alert("Employee Registered Successfull")
      this.fromdate = "";
      this.todate = "";
      this.typeOfLeave = "";
      this.note = "";
      this.notify = "";
    })
  }
  // save(){
  //   this.register();
  // }
  constructor (private http: HttpClient ){

  }

}

a