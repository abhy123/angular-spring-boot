import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  

  constructor(private httpService: HttpClientService, private router: Router) {

  }
  

  ngOnInit(): void {
    this.httpService.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response)
    )
  }

    handleSuccessfulResponse(response)
  {
    console.log("response" + JSON.stringify(response))
      this.employees=response;
  }

  deleteEmployee(employee: Employee): void {
    this.httpService.deleteEmployee(employee).subscribe(
      response => {
        console.log("response" + JSON.stringify(response))
        this.employees = this.employees.filter(u => u !== employee);
      }
    )
  };

  addEmployee(employee: Employee): void {
    this.router.navigate(['addemployeeprofile'], { queryParams: { key: employee.empId } })
  };

}
