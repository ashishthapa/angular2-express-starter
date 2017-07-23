"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrainDisplay = (function () {
    function TrainDisplay(trainType, trainNumber, beginTableRow, endTimeTableRow, locomotiveType, maximumSpeed, totalLength) {
        this.trainType = trainType;
        this.trainNumber = trainNumber;
        this.beginTableRow = beginTableRow;
        this.endTimeTableRow = endTimeTableRow;
        this.locomotiveType = locomotiveType;
        this.maximumSpeed = maximumSpeed;
        this.totalLength = totalLength;
    }
    return TrainDisplay;
}());
exports.TrainDisplay = TrainDisplay;
