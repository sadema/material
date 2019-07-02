import {Component, Input, OnInit} from '@angular/core';
import {ActivityService} from "../../activity.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-agenda-container',
  templateUrl: './agenda-container.component.html',
  styleUrls: ['./agenda-container.component.css']
})
export class AgendaContainerComponent implements OnInit {

  static ref:string = 'agenda';
  @Input() public containerdata;
  private activities:Observable<any>;
  private content;

  constructor(public activityService:ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }

}
