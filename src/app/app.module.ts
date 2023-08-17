import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PropertyListComponent} from './property/components/porperty-list/property-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './shared/components/header/header.component';
import {RouterModule} from "@angular/router";
import {PropertyDetailComponent} from './property/components/property-detail/property-detail.component';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    HeaderComponent,
    PropertyDetailComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'properties/:id', component: PropertyDetailComponent},
      {path: 'properties', component: PropertyListComponent},
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
