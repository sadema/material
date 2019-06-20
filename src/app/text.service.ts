import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  textsubstring(textArr: Array<Object>, numberOfCharacters: number): string {
    let fulltext: string = "";
    if (textArr) {
      textArr.forEach(text => {
        fulltext = fulltext.concat(text['paragraph'], " ");
      });
      fulltext = fulltext.substring(0, numberOfCharacters).concat(" .... ");
    }
    return fulltext;
  }

}
