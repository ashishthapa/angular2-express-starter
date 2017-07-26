"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paper_actions_1 = require("./paper.actions");
var scrapSelected = null;
exports.selectedPaperReducer = function (state, action) {
    switch (action.type) {
        case paper_actions_1.PAPER_UPDATE_SELECTED:
            console.log(action.payload);
            return action.payload;
        case paper_actions_1.PAPER_UPDATE_CANCELLED:
            console.log("inside paper update cancel ");
            return action.payload;
    }
    return state;
};
