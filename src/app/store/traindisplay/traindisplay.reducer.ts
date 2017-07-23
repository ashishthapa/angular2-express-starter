/**
 * Created by athapa on 21/07/2017.
 */
import {ActionReducer, Action} from "@ngrx/store";
import {TrainDisplay} from "../../model/traindisplay.model";
import {TRAIN_DISPLAY_GET_ALL, REMOVE_DISPLAY_TRAINS} from "./traindisplay.action";
export type TrainState = TrainDisplay[];
const initialState:TrainState = [];

export const trainDisplayReducer:ActionReducer<Array<TrainDisplay>> = (state = initialState, action:Action):TrainState => {

  switch (action.type){

    /**
     Case:Train display get all success

     */
    case TRAIN_DISPLAY_GET_ALL:
      //console.log('inside train display reducer');
      console.log(action.payload);
      //return Object.assign({},action.payload);
      return [...state, action.payload];

    case REMOVE_DISPLAY_TRAINS:

      //return action.payload;

    default: return state;
  }
}
