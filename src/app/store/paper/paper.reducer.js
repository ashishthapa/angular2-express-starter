"use strict";
/**
 * Created by athapa on 20/05/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var paper_actions_1 = require("./paper.actions");
var _ = require("lodash");
var PaperInfo = (function () {
    function PaperInfo() {
    }
    return PaperInfo;
}());
var Group = (function () {
    function Group() {
    }
    return Group;
}());
;
var initialState = [];
exports.paperReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        /**
         Case:Paper get all success
         called when paper get all action is dispatched && successfully retrieved data
         the payload is then returned to the component for display.
         */
        case paper_actions_1.PAPER_GET_ALL_SUCCESS:
            console.log('inside paper reducer');
            console.log(action.payload);
            //return Object.assign({},action.payload);
            return action.payload;
        /**
         Case: Paper update success
         Called when individual paper is updated successfully,
         The payload is updated paper instance which has unique id (PaperId),
         Using the PaperID, index of the updated paper is identified from the store.
         which is then used to create a new array: (eg, if the index is 3, the new array is composed like this:
         data from 1st to third index i.e 0,1,2 replace the old paper at 3 with the new data using the payload
         and the remaining of the data i.e. index+1 ( 0->index, index, index+1->till the end)
         )
         */
        case paper_actions_1.PAPER_UPDATE_SUCCESS:
            console.log('inside paper update reducer', action.payload);
            var papers = void 0;
            console.log(state);
            //this.papers = Object.keys(state).map((key)=>{ return (state[key])});
            //console.log(this.papers);
            //let index = _.findIndex(this.papers, {paperID:action.payload.paperID});
            var index = _.findIndex(state, { paperID: action.payload.paperID });
            console.log(index);
            // console.log([...state.slice(0,index),...state.slice(index+1)])
            return state.slice(0, index).concat([action.payload], state.slice(index + 1));
        default: return state;
    }
};
