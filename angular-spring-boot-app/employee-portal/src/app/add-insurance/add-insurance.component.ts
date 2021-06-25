import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService, Insurance } from '../service/http-client.service';


@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  insurance: Insurance = new Insurance("", "", "", false, [], 1, "", "");
  compareFunction = (o1: any, o2: any)=> o1.key===o2.key;
  companyNames: String[] = [];
  stateCtrl: FormControl = new FormControl();

  id: string;
  constructor(private httpService: HttpClientService, private ar: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
    console.log("empId:" + this.id);
    this.httpService.getEmployeeInsurance(this.id).subscribe(
      data => {
        if (data != null) {
          console.log("data: " + JSON.stringify(data))
          this.insurance = data as Insurance;
        }
      }
    )
  }

  addInsurance() {
    this.httpService.addEmployeeInsurance(this.id, this.insurance).subscribe(
      data => {

      }
    )
    this.router.navigate(['/viewemployeeprofile/' + this.id])
  }

  getInsuranceCompany(name: String) {
    
  }
}
