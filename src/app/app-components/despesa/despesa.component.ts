import { Component } from '@angular/core';
import { CalendarOptions} from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/expense';

@Component({
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent {

  constructor(private expenseService: ExpenseService ){
  }

  title: string = 'Insert the extra expense';

  dateSelected?: Date = undefined;

  expenseObj: Expense | undefined;
  message?: string | undefined;
  errorMsg?: boolean = !this.successMsg && this.message != undefined;
  successMsg?: boolean = !this.errorMsg && this.message != undefined;;


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins:[dayGridPlugin, interactionPlugin],
    selectable: true,
    dateClick: this.handleDateClick.bind(this)
  };


  typesFixed = [
    { "value": 0, "description": "aluguel" },
    { "value": 1, "description": "emprestimo" },
    { "value": 2, "description": "internet" },
    { "value": 3, "description": "telefones" },
    { "value": 4, "description": "assinaturas" },
    { "value": 5, "description": "bin" },
    { "value": 6, "description": "eletrict" },
    { "value": 7, "description": "gas" },
    { "value": 8, "description": "Cris dizimo" },
    { "value": 9, "description": "Glau dizimo" },
    { "value": 10, "description": "criancas dizimo" },
    { "value": 11, "description": "Cris ofertas" },
    { "value": 12, "description": "Glau oferta" },
    { "value": 13, "description": "criancas oferta" },
    { "value": 14, "description": "brasil" }
  ]

  typesExtra = [
    { "value": 1000, "description": "supermercado" },
    { "value": 1001, "description": "lanches" },
    { "value": 1002, "description": "carro" },
    { "value": 1003, "description": "farmacia" },
    { "value": 1004, "description": "oferta" },
    { "value": 1005, "description": "Cris" },
    { "value": 1006, "description": "Glau" },
    { "value": 1007, "description": "Emilly" },
    { "value": 1008, "description": "Nathan" },
    { "value": 1009, "description": "diversos" }
  ]

  submitExtra(_expense: any) {


    this.expenseObj = new Expense(
      undefined,
      this.dateSelected,
      _expense.form.value.amount,
      _expense.form.value.type,
      this.getTypeExtraDescription(_expense.form.value.type));

    this.expenseService.insertExpense(this.expenseObj).subscribe({
      next: expense => {
        this.expenseObj = expense;
        this.dateSelected = undefined;
        this.setSuccessMsg(expense.description);
      },
      error: err => this.setErrorMsg(err)
    })

  }

  handleDateClick(arg: any) {
    this.dateSelected = new Date(arg.dateStr);
  }

  getTypeExtraDescription(id: number):string{
    let desc = ""
    this.typesExtra.forEach((item) => {
      if (item.value == id) {
        desc = item.description;
      }
    });
    return desc;
  }

  setSuccessMsg(description?: string){
    this.message = 'Despesa de '+description+' salva com sucesso!';
    this.successMsg = true
  }

  setErrorMsg(msg: string){
    this.message = msg;
    this.errorMsg = true;
  }



}
