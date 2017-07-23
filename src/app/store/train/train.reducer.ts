/**
 * Created by athapa on 20/07/2017.
 */


import {Train} from "../../model/train.model";
import {ActionReducer, Action} from "@ngrx/store";
import {TRAIN_GET_ALL_SUCCESS} from "./train.action";
export type TrainState = Train[];
const initialState:TrainState = [];

/**
 * Reducer function to interact with Train store.
 */
export const trainReducer:ActionReducer<Array<Train>> = (state = initialState, action:Action):TrainState => {

  switch (action.type){

    /**
     Case:Train get all success
     called when paper get all action is dispatched && successfully retrieved data
     the payload is then returned to the component for display.
     */
    case TRAIN_GET_ALL_SUCCESS:
      console.log('inside paper reducer');
      console.log(action.payload);
      //return Object.assign({},action.payload);
      return action.payload;


    default: return state;
  }
}
