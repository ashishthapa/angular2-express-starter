/**
 * Created by athapa on 16/08/2017.
 */
import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";



@Injectable()
export class BookService{

  public constructor(private http:Http){

  }

  public log(){console.log('inside book service ');}
}
