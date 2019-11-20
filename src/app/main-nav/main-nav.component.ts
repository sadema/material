import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  // mainmenuObservable: Observable<Menu[]>;
  mainmenuObservable: Observable<Menu>;

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.mainmenuObservable = this.appService.pages;
    this.mainmenuObservable.subscribe(data => console.log(data));
  }

}
