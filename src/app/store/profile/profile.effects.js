"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("@ngrx/effects");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var profile_actions_1 = require("./profile.actions");
var ProfileEffects = (function () {
    function ProfileEffects(actions$, http) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.userGet$ = this.actions$
            .ofType(profile_actions_1.USER_GET)
            .switchMap(function (action) {
            console.log(action);
            return _this.http.get('/api/user', action.payload)
                .map(function (response) { return response.json(); })
                .catch(function () { return Observable_1.Observable.of(({ type: profile_actions_1.USER_GET_FAIL })); })
                .map(function (response) { return ({ type: profile_actions_1.USER_GET_SUCCESS, payload: response }); });
        });
    }
    return ProfileEffects;
}());
__decorate([
    effects_1.Effect()
], ProfileEffects.prototype, "userGet$", void 0);
ProfileEffects = __decorate([
    core_1.Injectable()
], ProfileEffects);
exports.ProfileEffects = ProfileEffects;
