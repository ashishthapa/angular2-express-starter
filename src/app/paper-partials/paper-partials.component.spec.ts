import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperPartialsComponent } from './paper-partials.component';
import {IPaper} from "../store/paper/paper.reducer";
import {PaperInfo, Group} from "../../../server/database/paper";

describe('PaperPartialsComponent', () => {
  let component: PaperPartialsComponent;
  let fixture: ComponentFixture<PaperPartialsComponent>;
  let paper_info:PaperInfo=null;
  let group:Group=null;
  let exam='new HSEB';
  let grade ='12';
  let subject = 'Biology';
  let year = '2017/2074';
  let info = 'Please complete all the questions';
  let paperInfo = new PaperInfo (exam,grade,subject,year,info);
  let long_question = "This is long question"
  let long_or_questions = new Array<string>("whats is long_or quetion?","what is long_or question2?");
  let brief_questions = new Array<string>("whats is brief quetion?","what is brief question2?");
  let short_questions = new Array<string>("whats is short quetion?","what is short question2?");
  let group_name = "botany & zoology";
  let group1 = new Group(group_name, short_questions, brief_questions, long_or_questions, long_question);
  let group2 = new Group(group_name, short_questions, brief_questions, long_or_questions, long_question);


  let itemToBeSelected={paperID: "2017-06-01T09:17:33.248Z",paper_info: paperInfo , groups:[ group1, group2 ]}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperPartialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperPartialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should select an item',()=> {
    expect(itemToBeSelected).toBeDefined();
    expect(itemToBeSelected.paperID).toBe('2017-06-01T09:17:33.248Z');
  });
});
