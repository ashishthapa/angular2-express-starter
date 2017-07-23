"use strict";
/**
 * Created by athapa on 20/07/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var train_action_1 = require("./train.action");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/observable/of");
var TrainEffects = (function () {
    function TrainEffects(action$, trainService) {
        var _this = this;
        this.action$ = action$;
        this.trainService = trainService;
        this.trainGetAll$ = this.action$.ofType(train_action_1.TRAIN_GET_ALL).
            switchMap(function () { return _this.trainService.getAllTrains(); })
            .map(function (trains) { return ({ type: train_action_1.TRAIN_GET_ALL_SUCCESS, payload: trains }); });
    }
    return TrainEffects;
}());
__decorate([
    effects_1.Effect()
], TrainEffects.prototype, "trainGetAll$", void 0);
TrainEffects = __decorate([
    core_1.Injectable()
], TrainEffects);
exports.TrainEffects = TrainEffects;
