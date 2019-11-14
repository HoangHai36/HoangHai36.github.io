(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-toolbar color=\"warn\">\n        <mat-toolbar-row style=\"display: flex; justify-content:space-between;\">\n            <div style=\"margin-left: 50px;\"><i class=\"fa fa-youtube-square fa-2x\"></i></div>\n            <div>\n                <button mat-icon-button style=\"margin-right:  50px;\" (click)=\"toggleSetting()\">\n                    Setting<mat-icon>more_vert</mat-icon>\n                </button>\n            </div>\n        </mat-toolbar-row>\n    </mat-toolbar>\n    <div style=\"width: 90%; margin: 0 auto; padding-top: 30px; background:white;\" *ngIf=\"toggeSetting\">\n        <h4>Search Setting </h4>\n        <mat-accordion style=\"width: 85%\">\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        1.Number per page\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <mat-form-field>\n                    <mat-label>Page size</mat-label>\n                    <mat-select [(value)]=\"selected\">\n                        <mat-option *ngFor=\"let number of numbers\" [value]=\"number\">\n                            {{number}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        2. Debounce time\n                    </mat-panel-title>\n\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Debounce number\" type=\"number\" (keyup)=\"debounce = $event.target.value\" required>\n                </mat-form-field>\n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        3. API key\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Key youtube API\" (keyup)=\"keyAPI = $event.target.value\" required>\n                </mat-form-field>\n            </mat-expansion-panel>\n        </mat-accordion>\n        <div style=\"display: flex; justify-content: flex-end;padding: 5px 10px;\">\n            <button mat-raised-button color=\"primary\" style=\"margin-right: 10px;\" (click)=\"saveSetting()\"\n                [disabled]=\"\">Save</button>\n            <button mat-raised-button color=\"accent\" (click)=\"closed()\">Close</button>\n        </div>\n    </div>\n    <app-search-video *ngIf=\"!toggeSetting\" [setting]=\"setting\"></app-search-video>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-video/search-video.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-video/search-video.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div style=\"display: flex; justify-content:center;\">\n        <mat-form-field class=\"example-full-width center\" style=\"margin-bottom: 10px;\">\n            <input matInput placeholder=\"Video youtube\" #search>\n        </mat-form-field>\n    </div>\n    <div class=\"sort\">\n        <span style=\"margin-top: 10px;\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <span><i class=\"fa fa-sort\"></i> Order</span>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item *ngFor=\"let item of listSort\" (click)=\"sortData(item)\">\n                    <span>{{item}}</span>\n                </button>\n            </mat-menu>\n        </span>\n        <span>\n            From<span class=\"ml\">\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date1\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                </mat-form-field>\n            </span>\n        </span>\n        <span>\n            To<span class=\"ml\">\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms\" [formControl]=\"date2\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                </mat-form-field>\n            </span>\n        </span>\n    </div>\n\n\n    <mat-grid-list cols=\"5\" rowHeight=\"1:1.5\">\n        <mat-grid-tile *ngFor=\"let item of listItem\" [routerLink]=\"['view/',item?.id.videoId]\"\n            routerLinkActive=\"router-link-active\">\n            <mat-card class=\"example-card\" style=\"margin: 2%; border: #606060;\">\n                <img mat-card-image [src]=\"item?.snippet.thumbnails.high.url\" alt=\"Photo of a Shiba Inu\">\n                <mat-card-content>\n                    <h4 style=\"color: #0D0D0D; min-height: 60px;\">\n                        {{item?.snippet.title}}\n                    </h4>\n                    <p>{{item?.snippet.channelTitle}}</p>\n                    <p>{{item?.snippet.publishedAt | date: 'dd/MM/yyyy'}}</p>\n                </mat-card-content>\n            </mat-card>\n        </mat-grid-tile>\n    </mat-grid-list>\n\n    <div style=\"display: flex; justify-content: center;\">\n        <mat-paginator *ngIf=\"listItem.length !== 0\" [length]=\"length\" (page)=\"nextPage($event)\" [pageSize]=\"pageSize\"\n            [pageSizeOptions]=\"pageSizeOptions\">\n        </mat-paginator>\n    </div>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-video/view-video.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-video/view-video.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\" style=\"width: 35%; margin: 0 auto;\">\n    <iframe width=\"100%\" height=\"315\" [src]=\"id | safe\">\n    </iframe>\n    <mat-card-content>\n        <p style=\"color: blue; margin-top: 10px;\">#{{dataItem?.snippet.channelTitle}}</p>\n        <mat-card-header>\n                <img mat-card-avatar [src]=\"dataItem?.snippet.thumbnails.default.url\">\n            <mat-card-title style=\"font-size: 18px;\">\n                {{dataItem?.snippet.title}}\n            </mat-card-title>\n            <mat-card-subtitle>\n                <span style=\"color: #606060;\">{{dataView?.viewCount}} lượt xem <span class=\"dot\">.</span>\n                    {{dataItem?.snippet.publishedAt| date: 'fullDate'}}</span>\n            </mat-card-subtitle>\n        </mat-card-header>\n\n\n        <div style=\"color: #606060; display: flex; justify-content: flex-end;\">\n            <div>\n                <span class=\"like mr\">{{dataView?.likeCount}}<i class=\"fa fa-thumbs-up pl\"></i></span>\n                <span class=\"dislike mr\">{{dataView?.dislikeCount}}<i class=\"fa fa-thumbs-down pl\"></i></span>\n                <i class=\"fa fa-share mr\"></i>Chia sẻ\n            </div>\n        </div>\n    </mat-card-content>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_video_view_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-video/view-video.component */ "./src/app/view-video/view-video.component.ts");




const routes = [
    { path: 'view/:id', component: _view_video_view_video_component__WEBPACK_IMPORTED_MODULE_3__["ViewVideoComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #EEEEEE !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _youtobe_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtobe-api.service */ "./src/app/youtobe-api.service.ts");



let AppComponent = class AppComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.title = 'exampleMaterial';
        this.selected = 5;
        this.keyAPI = "";
        this.toggeSetting = false;
        this.numbers = [5, 10, 15, 20];
        this.setting = {
            debounce: this.debounce,
            keyAPI: this.keyAPI,
            pageSize: this.selected,
        };
    }
    toggleSetting() {
        this.toggeSetting = !this.toggeSetting;
    }
    closed() {
        this.toggeSetting = false;
    }
    saveSetting() {
        this.setting = {
            debounce: this.debounce,
            keyAPI: this.keyAPI,
            pageSize: this.selected,
        };
        this.toggeSetting = false;
        sessionStorage.setItem('key', this.setting.keyAPI);
    }
};
AppComponent.ctorParameters = () => [
    { type: _youtobe_api_service__WEBPACK_IMPORTED_MODULE_2__["YoutobeAPIService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _view_video_view_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-video/view-video.component */ "./src/app/view-video/view-video.component.ts");
/* harmony import */ var _search_video_search_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-video/search-video.component */ "./src/app/search-video/search-video.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _view_video_view_video_component__WEBPACK_IMPORTED_MODULE_8__["ViewVideoComponent"],
            _search_video_search_video_component__WEBPACK_IMPORTED_MODULE_9__["SearchVideoComponent"],
            _safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
            _setting_setting_component__WEBPACK_IMPORTED_MODULE_12__["SettingComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const material = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            material,
        ],
        exports: [
            material
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(santierz) {
        this.santierz = santierz;
    }
    transform(value) {
        return this.santierz.bypassSecurityTrustResourceUrl(value);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/search-video/search-video.component.css":
/*!*********************************************************!*\
  !*** ./src/app/search-video/search-video.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n    min-width: 45%;\r\n  }\r\n  .center {\r\n    margin:0 auto;\r\n    margin-top: 30px\r\n  }\r\n  .accordion {\r\n    max-width: 70%;\r\n    min-width: 150px;\r\n  }\r\n  .description{\r\n    color: black;\r\n    float: left;\r\n  }\r\n  .sort {\r\n  width: 45%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  padding: 8px 16px;\r\n  justify-content: space-between;\r\n}\r\n  .ml {\r\n  margin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXZpZGVvL3NlYXJjaC12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFFRjtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC12aWRlby9zZWFyY2gtdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgbWluLXdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICB9XHJcbiAgLmFjY29yZGlvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbi5zb3J0IHtcclxuICB3aWR0aDogNDUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5tbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/search-video/search-video.component.ts":
/*!********************************************************!*\
  !*** ./src/app/search-video/search-video.component.ts ***!
  \********************************************************/
/*! exports provided: SearchVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVideoComponent", function() { return SearchVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _youtobe_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../youtobe-api.service */ "./src/app/youtobe-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SearchVideoComponent = class SearchVideoComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.date1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](new Date());
        this.date2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](new Date());
        this.toggle = true;
        this.listItem = [];
        this.title = 'exampleMaterial';
        this.panelOpenState = false;
        this.value = '';
        this.nextToken = '';
        this.preToken = '';
        this.length = 99;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15, 20];
        this.listSort = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];
        this.keyAPI = this.keyAPI = sessionStorage.getItem("key");
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.search.nativeElement, "keyup")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.setting.debounce ? this.setting.debounce : 500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => event.target.value))
            .subscribe(val => {
            this.pageSize = this.setting.pageSize ? this.setting.pageSize : 5;
            this.router.navigate([""]);
            this.value = val;
            this.toggle = true;
            this.keyAPI = sessionStorage.getItem("key");
            this.apiService.getDataApi(val, this.setting.pageSize, this.keyAPI).subscribe((data) => {
                if (data) {
                    this.value = val;
                    this.nextToken = data['nextPageToken'];
                    this.listItem = data['items'];
                    this.length = data['pageInfo'].totalResults;
                }
            }, err => {
                if (err.status === 400) {
                    alert("bạn chưa nhập key hoặc key bạn sai");
                }
                else {
                    alert("key bạn het han");
                }
            });
        });
    }
    nextPage(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.pageSize = event.pageSize;
            if (event.pageIndex > event.previousPageIndex) {
                let data = yield this.apiService.getDataApiNext(this.value, this.nextToken, this.pageSize, this.keyAPI);
                this.listItem = data['items'];
                this.nextToken = data['nextPageToken'];
                this.preToken = data['prevPageToken'];
            }
            else if (this.preToken) {
                let data = yield this.apiService.getDataApiPre(this.value, this.preToken, this.pageSize, this.keyAPI);
                this.listItem = data['items'];
                this.nextToken = data['nextPageToken'];
                this.preToken = data['prevPageToken'];
            }
            else {
                this.apiService.getDataApi(this.value, this.pageSize, this.setting.keyAPI).subscribe(data => {
                    this.listItem = data['items'];
                });
            }
        });
    }
    sortData(value) {
        this.apiService.sortDataYoutobe(this.value, this.pageSize, this.setting.keyAPI, value).subscribe((data) => {
            this.listItem = data['items'];
            console.log(data);
        });
    }
};
SearchVideoComponent.ctorParameters = () => [
    { type: _youtobe_api_service__WEBPACK_IMPORTED_MODULE_2__["YoutobeAPIService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search", { static: true })
], SearchVideoComponent.prototype, "search", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchVideoComponent.prototype, "setting", void 0);
SearchVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-video/search-video.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-video.component.css */ "./src/app/search-video/search-video.component.css")).default]
    })
], SearchVideoComponent);



