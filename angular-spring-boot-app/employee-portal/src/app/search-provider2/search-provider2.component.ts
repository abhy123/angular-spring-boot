import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientService } from "../service/http-client.service";

// const APIKEY = "e8067b53";

// const PARAMS = new HttpParams({
//   fromObject: {
//     action: "opensearch",
//     format: "json",
//     origin: "*"
//   }
// });


@Component({
  selector: 'app-search-provider2',
  templateUrl: './search-provider2.component.html',
  styleUrls: ['./search-provider2.component.css']
})
export class SearchProvider2Component implements OnInit {

  @ViewChild('providerSearchInput', { static: true }) providerSearchInput: ElementRef;
  apiResponse: any;
  isSearching: boolean;

  constructor(
    private http: HttpClientService
  ) {
    this.isSearching = false;
    this.apiResponse = [];

    console.log('providerSearchInputConstruct : ' + this.providerSearchInput);
  }

  ngOnInit() {

    console.log('providerSearchInputinIt' + this.providerSearchInput);



    fromEvent(this.providerSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(500)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.isSearching = true;

      this.http.searchproviders(text).subscribe((res) => {
        console.log('providers', res);
        this.isSearching = false;
        this.apiResponse = res;
      }, (err) => {
        this.isSearching = false;
        console.log('error', err);
      });

    });
  }

  // searchGetCall(term: string) {
  //   if (term === '') {
  //     return of([]);
  //   }
  //   return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
  // }

}
