import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DespesaComponent } from './app-components/despesa/despesa.component';
import { ReceitaComponent } from './app-components/receita/receita.component';
import { RelatorioComponent } from './app-components/relatorio/relatorio.component';


@NgModule({
  declarations: [AppComponent, DespesaComponent, ReceitaComponent, RelatorioComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'despesas', component: DespesaComponent},
      {path:'receitas', component: ReceitaComponent},
      {path:'relatorios', component: RelatorioComponent},
      {path:'', redirectTo: 'despesas', pathMatch: 'full'}
    ])],
  providers: [],
  bootstrap: [AppComponent, DespesaComponent, ReceitaComponent, RelatorioComponent]
})
export class AppModule { }
