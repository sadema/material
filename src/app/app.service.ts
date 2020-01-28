import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  get pages(): Observable<Menu> {
    return this.http.get(`${environment.databaseurl}/genericwebsite/_design/navigation/_view/mainmenu`)
      .pipe(
        map(it => {
          console.log(it['rows']);
          return it['rows'][0].value.content;
        })
      );
  }
}
