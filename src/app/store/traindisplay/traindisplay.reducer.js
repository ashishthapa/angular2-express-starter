"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traindisplay_action_1 = require("./traindisplay.action");
var initialState = [];
exports.trainDisplayReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        /**
         Case:Train get all success
         called when paper get all action is dispatched && successfully retrieved data
         the payload is then returned to the component for display.
         */
        case traindisplay_action_1.TRAIN_DISPLAY_GET_ALL:
            //console.log('inside train display reducer');
            console.log(action.payload);
            //return Object.assign({},action.payload);
            return state.concat([action.payload]);
        default: return state;
    }
};
