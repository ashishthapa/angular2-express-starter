"use strict";
/**
 * Created by athapa on 23/05/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PaperService = (function () {
    function PaperService(http) {
        this.http = http;
        this.url = '/api/paper';
    }
    PaperService.prototype.getAllPapers = function () {
        /*return this.http.get(`/api/paper`, {
          headers: new Headers({
            'Accept': 'application/json'
            })
          })
          .map(res=><IPaper[]>res.json())*/
        return this.http.get('/api/paper')
            .map(function (res) { return res.json(); });
    };
    PaperService.prototype.updatePaper = function (payload) {
        console.log('inside upate paper, paper service', payload);
        return this.http.post('api/paper/update', payload, {
            headers: new http_1.Headers({
                'Accept': 'application/json'
            })
        }).map(function (res) { return res.json(); });
    };
    return PaperService;
}());
PaperService = __decorate([
    core_1.Injectable()
], PaperService);
exports.PaperService = PaperService;
