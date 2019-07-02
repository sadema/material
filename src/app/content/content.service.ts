import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

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

  getContent(contentlink) {
    console.log(contentlink);
    const uri = `${environment.databaseurl}/genericwebsite/${contentlink}`;
    console.log(uri);
    return this.http.get(uri).pipe(
      map(it => it['content'])
    );
  }
}
