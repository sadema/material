import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  static ref:string = "default";

  @Input() public contentdata;
  public contentdefinition;

  constructor(public contentService:ContentService) { }

  ngOnInit() {
    if (this.contentdata) {
      console.log(this.contentdata);
      this.contentService.getContentItems(this.contentdata.contentitem)
      // .pipe(
      //   map(it => it['content'])
      // )
        .subscribe(it => {
          this.contentdefinition = it;
          console.log(it);
        });
    }
  }

}
