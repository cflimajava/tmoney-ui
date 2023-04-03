import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { InsertComponent } from 'src/app-components/insert/insert.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app-components/header/header.component';

@NgModule({
  declarations: [InsertComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, FullCalendarModule, HttpClientModule],
  providers: [],
  bootstrap: [InsertComponent, HeaderComponent]
})
export class AppModule { }
