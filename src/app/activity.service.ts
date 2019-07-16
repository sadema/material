import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Subscription} from "./content/agenda/agenda.component";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  getAgenda():Observable<any> {
    console.log('/api/agenda');
    return this.http.get('/api/agenda');
  }

  getAgendaContent(ref: string):Observable<any> {
    let uri = `${environment.databaseurl}/genericwebsite/${ref}`;
    console.log(`agenda content uri: ${uri}`);
    return this.http.get(uri);
  }

  addSubscription(agendaContentRef: string, subscription: Subscription):Observable<Object> {
    let uri = `${environment.inschrijvingurl}/activities/${subscription.activityId}/subscriptions`;
    console.log(uri);
    console.log(JSON.stringify(subscription));
    return this.http.post(uri,
      JSON.stringify(subscription),
      {headers: new HttpHeaders(
        {'Content-Type': 'application/json', 'Accept': 'application/json'}) });
  }
}
