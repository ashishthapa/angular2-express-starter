"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var train_action_1 = require("../store/train/train.action");
var train_service_1 = require("./train.service");
var core_1 = require("@angular/core");
var TrainComponent = (function () {
    //dummyPaper:IPaper=null;
    function TrainComponent(store) {
        this.store = store;
        console.log('before init' + this.trains$);
        this.trains$ = this.store.select('train');
    }
    TrainComponent.prototype.ngOnInit = function () {
        console.log('train component initialized ');
        this.store.dispatch({
            type: train_action_1.TRAIN_GET_ALL
            //payload:{data:'none'}
        });
        this.trains$.subscribe(function (data) { return console.log('after init' + data); });
    };
    return TrainComponent;
}());
TrainComponent = __decorate([
    core_1.Component({
        selector: 'app-trains',
        templateUrl: './train.component.html',
        styleUrls: ['./train.component.css'],
        providers: [train_service_1.TrainService]
    })
], TrainComponent);
exports.TrainComponent = TrainComponent;
