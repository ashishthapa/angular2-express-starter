/**
 * Created by athapa on 20/07/2017.
 */
/**
* Interface  for timetable
*/
export interface TimeTable {
  actualTime:string
  cancelled:boolean
  causes:any[],
  commercialStop:boolean,
  commercialTrack:string,
  countryCode:string,
  differenceInMinutes:number,
  scheduledTime:string,
  stationShortCode:string,
  stationUICCode:number,
  trainReady:string,
  trainStopping:boolean
  type:string

}
/**
 * Interface for train, type of which is returned TRAIN_GET_ALL_SUCCESS
 * */
export interface Train {
  trainNumber: number,
  departureDate: string,
  operatorUICCode: number,
  operatorShortCode: string,
  trainType: string,
  trainCategory: string,
  commuterLineID: string,
  runningCurrently: boolean,
  cancelled: boolean,
  version: number,
  timetableType: string,
  timetableAcceptanceDate: string,
  timeTableRows: TimeTable[]
}
