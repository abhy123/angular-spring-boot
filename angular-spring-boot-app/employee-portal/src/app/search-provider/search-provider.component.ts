import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-search-provider',
  templateUrl: './search-provider.component.html',
  styleUrls: ['./search-provider.component.css']
})
export class SearchProviderComponent implements OnInit {

  searchProvidersControl = new FormControl();
  filteredProviders: any;
  isLoading = false;
  errorMsg: string;

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.searchProvidersControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredProviders = [];
          this.isLoading = true;
        }),
        switchMap(value => this.httpService.searchproviders(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        console.log(data);
        if (data['Search'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredProviders = [];
        } else {
          this.errorMsg = "";
          this.filteredProviders = data['Search'];
        }

        console.log(this.filteredProviders);
      });
  }

  displayFn(firstName) {
    return firstName;
  }

}
