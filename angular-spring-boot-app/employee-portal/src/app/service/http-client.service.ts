import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http'
import { Observable } from 'rxjs';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

export class EmployeeProfile {
  constructor(
    public dob: string,
    public department: string,
    public role: string,
    public address: string,
    public zipCode: number,
    public empId: string
  ) {}
}

export class Insurance {
    constructor(
      public name: string,
      public company: string,
      public type: string,
      public isClaimLastYear: boolean,
      public familyCover: any,
      public insuranceTerm: number,
      public previousDiseases: string,
      public cardImage: string
      ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    console.log("test call");
    return this.httpClient.get('http://localhost:8080/employees');
  }

  addEmployees(employee) {
    console.log("test post call");
    return this.httpClient.post('http://localhost:8080/employees', employee);
  }

  deleteEmployee(emp) {
    console.log("test delete call" + JSON.stringify(emp));

    return this.httpClient.delete('http://localhost:8080/employees/' + emp.empId);
  }

  addEmployeeProfile(empProfile: EmployeeProfile) {
    console.log("test post call" +JSON.stringify(empProfile));
    return this.httpClient.post('http://localhost:8080/employees/profile/' + empProfile.empId, empProfile);
  }

  getEmployeeProfile(id: String) {
    console.log("test get call");
    return this.httpClient.get('http://localhost:8080/employees/profile/' + id);
  }
  
  getEmployeeInsurance(id: String) {
    return this.httpClient.get('http://localhost:8080/employees/insurance/' + id);
  }

  addEmployeeInsurance(id: string, insurance: Insurance) {
    console.log("test post call : " + id + " , " + JSON.stringify(insurance));
    return this.httpClient.post('http://localhost:8080/employees/insurance/' + id, insurance);
  }

  searchInsurance(q: String) {
    return this.httpClient.get('http://localhost:8080/employees/insurance/company/search/' + q);
  }

  getInsuranceTypes() {
    return this.httpClient.get('http://localhost:8080/employees/insurance/types');
  }

  getInsuranceCompany(name: String) {
    return this.httpClient.get("http://localhost:8080/employees/insurance/company/search/" + name);
  }

  searchproviders(name: String) {
    return this.httpClient.get("http://localhost:8080/providers/" + name);
  }

}