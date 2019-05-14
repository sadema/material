import {ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {ContainerComponents} from "../app.module";

@Directive({
  selector: '[container-factory]'
})
export class ContainerFactoryDirective {

  @Input()
  public containerdata;

  constructor(private vcRef: ViewContainerRef, private cfResolver: ComponentFactoryResolver) {
  }

  ngOnChanges() {
    if (this.containerdata) {
      const cf = this.cfResolver.resolveComponentFactory(ContainerComponents.find(component => component.ref === this.containerdata.ref));
      const component = this.vcRef.createComponent(cf);
      component.instance['containerdata'] = this.containerdata;
    }
  }

}
