import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../content.service";
import {Observable} from "rxjs";
import {TextService} from "../../text.service";
import {filter, map} from "rxjs/operators";
import {MediaObserver} from "@angular/flex-layout";

interface Config {
  classname: string[];
  flex_width: string[];
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  public static ref:string = "agenda";
  @Input() public contentdata;
  contentdefinition;
  config$: Observable<Config>;
  public breakpointsToConfig: Map<string, Config> = new Map([
    [ 'xs', { classname: ["flex_xs","flex_xs","datum flex_xs"], flex_width: ["100%","100%","100%"] } ],
    [ 'sm', { classname: ["flex_md","flex_md","datum flex_md"], flex_width: ["100%","100%","100%"] } ],
    [ 'md', { classname: ["flex_md","flex_md","datum flex_md"], flex_width: ["25%","50%","25%"] } ],
    [ 'lg', { classname: ["flex_lg","flex_lg","datum flex_lg"], flex_width: ["25%","50%","25%"] } ],
    [ 'xl', { classname: ["flex_lg","flex_lg","datum flex_lg"], flex_width: ["25%","50%","25%"] } ],
  ]);

  constructor(public media: MediaObserver, public contentService: ContentService, public textService:TextService) { }

  ngOnInit() {
    this.config$ = this.media.asObservable().pipe(
      filter(mcArr => mcArr.length > 0),
      map(mcArr => mcArr[0]),
      map(mc => this.breakpointsToConfig.get(mc.mqAlias))
    );
    if (this.contentdata.contentitem) {
      console.log(this.contentdata);
      this.contentService.getContentItems(this.contentdata.contentitem)
        .subscribe(it => {
          this.contentdefinition = it;
          console.log(it);
        });
    }
  }

  private get textSize(): number {
    let numberOfCharacters: number = -1;
    if (this.contentdata.metadata) {
      let cardtextmeta = this.contentdata.metadata['cardtext'];
      if (cardtextmeta) {
        numberOfCharacters = cardtextmeta.numberOfCharacters ? cardtextmeta.numberOfCharacters : -1;
      }
    }
    return numberOfCharacters;
  }

  textsubstring(textArr: Array<Object>) {
    return this.textService.textsubstring(textArr, this.textSize);
  }
}
