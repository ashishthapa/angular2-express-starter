/*
/!**
 * Created by athapa on 16/05/2017.
 *!/
import { Document, Schema, model } from 'mongoose';


export class Botany{

  private shortQ:string;
  private longQ:string;
  private botShortQ:Array<string>;
  private botBriefQ:Array<string>;
  private botLongOrQ:Array<string>;
  private botLongQ:Array<string>;

  constructor(sh:string, lo:string, bShort:Array<string>,bBrief:Array<string>,bLongOr:Array<string>,bLong:Array<string> ) {
    this.shortQ = sh;
    this.longQ = lo;
    this.botShortQ = bShort;
    this.botBriefQ = bBrief;
    this.botLongOrQ = bLongOr;
    this.botLongQ = bLong;
  }
}

export class Zoology{

  private shortQ:string;
  private longQ:string;
  private botShortQ:Array<string>;
  private botBriefQ:Array<string>;
  private botLongOrQ:Array<string>;
  private botLongQ:Array<string>;

  constructor(sh:string, lo:string, bShort:Array<string>,bBrief:Array<string>,bLongOr:Array<string>,bLong:Array<string> ) {
    this.shortQ = sh;
    this.longQ = lo;
    this.botShortQ = bShort;
    this.botBriefQ = bBrief;
    this.botLongOrQ = bLongOr;
    this.botLongQ = bLong;
  }
}

export interface IPaper extends Document, Botany {
  name: string;
  surname: string;
  botany:Array<Botany>,
  zoology:Array<Zoology>

};

export const PaperSchema = new Schema({
  name: String,
  surname: String,
  botany:Array,
  zoology:Array
});

export const Biology = model<IPaper>('Biology', PaperSchema);


*/
/**
 * Created by athapa on 16/05/2017.
 */
import { Document, Schema, model } from 'mongoose';


export class PaperInfo {

   exam:string;
   grade:string;
   subject:string;
   year:string;
   info:string;

  constructor ( _exam:string, _grade:string, _subject:string, _year:string, _info:string ) {
    this.exam = _exam;
    this.grade = _grade;
    this.subject = _subject;
    this.year = _year;
    this.info = _info;

  }

}


export class Group {

  private group_name:string;
  private short_questions:Array<string>;
  private brief_questions:Array<string>;
  private long_or_questions:Array<string>;
  private long_question:string;

  constructor(_group_name:string, _short_questions:Array<string>,_brief_questions:Array<string>,_long_or_questions:Array<string>,_long_question:string ) {
    this.group_name = _group_name;
    this.short_questions = _short_questions;
    this.brief_questions = _brief_questions;
    this.long_or_questions = _long_or_questions;
    this.long_question = _long_question;
  }
}


export interface PaperDocument extends PaperInfo, Group, Document {
  paperID:String,
  paper_info: PaperInfo;
  groups : Array<Group>;

};

export const PaperInfoSchema = new Schema ({

  exam : String,
  grade : String,
  subject : String,
  year : String,
  info : String

}, { id: false });

export const GroupSchema = new Schema ({

  group_name: String,
  short_questions: Array,
  brief_questions: Array,
  long_or_questions: Array,
  long_question: String,

}, { id: false });



// not necessary to export the schema but still doing it
export const PaperSchema = new Schema({
  paperID:String,
  paper_info: PaperInfoSchema,
  groups :  [ GroupSchema ],

});

export const Paper = model<PaperDocument>('Paper', PaperSchema);






