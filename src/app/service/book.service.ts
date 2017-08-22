/**
 * Created by athapa on 16/08/2017.
 */
import {Injectable, OnInit} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Book} from "../model/book.model";
import {Observable} from "rxjs";


@Injectable()
export class BookService{
  private responseStatus:number;
  private url:string = "/api/feed"
  private headers:Headers = new Headers();
  public constructor(private http:Http){


  }

  public log(){console.log('inside book service ');}
  public addBook(book:Book){
    console.log(book);
    this.http.post('/api/library',book).map((data)=>{
      this.responseStatus = data.status;
      console.log(this.responseStatus);
      return data
    }).subscribe(data=>console.log(data.json()))
  }
}
