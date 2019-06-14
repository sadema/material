import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";
import {filter, map} from "rxjs/operators";

interface Config {
  classname: string;
  flex_width: string;
}

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  static ref:string = "jumbotron";

  // public columns$: Observable<number>;
  // public breakpointsToColumnsNumber: Map<string, number> = new Map([
  //   [ 'xs', 2 ],
  //   [ 'sm', 2 ],
  //   [ 'md', 2 ],
  //   [ 'lg', 4 ],
  //   [ 'xl', 4 ],
  // ]);
  content:Observable<any>;
  config$: Observable<Config>;
  public breakpointsToConfig: Map<string, Config> = new Map([
    [ 'xs', { classname: "jumbotron_content flex_xs", flex_width: "100%" } ],
    [ 'sm', { classname: "jumbotron_content flex_md", flex_width: "50%%" } ],
    [ 'md', { classname: "jumbotron_content flex_md", flex_width: "50%" } ],
    [ 'lg', { classname: "jumbotron_content flex_lg", flex_width: "25%" } ],
    [ 'xl', { classname: "jumbotron_content flex_lg", flex_width: "25%" } ],
  ]);
  jumbotron_content_classname:string = "jumbotron_content";

  constructor(private http:HttpClient, private media: MediaObserver) { }

  ngOnInit() {
    // this.columns$ = this.media.asObservable().pipe(
    //   filter(mcArr => mcArr.length > 0),
    //   map(mcArr => mcArr[0]),
    //   map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
    // );
    this.config$ = this.media.asObservable().pipe(
      filter(mcArr => mcArr.length > 0),
      map(mcArr => mcArr[0]),
      map(mc => this.breakpointsToConfig.get(mc.mqAlias))
    );
    const jumbotronContentUrl = `${environment.databaseurl}/genericwebsite/75182932ca6fd92b30e7d6b35300b54a`;
    this.content = this.http.get(jumbotronContentUrl);
  }

}