/***/ }),

/***/ "./src/app/setting/setting.component.css":
/*!***********************************************!*\
  !*** ./src/app/setting/setting.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingComponent = class SettingComponent {
    constructor() {
        this.panelOpenState = false;
    }
    ngOnInit() {
    }
};
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.css */ "./src/app/setting/setting.component.css")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/view-video/view-video.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-video/view-video.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dot {\r\n  color: var(--yt-spec-text-secondary);\r\n  font-size: 1.4rem;\r\n  font-weight: 500;\r\n  vertical-align: bottom;\r\n}\r\n.mr {\r\n    margin-right: 8px;\r\n}\r\n.pl {\r\n    padding-left: 5px;\r\n}\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy12aWRlby92aWV3LXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdmlldy12aWRlby92aWV3LXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG90IHtcclxuICBjb2xvcjogdmFyKC0teXQtc3BlYy10ZXh0LXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcbi5tciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ucGwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/view-video/view-video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-video/view-video.component.ts ***!
  \****************************************************/
/*! exports provided: ViewVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVideoComponent", function() { return ViewVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _youtobe_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../youtobe-api.service */ "./src/app/youtobe-api.service.ts");




let ViewVideoComponent = class ViewVideoComponent {
    constructor(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.id = '';
    }
    ngOnInit() {
        this.route.params.subscribe((param) => {
            let key = sessionStorage.getItem("key");
            this.id = 'https://www.youtube.com/embed/' + param.id;
            this.apiService.getDataItem(param.id, key).subscribe((data) => {
                this.dataItem = data['items'][0];
                console.log(this.dataItem);
            });
            this.apiService.getView(param.id, key).subscribe((data) => {
                this.dataView = data['items'][0].statistics;
            });
        });
    }
};
ViewVideoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _youtobe_api_service__WEBPACK_IMPORTED_MODULE_3__["YoutobeAPIService"] }
];
ViewVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-video/view-video.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-video.component.css */ "./src/app/view-video/view-video.component.css")).default]
    })
], ViewVideoComponent);



