import {Component, Input, OnInit} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stack-container',
  templateUrl: './stack-container.component.html',
  styleUrls: ['./stack-container.component.css']
})
export class StackContainerComponent implements OnInit {

  static ref:string = "stack";

  @Input() public containerdata;

  constructor(public media: MediaObserver) { }

  ngOnInit() {
  }

}
