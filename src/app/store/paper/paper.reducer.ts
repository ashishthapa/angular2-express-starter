/**
 * Created by athapa on 20/05/2017.
 */


import {ActionReducer, State, Action} from "@ngrx/store";
import {PAPER_GET_ALL_SUCCESS, PAPER_UPDATE_SUCCESS} from "./paper.actions";
import * as _ from "lodash";


class PaperInfo {

  exam:string;
  grade:string;
  subject:string;
  year:string;
  info:string;

}


class Group {

  group_name:string;
  short_questions:Array<string>;
  brief_questions:Array<string>;
  long_or_questions:Array<string>;
  long_question:string;

}


export interface IPaper extends PaperInfo, Group{
  paperID:string;
  paper_info: PaperInfo;
  groups : Array<Group>;

};

export type PaperState = IPaper[];
const initialState:PaperState = [];

export const paperReducer:ActionReducer<Array<IPaper>> = (state = initialState, action:Action):PaperState => {

  switch (action.type){

  /**
   Case:Paper get all success
   called when paper get all action is dispatched && successfully retrieved data
   the payload is then returned to the component for display.
   */
    case PAPER_GET_ALL_SUCCESS:
      console.log('inside paper reducer');
      console.log(action.payload);
      //return Object.assign({},action.payload);
    return action.payload;

    /**
     Case: Paper update success
     Called when individual paper is updated successfully,
     The payload is updated paper instance which has unique id (PaperId),
     Using the PaperID, index of the updated paper is identified from the store.
     which is then used to create a new array: (eg, if the index is 3, the new array is composed like this:
     data from 1st to third index i.e 0,1,2 replace the old paper at 3 with the new data using the payload
     and the remaining of the data i.e. index+1 ( 0->index, index, index+1->till the end)
     )
     */

    case PAPER_UPDATE_SUCCESS:
      console.log('inside paper update reducer', action.payload);
      let papers:IPaper[];
      console.log(state);
      //this.papers = Object.keys(state).map((key)=>{ return (state[key])});
      //console.log(this.papers);
      //let index = _.findIndex(this.papers, {paperID:action.payload.paperID});
      let index = _.findIndex(state, {paperID:action.payload.paperID});
      console.log(index);

       // console.log([...state.slice(0,index),...state.slice(index+1)])
      return [...state.slice(0,index),action.payload,...state.slice(index+1)];


    default: return state;
  }
}
