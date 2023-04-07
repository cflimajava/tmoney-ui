import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Expense } from "src/app/models/expense";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class ExpenseService{

    private baseUrl = "http://localhost:8080"

    private expenseURL: string = this.baseUrl+"/expense/add";
    private entryURL: string = this.baseUrl+"/entry/add";

    constructor(private http: HttpClient){}

    sendExpense(expense: Expense): Observable<Expense>{

        return  this.http.post<Expense>(this.expenseURL,expense).pipe(
            tap(data => console.log(data)),
            catchError(this.hanldeError));

    }

    sendEntry(receita: Expense): Observable<Expense>{
        return  this.http.post<Expense>(this.entryURL,receita).pipe(
            tap(data => console.log(data)),
            catchError(this.hanldeError));

    }


    private hanldeError(err: HttpErrorResponse){

        let msgError = "";
        if(err.error instanceof ErrorEvent){
            msgError = 'An Error occurred: '+err.error.message;
        }else{
            msgError = 'Server return code: '+err.status+", error message is: "+err.message ;
        }
        console.log(msgError);
        return throwError(()=>msgError);
    }

}
