"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Created by athapa on 22/07/2017.
 */
var TrainDisplayComponent = (function () {
    function TrainDisplayComponent() {
        this.emitted = new core_1.EventEmitter();
    }
    TrainDisplayComponent.prototype.ngOnInit = function () {
    };
    TrainDisplayComponent.prototype.emit = function (train) {
        console.log(train);
        this.emitted.emit(train);
    };
    return TrainDisplayComponent;
}());
__decorate([
    core_1.Input()
], TrainDisplayComponent.prototype, "trainDisplays", void 0);
__decorate([
    core_1.Output()
], TrainDisplayComponent.prototype, "emitted", void 0);
TrainDisplayComponent = __decorate([
    core_1.Component({
        selector: 'train-display',
        templateUrl: './traindisplay.component.html',
        styleUrls: ['./traindisplay.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], TrainDisplayComponent);
exports.TrainDisplayComponent = TrainDisplayComponent;
