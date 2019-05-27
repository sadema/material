import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {
  }

  getContentItems(contentitem) {
    const contentlink = contentitem.contentlink;
    console.log(contentitem);
    const contentitemsUrl = `${environment.databaseurl}/genericwebsite/${contentlink}`;
    console.log(contentitemsUrl);
    return this.http.get(contentitemsUrl);
  }
}
