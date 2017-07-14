import {ActionReducer} from "@ngrx/store";
import {IPaper} from "./paper.reducer";
import {PAPER_UPDATE_SELECTED, PAPER_UPDATE_CANCELLED} from "./paper.actions";
/**
 * Created by athapa on 16/06/2017.
 */

export type SelectedPaperState = IPaper;
const scrapSelected:IPaper=null;
export const selectedPaperReducer:ActionReducer<IPaper> = (state:null, action): SelectedPaperState =>{

  switch (action.type){

    case PAPER_UPDATE_SELECTED:
      console.log(action.payload);
      return action.payload;

    case PAPER_UPDATE_CANCELLED:
      console.log("inside paper update cancel ");
      return action.payload;
  }

  return state;
}
