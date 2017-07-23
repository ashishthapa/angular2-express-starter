/**
 * Created by athapa on 21/07/2017.
 */
export interface ITrainDisplay {
   trainType?:string;
   trainNumber?:number;
   beginTableRow?:string;
   endTimeTableRow?:string;
   locomotiveType?:string;
   maximumSpeed?:number;
   totalLength?:number;
}


  export class TrainDisplay implements ITrainDisplay{
    trainType?:string;
    trainNumber?:number;
    beginTableRow?:string;
    endTimeTableRow?:string;
    locomotiveType?:string;
    maximumSpeed?:number;
    totalLength?:number;
  constructor(   trainType?:string,trainNumber?:number, beginTableRow?:string,endTimeTableRow?:string,
    locomotiveType?:string, maximumSpeed?:number, totalLength?:number){
    this.trainType = trainType;
    this.trainNumber=trainNumber
      this.beginTableRow= beginTableRow
      this.endTimeTableRow = endTimeTableRow;
      this.locomotiveType=locomotiveType;
      this.maximumSpeed=maximumSpeed;
      this.totalLength=totalLength;
  }
}
