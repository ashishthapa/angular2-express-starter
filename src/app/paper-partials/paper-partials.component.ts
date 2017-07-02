import {Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {IPaper} from "../store/paper/paper.reducer";

@Component({
  selector: 'app-paper-partials',
  templateUrl: './paper-partials.component.html',
  styleUrls: ['./paper-partials.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaperPartialsComponent implements OnInit {
  @Input() papers:Array<IPaper>;
  @Output() outPaper = new EventEmitter<IPaper>();

  constructor() { }

  ngOnInit() {

  }
  edit(p:IPaper){
    console.log(p);
    this.outPaper.emit(p);
  }
}
