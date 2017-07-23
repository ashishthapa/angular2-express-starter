import {Locomotives} from "./traincomposition.model";
/**
 * Created by athapa on 21/07/2017.
 */
export interface Locomotives{
  location:number,
  locomotiveType:string,
  powerType:string
}
export interface Wagons{
  wagonType: string,
  location: number,
  salesNumber: number,
  length: number,
  pet: boolean
}
export interface ITrainDisplay {
   trainType?:string;
   trainNumber?:number;
   beginTableRow?:string;
   endTimeTableRow?:string;
   locomotiveType?:Locomotives[];
   wagons?:Wagons[];
   maximumSpeed?:number;
   totalLength?:number;
}

/**
 * Class Train Display implements above mentioned interfaces;
 * To be instantiatied in train.component.ts
 * Test with default values: some fields are empty
 * */

  export class TrainDisplay implements ITrainDisplay{
    trainType?:string;
    trainNumber?:number;
    beginTableRow?:string;
    endTimeTableRow?:string;
    locomotiveType?:Locomotives[];
    wagons?:Wagons[];
    maximumSpeed?:number;
    totalLength?:number;
  constructor(   trainType?:string,trainNumber?:number, beginTableRow?:string,endTimeTableRow?:string,
    locomotives?:Locomotives[], wagons:Wagons[]=[],maximumSpeed:number=0, totalLength?:number){
    this.trainType = trainType;
    this.trainNumber=trainNumber
      this.beginTableRow= beginTableRow
      this.endTimeTableRow = endTimeTableRow;
      this.locomotiveType=locomotives;
      this.wagons=wagons;
      this.maximumSpeed=maximumSpeed;
      this.totalLength=totalLength;
  }
}
