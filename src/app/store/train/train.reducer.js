"use strict";
/**
 * Created by athapa on 20/07/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var train_action_1 = require("./train.action");
var initialState = [];
exports.trainReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        /**
         Case:Train get all success
         called when paper get all action is dispatched && successfully retrieved data
         the payload is then returned to the component for display.
         */
        case train_action_1.TRAIN_GET_ALL_SUCCESS:
            console.log('inside paper reducer');
            console.log(action.payload);
            //return Object.assign({},action.payload);
            return action.payload;
        default: return state;
    }
};
