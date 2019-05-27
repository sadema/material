import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomepagetestService {

  private homepageUrl:string = "http://localhost:6905/genericwebsite/7630e6220db0fe1eee0d66e77200937e";
  private pageUrl:string = "http://localhost:6905/genericwebsite/851763ed7e535ad87ba41039ee000edf";

  constructor(private http:HttpClient) {
  }

  getHomePage():Observable<Object> {
    return this.http.get(this.homepageUrl);
  }

  getPage():Observable<Object> {
    return this.http.get(this.pageUrl);
  }

}
