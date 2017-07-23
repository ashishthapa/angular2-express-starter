/**
 * Created by athapa on 21/07/2017.
 */
import {ActionReducer, Action} from "@ngrx/store";
import {TrainDisplay} from "../../trains/traindisplay.model";
import {TRAIN_DISPLAY_GET_ALL} from "./traindisplay.action";
export type TrainState = TrainDisplay[];
const initialState:TrainState = [];

export const trainDisplayReducer:ActionReducer<Array<TrainDisplay>> = (state = initialState, action:Action):TrainState => {

  switch (action.type){

    /**
     Case:Train get all success
     called when paper get all action is dispatched && successfully retrieved data
     the payload is then returned to the component for display.
     */
    case TRAIN_DISPLAY_GET_ALL:
      //console.log('inside train display reducer');
      console.log(action.payload);
      //return Object.assign({},action.payload);
      return [...state, action.payload];

    default: return state;
  }
}
