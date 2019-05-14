import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {CardComponent} from "./content/card/card.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material";
import {DefaultPageComponent} from "./pages/default-page/default-page.component";
import {ContainerModule} from "./containers/container.module";
import {GridListContainerComponent} from "./containers/grid-list-container/grid-list-container.component";
import {ContainerFactoryDirective} from "./containers/container-factory.directive";
import {ContentFactoryDirective} from "./content/content-factory.directive";

export const ContainerComponents  = [
  GridListContainerComponent
]

export const ContentComponents = [
  CardComponent
]

@NgModule({
  declarations: [
    ...ContainerComponents,
    ...ContentComponents,
    ContainerFactoryDirective,
    ContentFactoryDirective,
    AppComponent,
    MainNavComponent,
    DefaultPageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    ContainerModule
  ],
  exports: [
    ...ContainerComponents, ...ContentComponents
  ],
  entryComponents: [...ContainerComponents, ...ContentComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