/***/ }),

/***/ "./src/app/youtobe-api.service.ts":
/*!****************************************!*\
  !*** ./src/app/youtobe-api.service.ts ***!
  \****************************************/
/*! exports provided: YoutobeAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutobeAPIService", function() { return YoutobeAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const configHTTP = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    key: 'AIzaSyAPNM_yK_l-kNqtnQ4lcRHgcEgcb6R8Vxo',
    part: 'snippet',
    type: 'video'
};
let YoutobeAPIService = class YoutobeAPIService {
    constructor(http) {
        this.http = http;
    }
    getDataApi(value, page, key) {
        return this.http.get(configHTTP.url, {
            params: {
                key: key,
                part: configHTTP.part,
                type: configHTTP.type,
                q: value,
                maxResults: page,
            }
        });
    }
    sortDataYoutobe(value, page, key, order) {
        return this.http.get(configHTTP.url, {
            params: {
                key: key,
                part: configHTTP.part,
                type: configHTTP.type,
                q: value,
                maxResults: page,
                order: order
            }
        });
    }
    getDataApiNext(value, nextPageToken, page, key) {
        return this.http.get(configHTTP.url, {
            params: {
                key: key,
                part: configHTTP.part,
                type: configHTTP.type,
                q: value,
                pageToken: nextPageToken,
                maxResults: page,
            }
        }).toPromise();
    }
    getDataApiPre(value, prevPageToken, page, key) {
        return this.http.get(configHTTP.url, {
            params: {
                key: key,
                part: configHTTP.part,
                type: configHTTP.type,
                q: value,
                pageToken: prevPageToken,
                maxResults: page,
            }
        }).toPromise();
    }
    getDataItem(id, key) {
        return this.http.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                key: key,
                part: 'snippet',
                id: id,
            }
        });
    }
    getView(id, key) {
        return this.http.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                key: key,
                part: 'statistics',
                id: id,
            }
        });
    }
};
YoutobeAPIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
YoutobeAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], YoutobeAPIService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angularjs\exampleMaterial\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map