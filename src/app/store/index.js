"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var core_1 = require("@angular/core");
var core_2 = require("@ngrx/core");
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
var store_devtools_1 = require("@ngrx/store-devtools");
var environment_1 = require("../../environments/environment");
var paper_reducer_1 = require("./paper/paper.reducer");
var common_1 = require("@angular/common");
var paper_effects_1 = require("./paper/paper.effects");
var selectedpaper_reducer_1 = require("./paper/selectedpaper.reducer");
var profile_reducer_1 = require("./profile/profile.reducer");
var profile_effects_1 = require("./profile/profile.effects");
// all new reducers should be define here
var reducers = {
    paper: paper_reducer_1.paperReducer,
    selectedPaper: selectedpaper_reducer_1.selectedPaperReducer,
    profile: profile_reducer_1.profileReducer
};
var productionReducer = store_1.combineReducers(reducers);
var developmentReducer = core_2.compose(ngrx_store_freeze_1.storeFreeze, store_1.combineReducers)(reducers);
function reducer(state, action) {
    if (environment_1.environment.production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
exports.reducer = reducer;
var DummyModule = (function () {
    function DummyModule() {
    }
    DummyModule.forRoot = function () {
        return {
            ngModule: common_1.CommonModule
        };
    };
    return DummyModule;
}());
DummyModule = __decorate([
    core_1.NgModule()
], DummyModule);
exports.DummyModule = DummyModule;
exports.store = store_1.StoreModule.provideStore(reducer);
exports.instrumentation = (!environment_1.environment.production) ? store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension() : DummyModule.forRoot();
exports.effects = [
    effects_1.EffectsModule.run(paper_effects_1.PaperEffects),
    effects_1.EffectsModule.run(profile_effects_1.ProfileEffects)
];
