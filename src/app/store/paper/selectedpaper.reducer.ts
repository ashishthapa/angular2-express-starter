import {ActionReducer} from "@ngrx/store";
import {IPaper} from "./paper.reducer";
import {PAPER_UPDATE_SELECTED} from "./paper.actions";
/**
 * Created by athapa on 16/06/2017.
 */

export type SelectedPaperState = IPaper;
export const selectedPaperReducer:ActionReducer<IPaper> = (state:null, action): SelectedPaperState =>{

  switch (action.type){

    case PAPER_UPDATE_SELECTED:
      return action.payload;
  }

  return state;
}
