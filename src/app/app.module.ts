import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material.module";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {CardComponent} from "./content/card/card.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDialogModule, MatGridListModule} from "@angular/material";
import {DefaultPageComponent} from "./pages/default-page/default-page.component";
import {ContainerModule} from "./containers/container.module";
import {GridListContainerComponent} from "./containers/grid-list-container/grid-list-container.component";
import {ContainerFactoryDirective} from "./containers/container-factory.directive";
import {ContentFactoryDirective} from "./content/content-factory.directive";
import {StackContainerComponent} from "./containers/stack-container/stack-container.component";
import {ImageComponent} from "./content/image/image.component";
import {JumbotronComponent} from "./content/jumbotron/jumbotron.component";
import {ContentContainerComponent} from "./containers/content-container/content-container.component";
import {DefaultComponent} from "./content/default/default.component";
import {AgendaComponent} from "./content/agenda/agenda.component";
import {AgendaContainerComponent} from "./containers/agenda-container/agenda-container.component";
import {InschrijvingComponent} from "./forms/inschrijving/inschrijving.component";

export const ContainerComponents  = [
  GridListContainerComponent,
  StackContainerComponent,
  ContentContainerComponent,
  AgendaContainerComponent
]

export const ContentComponents = [
  CardComponent,
  ImageComponent,
  DefaultComponent
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
    JumbotronComponent,
    AgendaComponent,
    InschrijvingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    ContainerModule
  ],
  exports: [
    ...ContainerComponents, ...ContentComponents
  ],
  entryComponents: [...ContainerComponents, ...ContentComponents, InschrijvingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
