"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var train_action_1 = require("../store/train/train.action");
var train_service_1 = require("../service/train.service");
var core_1 = require("@angular/core");
var traincomposition_service_1 = require("../service/traincomposition.service");
var traindisplay_model_1 = require("../model/traindisplay.model");
var traindisplay_action_1 = require("../store/traindisplay/traindisplay.action");
/**
 * Component of type TrainComponent responsible for observing Train and TrainDisplay Store
 * OnInit The action TRAIN_GET_ALL is dispatched, the train$ observable is subscribed to get live data
 * using which is used to create DISPLAY OBJECT. The display object is also saved in store so that it provides
 * observable which could be passed to child component so that the future changes are reflected
 * cleanUP and emitted methods to be used per need (for cleaning the store and retreiving selected data respectively.)
 * */
var TrainComponent = (function () {
    function TrainComponent(store, service) {
        this.store = store;
        this.service = service;
        console.log('before init' + this.trains$);
        this.trains$ = this.store.select('train');
        this.trainsDisplay$ = this.store.select('trainDisplay');
    }
    TrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('train component initialized ');
        this.store.dispatch({
            type: train_action_1.TRAIN_GET_ALL
        });
        this.cleanUP();
        this.trains$.subscribe(function (data) { return data.forEach(function (res) { return _this.service
            .getAllTrainComposition(res.trainNumber, res.departureDate)
            .subscribe(function (data) {
            if (data.journeySections) {
                data.journeySections.forEach(function (data) {
                    _this.createTrainDisplay(res.trainType, res.trainNumber, res.runningCurrently, data);
                });
            }
            else {
                _this.td = new traindisplay_model_1.TrainDisplay(res.trainType, res.trainNumber);
                //this.cleanUp(res.trainType, res.trainNumber);
            }
            _this.store.dispatch({ type: traindisplay_action_1.TRAIN_DISPLAY_GET_ALL, payload: _this.td });
        }); }); });
    };
    TrainComponent.prototype.createTrainDisplay = function (trainType, trainNumber, moving, data) {
        this.td = new traindisplay_model_1.TrainDisplay(trainType, trainNumber, moving, data.beginTimeTableRow.stationShortCode, data.endTimeTableRow.stationShortCode, data.locomotives, data.wagons, data.maximumSpeed, data.totalLength);
    };
    TrainComponent.prototype.cleanUP = function () {
        this.store.dispatch({ type: traindisplay_action_1.REMOVE_DISPLAY_TRAINS, payload: [] });
    };
    TrainComponent.prototype.emitted = function ($event) {
        console.log('The list clicked is: ');
        console.log($event);
    };
    return TrainComponent;
}());
TrainComponent = __decorate([
    core_1.Component({
        selector: 'trains',
        templateUrl: './train.component.html',
        styleUrls: ['./train.component.css'],
        providers: [train_service_1.TrainService, traincomposition_service_1.TrainCompositionService]
    })
], TrainComponent);
exports.TrainComponent = TrainComponent;
