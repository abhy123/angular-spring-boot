import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeProfile, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  @Input() empId: String;
  profile: EmployeeProfile = new EmployeeProfile("", "", "", "", 0, "");
  constructor(private httpService: HttpClientService, private ar: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      data => {
        console.log(data);
        this.empId = data.id;
      }
    )
    this.httpService.getEmployeeProfile(this.empId).subscribe(
      response => this.handleSuccessfulResponse(response)
    )

  }

  back() {
    this.router.navigate([''])
  }

  handleSuccessfulResponse(response)
  {
    console.log("response" + JSON.stringify(response))
    this.profile=response;
  }

}
