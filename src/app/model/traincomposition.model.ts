/**
 * Created by athapa on 21/07/2017.
 */
  export interface JourneySections {
    beginTimeTableRow:BeginTimeTableRow,
    endTimeTableRow:EndTimeTableRow,
    locomotives:Locomotives[],
    wagons:Wagons[],
    totalLength: number,
    maximumSpeed: number
  }
export interface BeginTimeTableRow {
  stationShortCode: string,
  stationUICCode: number,
  countryCode: string,
  type: string,
  scheduledTime: string
}
export interface EndTimeTableRow {
  stationShortCode: string,
  stationUICCode: number,
  countryCode: string,
  type: string,
  scheduledTime: string
}
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
export interface TrainComposition{
  trainNumber: number,
  departureDate: string,
  operatorUICCode: number,
  operatorShortCode: string,
  trainCategory: string,
  trainType: string,
  version: number,
  journeySections: JourneySections[],
}
