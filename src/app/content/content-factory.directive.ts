import {ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {ContentService} from "./content.service";
import {ContentComponents} from "../app.module";

@Directive({
  selector: '[content-factory]'
})
export class ContentFactoryDirective {

  @Input() contentdata;

  constructor(private vcRef: ViewContainerRef, private cfResolver: ComponentFactoryResolver, private contentService: ContentService) {
  }

  ngOnChanges(changes) {
    if (this.contentdata) {
      console.log(this.contentdata);
      const cf = this.cfResolver.resolveComponentFactory(ContentComponents.find(it => it.ref === this.contentdata.ref));
      const component = this.vcRef.createComponent(cf);
      component.instance['contentdata'] = this.contentdata;
    }
  }
}
