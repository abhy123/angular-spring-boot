import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeProfileComponent } from './add-employee-profile/add-employee-profile.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SearchProviderComponent } from './search-provider/search-provider.component';
import { SearchProvider2Component } from './search-provider2/search-provider2.component';


const routes: Routes = [
  {path: '', component: EmployeeComponent},
  { path:'addemployee', component: AddEmployeeComponent},
  { path:'addemployeeprofile', component: AddEmployeeProfileComponent},
  { path:'viewemployeeprofile/:id', component: EmployeeProfileComponent},
  { path:'addinsurance/:id', component: AddInsuranceComponent},
  { path:'viewinsurance/:id', component: InsuranceComponent},
  { path:'searchprovider', component: SearchProviderComponent},
  { path:'searchprovider2', component: SearchProvider2Component},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}


