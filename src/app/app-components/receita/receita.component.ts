import { Component } from '@angular/core';
import { CalendarOptions} from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent {

  constructor(private expenseService: ExpenseService ){
  }

  typeId_receita: number = 10000;

  dateSelected?: Date = undefined;

  entryObj: Expense | undefined;
  message?: string | undefined;
  errorMsg?: boolean = !this.successMsg && this.message != undefined;
  successMsg?: boolean = !this.errorMsg && this.message != undefined;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins:[dayGridPlugin, interactionPlugin],
    selectable: true,
    dateClick: this.handleDateClick.bind(this)
  };

  handleDateClick(arg: any) {
    this.dateSelected = new Date(arg.dateStr);
  }

  submitReceita(formulario: any){

    this.entryObj= new Expense(undefined,
      this.dateSelected,
      formulario.form.value.amount,
      this.typeId_receita,
      formulario.form.value.description);

      this.expenseService.sendEntry(this.entryObj).subscribe({
        next: entry => {
          this.entryObj = entry;
          this.dateSelected = undefined;
          this.setSuccessMsg(entry.description);
        },
        error: err => this.setErrorMsg(err)
      })
    
  }

  closeMessage(){
    this.sleep(5000).then(() => {
      this.successMsg = false;
      this.errorMsg = false;
  });
  }

  setSuccessMsg(description?: string){
    this.message = 'Receita: '+description+' salva com sucesso!';
    this.successMsg = true
    this.closeMessage();
  }

  setErrorMsg(msg: string){
    this.message = msg;
    this.errorMsg = true;
    this.closeMessage();
  }

  sleep (time: any) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  
  
  

}
