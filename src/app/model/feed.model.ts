/**
 * Created by athapa on 07/08/2017.
 */
export interface IFeed {
    index:number;
    data:string;
}
export class Feed implements IFeed {
  index:number;
  data:string;
  constructor(ind:number, dat:string){
    this.index = ind;
    this.data = dat;
  }
}
export interface IFeeds {
  date:string;
  feeds:IFeed[];
}

export class Feeds implements IFeeds {
  date:string;
  feeds:IFeed[];

  public constructor(date:string, feeds:IFeed[]){
    this.date=date;
    this.feeds=feeds
  }

}
