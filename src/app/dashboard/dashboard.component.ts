import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { IAppState } from '../store';
import {Book} from "../model/book.model";
import {BookService} from "../service/book.service";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  form: FormGroup;
  private book:Book;
  private title:string;
  private author:string;
  private publishedDate:string;
  private genre:string;
  private availability:boolean=false;
  private status:string='unavailable';

  feeds$: Observable<{}>;

  constructor(public fb: FormBuilder, private bookService:BookService, private http:Http) {


    this.form = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required]
    });

  }
  ngOnInit(){
    this.http
      .get('/api/library')
      .map((response: Response)=>{return response.json()}).subscribe(data=>console.log(data));

  }

  ngAfterViewInit(){

  }

  submitBook(): void {

    this.title = this.form.controls['title'].value;
    this.author = this.form.controls['author'].value;
    this.publishedDate = new Date().toDateString();
    this.genre = this.form.controls['genre'].value;

    this.book = new Book(this.title, this.author,this.publishedDate,this.genre,this.availability, this.status);
    this.bookService.addBook(this.book);
  }

  submitCommentOnFeed(id: string, commentForm: FormGroup): void {




  }

  removeFeed(feed: {}): void {



  }
}
