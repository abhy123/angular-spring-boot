import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeProfile, HttpClientService } from '../service/http-client.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-employee-profile',
  templateUrl: './add-employee-profile.component.html',
  styleUrls: ['./add-employee-profile.component.css']
})
export class AddEmployeeProfileComponent implements OnInit {

  profile: EmployeeProfile = new EmployeeProfile("", "", "", "", 0, "");
  id: string;

  constructor(private httpService: HttpClientService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe(
      params => {
        this.id = params['key']
      }
    );
    console.log(this.id);
    this.httpService.getEmployeeProfile(this.id).subscribe(
      data => {
        if (data != null)
          this.profile = data as EmployeeProfile;
      }
    )
  }

  addEmployeeProfile() {

    this.profile.empId = this.id;
    this.httpService.addEmployeeProfile(this.profile).subscribe(
      data => {

      }
    )
    this.router.navigate([''])
  }
  

}
