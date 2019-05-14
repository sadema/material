import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomepagetestService {

  private pageUrl:string = "http://localhost:6905/genericwebsite/7630e6220db0fe1eee0d66e77200937e";

  constructor(private http:HttpClient) {
  }

  getPage():Observable<Object> {
    return this.http.get(this.pageUrl);
  }

}
