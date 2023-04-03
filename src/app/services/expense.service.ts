import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Expense } from "src/models/expense";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class ExpenseService{

    private insertUrl: string = "http://localhost:8080/expense/add";

    constructor(private http: HttpClient){}

    insertExpense(expense: Expense): Observable<Expense>{

        return  this.http.post<Expense>(this.insertUrl,expense).pipe(
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