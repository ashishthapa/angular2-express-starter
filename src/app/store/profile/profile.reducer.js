"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_actions_1 = require("./profile.actions");
exports.profileReducer = function (state, action) {
    switch (action.type) {
        case profile_actions_1.USER_GET_SUCCESS:
            console.log(action.payload);
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
