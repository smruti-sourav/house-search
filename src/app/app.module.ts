import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailsComponent } from './house-details/house-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HouseDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
