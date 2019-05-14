import {Component, Input, OnInit} from '@angular/core';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

interface BreakpointToColumnNumber {
  breakpoint: string;
  numOfColumns: number;
}

@Component({
  selector: 'app-grid-list-container',
  templateUrl: './grid-list-container.component.html',
  styleUrls: ['./grid-list-container.component.css']
})
export class GridListContainerComponent implements OnInit {

  static ref:string = "GridList";

  @Input() private containerdata;

  private columns$: Observable<number>;
  private breakpointsToColumnsNumber: Map<string, number> = new Map([
    [ 'xs', 1 ],
    [ 'sm', 1 ],
    [ 'md', 2 ],
    [ 'lg', 3 ],
    [ 'xl', 4 ],
  ]);

  constructor(private media: MediaObserver) {
  }

  ngOnInit() {
    // let columns:Array<BreakpointToColumnNumber> = this.containerdata['columns'];
    let columns = this.containerdata['columns'];
    if (columns) {
      // overwrite defaults
      this.breakpointsToColumnsNumber = new Map(columns.map(col => [col.breakpoint, col.numOfColumns]));
    }
    this.columns$ = this.media.asObservable().pipe(
      filter(mcArr => mcArr.length > 0),
      map(mcArr => mcArr[0]),
      map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
    );
  }

}
