import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  getActivities():Observable<any> {
    console.log('/api/activities');
    return this.http.get('/api/activities');
  }

  getAgendaContent(ref: string):Observable<any> {
    let uri = `${environment.databaseurl}/genericwebsite/${ref}`;
    console.log(`agenda content uri: ${uri}`);
    return this.http.get(uri);
  }

}
