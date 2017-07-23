"use strict";
/**
 * Created by athapa on 20/05/2017.
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
var paper_actions_1 = require("./paper.actions");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/observable/of");
var PaperEffects = (function () {
    function PaperEffects(action$, paperService) {
        var _this = this;
        this.action$ = action$;
        this.paperService = paperService;
        this.papersGetAll$ = this.action$.ofType(paper_actions_1.PAPER_GET_ALL).
            switchMap(function () { return _this.paperService.getAllPapers(); })
            .map(function (papers) { return ({ type: paper_actions_1.PAPER_GET_ALL_SUCCESS, payload: papers }); });
        this.paperUpdate$ = this.action$.ofType(paper_actions_1.PAPER_UPDATE).map(effects_1.toPayload).switchMap(function (payload) {
            return _this.paperService.updatePaper(payload)
                .map(function (res) { return ({ type: paper_actions_1.PAPER_UPDATE_SUCCESS, payload: res }); });
        });
    }
    return PaperEffects;
}());
__decorate([
    effects_1.Effect()
], PaperEffects.prototype, "papersGetAll$", void 0);
__decorate([
    effects_1.Effect()
], PaperEffects.prototype, "paperUpdate$", void 0);
PaperEffects = __decorate([
    core_1.Injectable()
], PaperEffects);
exports.PaperEffects = PaperEffects;
