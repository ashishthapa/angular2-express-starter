import { Action, ActionReducer } from '@ngrx/store';
import { USER_GET_SUCCESS } from './profile.actions';

export interface IProfile {
  name: string;
  username: string;
  email: string;
}

export const profileReducer: ActionReducer<IProfile> = (state: IProfile, action: Action): IProfile => {

  switch (action.type) {

    case USER_GET_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, action.payload);

    default:
      return state;
  }
};
