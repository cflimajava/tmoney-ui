import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DespesaComponent } from './app-components/despesa/despesa.component';
import { ReceitaComponent } from './app-components/receita/receita.component';


@NgModule({
  declarations: [AppComponent, DespesaComponent, ReceitaComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'despesas', component: DespesaComponent},
      {path:'receitas', component: ReceitaComponent},
      {path:'', redirectTo: 'despesas', pathMatch: 'full'}
    ])],
  providers: [],
  bootstrap: [AppComponent, DespesaComponent, ReceitaComponent]
})
export class AppModule { }
