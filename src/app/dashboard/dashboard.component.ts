import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { IAppState } from '../store';
import {Book} from "../model/book.model";
import {BookService} from "../service/book.service";

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

  constructor(public fb: FormBuilder, private bookService:BookService) {


    this.form = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required]
    });

  }
  ngOnInit(){
    console.log(this.bookService.log());
  }

  ngAfterViewInit(){
    this.bookService.log();
    this.form.valueChanges.debounceTime(500).subscribe(data=>{console.log(data)});
  }

  submitBook(): void {

    this.title = this.form.controls['title'].value;
    this.author = this.form.controls['author'].value;
    this.publishedDate = new Date().toDateString();
    this.genre = this.form.controls['genre'].value;

    console.log(this.title);
    console.log(this.author);
    console.log(this.publishedDate);
    console.log(this.genre);

    this.book = new Book(this.title, this.author,this.publishedDate,this.genre,this.availability, this.status);
    console.log(this.book);
  }

  submitCommentOnFeed(id: string, commentForm: FormGroup): void {




  }

  removeFeed(feed: {}): void {



  }
}
