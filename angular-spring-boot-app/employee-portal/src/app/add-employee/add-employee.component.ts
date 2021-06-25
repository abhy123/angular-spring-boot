import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee("","","","");
  
  constructor(private httpService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.httpService.addEmployees(this.user).subscribe(
      data => {
        //alert("Employee added successfully!");
      }
    )
      this.router.navigate([''])
  }

}
