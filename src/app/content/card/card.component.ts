import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../content.service";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  static ref: string = 'card';

  @Input() private contentdata;
  private contentdefinition;

  constructor(private contentService: ContentService) {
  }

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

  textsubstring(textArr: Array<Object>): string {
    let fulltext: string = "";
    if (textArr) {
      textArr.forEach(text => {
        fulltext = fulltext.concat(text['paragraph'], " ");
      });
      let numberOfCharacters = this.textSize;
      if (numberOfCharacters !== -1) {
        fulltext = fulltext.substring(0, numberOfCharacters).concat(" .... ");
      }
    }
    return fulltext;
  }

  private get textSize(): number {
    let numberOfCharacters: number = -1;
    let cardtextmeta = this.contentdata.metadata['cardtext'];
    if (cardtextmeta) {
      numberOfCharacters = cardtextmeta.numberOfCharacters ? cardtextmeta.numberOfCharacters : -1;
    }
    return numberOfCharacters;
  }
}
