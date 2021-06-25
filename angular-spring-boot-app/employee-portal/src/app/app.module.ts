import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http-client.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddEmployeeProfileComponent } from './add-employee-profile/add-employee-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { SearchProviderComponent } from './search-provider/search-provider.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchProvider2Component } from './search-provider2/search-provider2.component';
import { MatTooltipModule } from '@angular/material/tooltip'

 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    AddEmployeeProfileComponent,
    EmployeeProfileComponent,
    AddInsuranceComponent,
    InsuranceComponent,
    SearchProviderComponent,
    SearchProvider2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatSelectModule, MatIconModule, MatCheckboxModule , MatListModule, MatAutocompleteModule,
    MatTooltipModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
