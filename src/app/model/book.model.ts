/**
 * Created by athapa on 15/08/2017.
 */
export interface IBook{
  title:string;
  author:string;
  datePublished:string;
}
export class Book{
  private title:string;
  private author:string;
  private datePublished;
  public constructor(title:string,author:string,datePub:string){
    this.title = title;
    this.author = author;
    this.datePublished = datePub;
  }

}
