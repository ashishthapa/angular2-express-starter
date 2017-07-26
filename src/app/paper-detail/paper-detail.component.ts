import {Component, Input, EventEmitter, Output, OnInit, ViewChild} from '@angular/core';
import {IPaper} from "../store/paper/paper.reducer";
import {IAppState} from "../store/index";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paperdetail.component.scss']
})
export class PaperDetailComponent implements OnInit {
  info:string;
  subject:string;
  paperID:string;
  selectedItem: IPaper=null;
  hidden:boolean;
  @Output() selectedOut = new EventEmitter();
  @Output() resetForm = new EventEmitter();


  // Every time the "item" input is changed, we copy it locally (and keep the original name to display)
@Input() set selected(selected:IPaper) {
    this.selectedItem = Object.assign({}, selected);
     console.log(this.selectedItem);
     //if(this.selectedItem.paperID) this.hidden = false;

  if(this.selectedItem.paperID) {
      this.hidden = false;
      this.paperID = this.selectedItem.paperID;
       this.info = this.selectedItem.paper_info.info;
       this.subject = this.selectedItem.paper_info.subject;
    console.log(this.info);

  }
  }
  constructor(){}
  ngOnInit(){
    this.hidden = true;
  }

  submit(){
    console.log(this.info,this.subject);
    this.selectedOut.emit({paperID:this.paperID,inf:this.info,sub:this.subject});
    this.cleanUP()

  }
  cancel(){
    console.log("cancel clicked");
         this.cleanUP();
  }
  private cleanUP(){

    this.info = null;
    this.subject = null;
    this.paperID = null;
    this.hidden = true;
    this.resetForm.emit({paperID:null});

  }
}
