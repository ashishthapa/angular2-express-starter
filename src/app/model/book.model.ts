/**
 * Created by athapa on 15/08/2017.
 */
export interface IBook{
  title:string;
  author:string;
  datePublished:string;
  genre:string;
  avail:boolean;
  status:string;
}
export class Book implements IBook{
   title:string;
   author:string;
   datePublished:string;
   genre:string;
   avail:boolean;
   status:string;
  public constructor(title:string,author:string,datePub:string, genre:string, avail:boolean, status:string){
    this.title = title;
    this.author = author;
    this.datePublished = datePub;
    this.genre = genre;
    this.avail = avail;
    this.status = status;
  }

  public get availability(){
    return this.avail;
  }
  public set availability(avail:boolean){
    this.avail = avail;
  }
  public get genreOFBook(){
    return this.genre;
  }
  public set genreOFBook(genre:string){
    this.genre = genre;
  }

}
