import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http'
import {MyDataService} from './my-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
