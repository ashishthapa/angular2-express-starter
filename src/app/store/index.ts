import { combineReducers, ActionReducer, Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import {  trainReducer } from './train/train.reducer';
import { CommonModule } from '@angular/common';
import {Train} from "../model/train.model";
import {TrainEffects} from "./train/train.effects";
import {TrainDisplay} from "../model/traindisplay.model";
import {trainDisplayReducer} from "./traindisplay/traindisplay.reducer";

// all new reducers should be define here
export interface IAppState {
  train:Train[];
  trainDisplay:TrainDisplay[];
}

// all new reducers should be define here
const reducers = {
  train:trainReducer,
  trainDisplay:trainDisplayReducer
};

const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);
const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: IAppState, action: Action) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

@NgModule()
export class DummyModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule
    };
  }
}

export const store: ModuleWithProviders = StoreModule.provideStore(reducer);
export const instrumentation: ModuleWithProviders =
  (!environment.production) ? StoreDevtoolsModule.instrumentOnlyWithExtension() : DummyModule.forRoot();

export const effects: ModuleWithProviders[] = [
    EffectsModule.run(TrainEffects)

];
