import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

interface Config {
  classname: string;
  flex_width: string;
}

@Component({
  selector: 'app-grid-list-container',
  templateUrl: './grid-list-container.component.html',
  styleUrls: ['./grid-list-container.component.css']
})
export class GridListContainerComponent implements OnInit {

  static ref:string = "grid";

  @Input() public containerdata;

  id:string;
  public config$: Observable<Config>;
  public breakpointsToConfig: Map<string, Config> = new Map([
    [ 'xs', { classname: "flex_sm", flex_width: "100%" } ],
    [ 'sm', { classname: "flex_sm", flex_width: "100%" } ],
    [ 'md', { classname: "flex_md", flex_width: "50%" } ],
    [ 'lg', { classname: "flex_lg", flex_width: "33%" } ],
    [ 'xl', { classname: "flex_lg", flex_width: "25%" } ],
  ]);
  private grid_content_classname:string = "grid_content";

  constructor(public media: MediaObserver) {
  }

  ngOnInit() {
    let metadata = this.containerdata['metadata'];
    if (metadata) {
      this.id = metadata['id'];
      let columns = metadata['columns'];
      if (columns) {
        // overwrite defaults
        this.breakpointsToConfig = new Map(columns.map(col => [col.breakpoint, col.config]));
      }
      this.config$ = this.media.asObservable().pipe(
        filter(mcArr => mcArr.length > 0),
        map(mcArr => mcArr[0]),
        map(mc => <Config>this.breakpointsToConfig.get(mc.mqAlias))
      );
    }
  }

}
