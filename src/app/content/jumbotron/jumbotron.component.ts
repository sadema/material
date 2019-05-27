import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  static ref:string = "jumbotron";

  content:Observable<any>

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const jumbotronContentUrl = `${environment.databaseurl}/genericwebsite/75182932ca6fd92b30e7d6b35300b54a`;
    this.content = this.http.get(jumbotronContentUrl);
  }

}
