(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./articleModule/article.module": [
		"./src/app/articleModule/article.module.ts",
		"common",
		"articleModule-article-module"
	],
	"./userModule/user.module": [
		"./src/app/userModule/user.module.ts",
		"common",
		"userModule-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authModule/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authModule/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n\n            <div class=\"col-md-6 offset-md-3 col-xs-12\">\n                <h1 class=\"text-xs-center\">Sign in</h1>\n                <p class=\"text-xs-center\">\n                    <a [routerLink]=\"['/register']\">Need an account?</a>\n                </p>\n                <ul class=\"error-messages\" *ngIf=\"errorResponse\">\n                    <li>{{ errorResponse }}</li>\n                </ul>\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\"\n                            formControlName=\"email\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"userForm.controls.email?.errors?.required && userForm.controls.email?.touched\">\n                        <li>Email is required</li>\n                    </ul>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"userForm.controls.email?.errors?.pattern && userForm.controls.email?.touched\">\n                        <li>Not type email</li>\n                    </ul>\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                            formControlName=\"password\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"userForm.controls.password?.errors?.required && userForm.controls.password?.touched\">\n                        <li>Password is required</li>\n                    </ul>\n                    <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"userForm.invalid\">\n                        Sign in\n                    </button>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authModule/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authModule/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n            <div class=\"col-md-6 offset-md-3 col-xs-12\">\n                <h1 class=\"text-xs-center\">Sign up</h1>\n                <p class=\"text-xs-center\">\n                    <a [routerLink]=\"['/login']\">Have an account?</a>\n                </p>\n                <ul class=\"error-messages\" *ngIf=\"errregister\">\n                    <li>{{errregister[0]}}</li>\n                </ul>\n                <form (ngSubmit)=\"singup()\" [formGroup]=\"formUser\">\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Your Name\"\n                            formControlName=\"username\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"formUser.controls.username?.errors?.required && formUser.controls.username?.touched\">\n                        <li>username is required</li>\n                    </ul>\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"email\" placeholder=\"Email\"\n                            formControlName=\"email\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"formUser.controls.email?.errors?.required && formUser.controls.email?.touched\">\n                        <li>Email is required</li>\n                    </ul>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"formUser.controls.email?.errors?.pattern && formUser.controls.email?.touched\">\n                        <li>Not type email</li>\n                    </ul>\n                    <fieldset class=\"form-group\">\n                        <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                            formControlName=\"password\">\n                    </fieldset>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"formUser.controls.password?.errors?.required && formUser.controls.password?.touched\">\n                        <li>Password is required</li>\n                    </ul>\n                    <ul class=\"error-messages\"\n                        *ngIf=\"formUser.controls.password?.errors?.minlength && formUser.controls.password?.touched\">\n                        <li>Password min lenght 7</li>\n                    </ul>\n                    <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"formUser.invalid\">\n                        Sign up\n                    </button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/button/favorite-button/favorite-button.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/button/favorite-button/favorite-button.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-sm\" [ngClass]=\"article.favorited  ? 'btn-primary': 'btn-outline-primary'\"\n    (click)=\"onChangeFavorite()\">\n    <i class=\"ion-heart\"></i> {{ text ? text : ''}} {{article.favoritesCount}}\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/button/following-button/following-button.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/button/following-button/following-button.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-sm btn-outline-secondary action-btn\"\n(click)=\"clickFollowUser()\">\n<i class=\"ion-plus-round\" *ngIf=\"!dataProfile?.following\"></i>\n&nbsp;\n{{dataProfile?.following ? 'Unfollow' : 'Follow'}} {{dataProfile?.username}}\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start footer -->\n<footer>\n    <div class=\"container\">\n      <a class=\"logo-font\">conduit</a>\n      <span class=\"attribution\">\n        An interactive learning project from <a>Thinkster</a>. Code &amp; design licensed\n        under MIT.\n      </span>\n    </div>\n  </footer>\n<!-- End footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" [routerLink]=\"['']\">conduit</a>\n        <ul class=\"nav navbar-nav pull-xs-right\">\n            <li class=\"nav-item\">\n                <!-- Add \"active\" class when you're on that page\" -->\n                <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\"\n                    [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/article/new/editor\" routerLinkActive=\"active\" *ngIf=\"isLogin\">\n                    <i class=\"ion-compose\"></i>&nbsp;New Post\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/profile/setting\" routerLinkActive=\"active\" *ngIf=\"isLogin\">\n                    <i class=\"ion-gear-a\"></i>&nbsp;Settings\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"login\" routerLinkActive=\"active\" *ngIf=\"!isLogin\">Sign in</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"register\" routerLinkActive=\"active\" *ngIf=\"!isLogin\">Sign up</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"isLogin\">\n                <span><a class=\"nav-link\" [routerLink]=\"['profile/',userName]\" routerLinkActive=\"active\"> <img [src]=\"urlImage !== null ? urlImage : 'https://static.productionready.io/images/smiley-cyrus.jpg'\" class=\"user-pic\">{{userName}}</a></span>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"logOut()\" *ngIf=\"isLogin\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/listArticle/list-article.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/listArticle/list-article.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-preview\" *ngFor=\"let item of listArticle; let i = index\">\n    <div class=\"article-meta\">\n        <a><img [src]=\"item.author.image ? item.author.image : imgNull\" /></a>\n        <div class=\"info\">\n            <a [routerLink]=\"['/profile/',item?.author?.username]\" class=\"author\">{{item?.author?.username}}</a>\n            <span class=\"date\">{{item?.updatedAt | date:'fullDate'}}</span>\n        </div>\n        <app-favorite-button [article]=\"item\" (changeFavorite)=\"emitChangeFavorite($event, i)\" class=\"pull-xs-right\"></app-favorite-button>\n    </div>\n    <a [routerLink]=\"['/article/',item.slug]\" class=\"preview-link\">\n        <h1>{{item?.title}}</h1>\n        <p>{{item?.description}}</p>\n        <span>Read more...</span>\n        <ul class=\"tag-list\">\n            <li class=\"tag-default text-dark tag-pill tag-outline ng-binding ng-scope\"\n                *ngFor=\"let item of item.tagList\">{{item}}</li>\n        </ul>\n    </a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/pagination/pagination.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/pagination/pagination.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination mt-3\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n        <a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n        <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\n        <a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n        <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n        <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n    </li>\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homePage/home-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homePage/home-page.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-page\" *ngIf=\"listArticle\">\n    <div class=\"banner\" *ngIf=\"!isLogin\">\n        <div class=\"container\">\n            <h1 class=\"logo-font\">conduit</h1>\n            <p>A place to share your knowledge.</p>\n        </div>\n    </div>\n    <div class=\"container page\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"feed-toggle\">\n                    <ul class=\"nav nav-pills outline-active\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" *ngIf=\"isLogin\" [ngClass]=\"tab == 1 ? 'active' : ''\"\n                                (click)=\"clickYourFeed()\">Your Feed</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [ngClass]=\"tab == 2 ? 'active' : ''\" (click)=\"clickGlobalFeed()\">Global\n                                Feed</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" *ngIf=\"toggleTab\" [ngClass]=\"tab == 3 ? 'active' : ''\">#\n                                {{namePopularTag}}</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"article-preview\" *ngIf=\"loadingArticle\">Loading article...</div>\n                <div *ngIf=\"!loadingArticle\">\n                    <app-list-article [listArticle]='listArticle'  *ngIf=\"listArticle\">\n                    </app-list-article>\n                    <div class=\"article-preview\" *ngIf=\"listArticle?.length === 0\">No articles are here... yet.</div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"sidebar\">\n                    <p>Popular Tags</p>\n                    <div class=\"tag-list\">\n                        <a class=\"tag-pill tag-default\" *ngFor=\"let tag of listTabs\"\n                            (click)=\"clickPopularTags(tag)\">{{tag}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"listArticle?.length !== 0\">\n            <app-pagination [pager]=\"pager\" (clickPage)=\"setPage($event)\"></app-pagination>\n        </div>\n    </div>\n</div>");

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
/* harmony import */ var _homePage_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage/home-page.component */ "./src/app/homePage/home-page.component.ts");




const routes = [
    { path: '', component: _homePage_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'profile', loadChildren: './userModule/user.module#UserModule' },
    { path: 'article', loadChildren: './articleModule/article.module#ArticleModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'projectApp';
    }
};
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homePage_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homePage/home-page.component */ "./src/app/homePage/home-page.component.ts");
/* harmony import */ var _authModule_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authModule/auth.module */ "./src/app/authModule/auth.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _homePage_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _authModule_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppService = class AppService {
    constructor() { }
    getError(err) {
        let error = err.error.errors;
        let key = Object.keys(error);
        let mes = [];
        key.forEach(ele => {
            mes.push(ele + ' ' + error[ele]);
        });
        return mes;
    }
    range(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;
        if (totalPages <= 9) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 5) {
                startPage = 1;
                endPage = 9;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 8;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 4;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = this.range(startPage, endPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/articleModule/article.service.ts":
/*!**************************************************!*\
  !*** ./src/app/articleModule/article.service.ts ***!
  \**************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ArticleService = class ArticleService {
    constructor(http) {
        this.http = http;
        this.urlHome = 'https://conduit.productionready.io/api/';
    }
    setToken() {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': `Token ${localStorage.getItem("token")}`
        });
    }
    getYourArticle(offset, limit = '10') {
        this.setToken();
        return this.http.get(this.urlHome + 'articles/feed', {
            params: {
                limit: limit,
                offset: offset,
            },
            headers: this.headers
        });
    }
    getGlobalArticle(isLogin, offset) {
        if (isLogin) {
            this.setToken();
            return this.http.get(this.urlHome + 'articles', {
                params: {
                    limit: '10',
                    offset: offset,
                },
                headers: this.headers,
            });
        }
        return this.http.get(this.urlHome + 'articles', {
            params: {
                limit: '10',
                offset: offset
            }
        });
    }
    getTabs() {
        return this.http.get(this.urlHome + 'tags');
    }
    getTabArticle(tab, isLogin, offset) {
        if (isLogin) {
            this.setToken();
            return this.http.get(this.urlHome + `articles`, {
                params: {
                    limit: '10',
                    offset: offset,
                    tag: tab
                },
                headers: this.headers
            });
        }
        return this.http.get(this.urlHome + `articles`, {
            params: {
                limit: '10',
                offset: '0',
                tag: tab
            }
        });
    }
    getMyArticle(name, isLogin, offset, limit = '10') {
        if (isLogin) {
            this.setToken();
            return this.http.get(this.urlHome + 'articles', {
                params: {
                    limit: limit,
                    offset: offset,
                    author: name,
                },
                headers: this.headers
            });
        }
        return this.http.get(this.urlHome + 'articles', {
            params: {
                limit: limit,
                offset: offset,
                author: name,
            }
        });
    }
    getYourArticlefavorite(name, isLogin, offset) {
        if (isLogin) {
            this.setToken();
            return this.http.get(this.urlHome + 'articles', {
                params: {
                    limit: '5',
                    offset: offset,
                    favorited: name
                },
                headers: this.headers
            });
        }
        return this.http.get(this.urlHome + 'articles', {
            params: {
                limit: '5',
                offset: offset,
                favorited: name
            }
        });
    }
    postFavoriteArticle(slug) {
        this.setToken();
        return this.http.post(this.urlHome + `articles/${slug}/favorite`, { name: 'abc' }, {
            headers: this.headers
        });
    }
    deleteFavoriteArticle(slug) {
        this.setToken();
        return this.http.delete(this.urlHome + `articles/${slug}/favorite`, {
            headers: this.headers
        });
    }
    postFollowUser(userName) {
        this.setToken();
        return this.http.post(this.urlHome + `profiles/${userName}/follow`, { name: 'abc' }, {
            headers: this.headers
        });
    }
    deleteFollowUser(userName) {
        this.setToken();
        return this.http.delete(this.urlHome + `profiles/${userName}/follow`, {
            headers: this.headers
        });
    }
    getArticleDetail(slug) {
        this.setToken();
        if (localStorage.getItem('token')) {
            return this.http.get(this.urlHome + `articles/${slug}`, {
                headers: this.headers
            });
        }
        return this.http.get(this.urlHome + `articles/${slug}`);
    }
    // Create Article
    postNewArticle(article) {
        this.setToken();
        return this.http.post(this.urlHome + 'articles', { article: article }, {
            headers: this.headers
        });
    }
    updateArticle(article, slug) {
        this.setToken();
        return this.http.put(this.urlHome + `articles/${slug}`, { article: article }, {
            headers: this.headers
        });
    }
    deleteArticle(slug) {
        this.setToken();
        return this.http.delete(this.urlHome + `articles/${slug}`, {
            headers: this.headers
        });
    }
    getCommentArticle(slug) {
        return this.http.get(this.urlHome + `articles/${slug}/comments`);
    }
    postCommentArticle(slug, comment) {
        this.setToken();
        return this.http.post(this.urlHome + `articles/${slug}/comments`, {
            comment: comment
        }, {
            headers: this.headers
        });
    }
    deleteCommentArticle(slug, id) {
        this.setToken();
        if (localStorage.getItem('token')) {
            return this.http.delete(this.urlHome + `articles/${slug}/comments/${id}`, {
                headers: this.headers
            });
        }
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArticleService);



/***/ }),

/***/ "./src/app/authModule/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/authModule/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authModule/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authModule/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");





;




const authRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] }
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(authRoutes),
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/authModule/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/authModule/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isLogin = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.name = '';
        this.urlImage = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.url = 'https://conduit.productionready.io/api/users';
        if (localStorage.getItem('token')) {
            this.isLogin = true;
        }
    }
    login(user) {
        return this.http.post(this.url + '/login', { user: user });
    }
    loginSuccess(userData) {
        this.isLogin = true;
        this.name = userData['user'].username;
        this.urlImage = userData['user'].image;
        localStorage.setItem('token', userData['user'].token);
        localStorage.setItem('name', userData['user'].username);
        localStorage.setItem('image', userData['user'].image);
        this.subject.next({ isLogin: this.isLogin, username: this.name, urlImage: this.urlImage });
        this.router.navigate(['']);
    }
    logOut() {
        this.isLogin = false;
        this.name = '';
        this.urlImage = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.subject.next({ isLogin: this.isLogin, username: this.name, urlImage: this.urlImage });
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('image');
        this.router.navigate(['login']);
    }
    checkLoginNavigate() {
        if (!this.isLogin) {
            this.router.navigateByUrl("");
        }
        return this.isLogin;
    }
    postUser(user) {
        return this.http.post(this.url, { user: user });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/authModule/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/authModule/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhNb2R1bGUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/authModule/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/authModule/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/authModule/auth.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, fb, appService) {
        this.authService = authService;
        this.fb = fb;
        this.appService = appService;
        this.userForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]]
        });
    }
    ngOnInit() {
    }
    login() {
        this.authService.login(this.userForm.value).subscribe((data) => {
            this.authService.loginSuccess(data);
        }, err => {
            this.errorResponse = this.appService.getError(err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authModule/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/authModule/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/authModule/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/authModule/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhNb2R1bGUvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/authModule/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authModule/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/authModule/auth.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(fb, authService, appService) {
        this.fb = fb;
        this.authService = authService;
        this.appService = appService;
        this.formUser = fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]]
        });
    }
    ngOnInit() {
    }
    singup() {
        console.log(this.formUser.value);
        this.authService.postUser(this.formUser.value).subscribe((data) => {
            this.authService.loginSuccess(data);
            console.log(data);
        }, err => {
            this.errregister = this.appService.getError(err);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authModule/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/authModule/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/component/button/favorite-button/favorite-button.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/component/button/favorite-button/favorite-button.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9idXR0b24vZmF2b3JpdGUtYnV0dG9uL2Zhdm9yaXRlLWJ1dHRvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/button/favorite-button/favorite-button.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/button/favorite-button/favorite-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FavoriteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return FavoriteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_articleModule_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/articleModule/article.service */ "./src/app/articleModule/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FavoriteButtonComponent = class FavoriteButtonComponent {
    constructor(articleService, router) {
        this.articleService = articleService;
        this.router = router;
        this.changeFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onChangeFavorite() {
        if (localStorage.getItem('token')) {
            if (this.article.favorited == false) {
                this.articleService.postFavoriteArticle(this.article.slug).subscribe(data => {
                    this.changeFavorite.emit(true);
                });
            }
            else if (this.article.favorited == true) {
                this.articleService.deleteFavoriteArticle(this.article.slug).subscribe(data => {
                    this.changeFavorite.emit(false);
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
};
FavoriteButtonComponent.ctorParameters = () => [
    { type: src_app_articleModule_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FavoriteButtonComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FavoriteButtonComponent.prototype, "article", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FavoriteButtonComponent.prototype, "changeFavorite", void 0);
FavoriteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/button/favorite-button/favorite-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite-button.component.css */ "./src/app/component/button/favorite-button/favorite-button.component.css")).default]
    })
], FavoriteButtonComponent);



/***/ }),

/***/ "./src/app/component/button/following-button/following-button.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/component/button/following-button/following-button.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9idXR0b24vZm9sbG93aW5nLWJ1dHRvbi9mb2xsb3dpbmctYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/button/following-button/following-button.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/button/following-button/following-button.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FollowingButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingButtonComponent", function() { return FollowingButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_articleModule_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/articleModule/article.service */ "./src/app/articleModule/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FollowingButtonComponent = class FollowingButtonComponent {
    constructor(articleService, router) {
        this.articleService = articleService;
        this.router = router;
        this.changeFollow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clickFollowUser() {
        if (localStorage.getItem('token')) {
            if (!this.dataProfile.following) {
                this.articleService.postFollowUser(this.dataProfile.username).subscribe(data => {
                    this.changeFollow.emit(true);
                });
            }
            else {
                this.articleService.deleteFollowUser(this.dataProfile.username).subscribe(data => {
                    this.changeFollow.emit(false);
                });
            }
        }
        else {
            this.router.navigate(['login']);
        }
    }
};
FollowingButtonComponent.ctorParameters = () => [
    { type: src_app_articleModule_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FollowingButtonComponent.prototype, "dataProfile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FollowingButtonComponent.prototype, "changeFollow", void 0);
FollowingButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-following-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./following-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/button/following-button/following-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./following-button.component.css */ "./src/app/component/button/following-button/following-button.component.css")).default]
    })
], FollowingButtonComponent);



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_authModule_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authModule/auth.service */ "./src/app/authModule/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
        this.userName = '';
        this.urlImage = 'https://static.productionready.io/images/smiley-cyrus.jpg';
    }
    ngOnInit() {
        this.authService.subject.subscribe(data => {
            this.isLogin = data['isLogin'];
            this.userName = data['username'];
            this.urlImage = data['urlImage'];
        });
        if (localStorage.getItem('token')) {
            this.isLogin = true;
            this.userName = localStorage.getItem('name');
            this.urlImage = localStorage.getItem('image');
        }
    }
    logOut() {
        this.authService.logOut();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_authModule_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/listArticle/list-article.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/listArticle/list-article.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9saXN0QXJ0aWNsZS9saXN0LWFydGljbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/listArticle/list-article.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/listArticle/list-article.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListArticleComponent", function() { return ListArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListArticleComponent = class ListArticleComponent {
    constructor() {
        this.unFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    emitChangeFavorite(favorited, index) {
        this.listArticle[index]['favorited'] = favorited;
        if (favorited) {
            this.listArticle[index]['favoritesCount']++;
        }
        else {
            if (this.tab == 2) {
                this.unFavorite.emit();
            }
            this.listArticle[index]['favoritesCount']--;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListArticleComponent.prototype, "tab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListArticleComponent.prototype, "listArticle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListArticleComponent.prototype, "unFavorite", void 0);
ListArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-article',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/listArticle/list-article.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-article.component.css */ "./src/app/component/listArticle/list-article.component.css")).default]
    })
], ListArticleComponent);



/***/ }),

/***/ "./src/app/component/pagination/pagination.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/component/pagination/pagination.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.ts ***!
  \**************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.clickPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    setPage(page) {
        this.clickPage.emit(page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "pager", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "clickPage", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/component/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/homePage/home-page.component.css":
/*!**************************************************!*\
  !*** ./src/app/homePage/home-page.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVQYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/homePage/home-page.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homePage/home-page.component.ts ***!
  \*************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _articleModule_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articleModule/article.service */ "./src/app/articleModule/article.service.ts");
/* harmony import */ var _authModule_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authModule/auth.service */ "./src/app/authModule/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");






let HomePageComponent = class HomePageComponent {
    constructor(articleService, appService, authService, router) {
        this.articleService = articleService;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.loadingArticle = true;
        this.toggleTab = false;
        this.tab = 2;
        this.imgNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.namePopularTag = '';
        //pages
        this.pager = {};
        this.isLogin = localStorage.getItem('token') ? true : false;
    }
    ngOnInit() {
        this.setPage(1);
        this.articleService.getTabs().subscribe(data => {
            this.listTabs = data['tags'];
        });
    }
    clickYourFeed() {
        this.tab = 1;
        this.toggleTab = false;
        this.setPage(1);
    }
    clickGlobalFeed() {
        this.tab = 2;
        this.toggleTab = false;
        this.setPage(1);
    }
    clickPopularTags(nameTab) {
        this.namePopularTag = nameTab;
        this.tab = 3;
        this.toggleTab = true;
        this.setPage(1);
    }
    setPage(page) {
        this.loadingArticle = true;
        this.listArticle = [];
        let offSetPage = (page - 1) * 10;
        if (page < 1 || page > this.pager.totalPages) {
            offSetPage = 0;
        }
        switch (this.tab) {
            case 1:
                this.articleService.getYourArticle(offSetPage).subscribe((data) => {
                    this.listArticle = data['articles'];
                    this.loadingArticle = false;
                    this.total = data['articlesCount'];
                    this.pager = this.appService.getPager(this.total, page, 10);
                });
                break;
            case 2:
                this.articleService.getGlobalArticle(this.isLogin, offSetPage).subscribe(data => {
                    this.listArticle = data['articles'];
                    this.loadingArticle = false;
                    this.total = data['articlesCount'];
                    this.pager = this.appService.getPager(this.total, page, 10);
                });
                break;
            case 3:
                this.articleService.getTabArticle(this.namePopularTag, this.isLogin, offSetPage).subscribe((data) => {
                    this.listArticle = data['articles'];
                    this.loadingArticle = false;
                    this.total = data['articlesCount'];
                    this.pager = this.appService.getPager(this.total, page, 10);
                });
                break;
        }
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _articleModule_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _authModule_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homePage/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/homePage/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _authModule_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authModule/auth.service */ "./src/app/authModule/auth.service.ts");
/* harmony import */ var _component_listArticle_list_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/listArticle/list-article.component */ "./src/app/component/listArticle/list-article.component.ts");
/* harmony import */ var _component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/pagination/pagination.component */ "./src/app/component/pagination/pagination.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_button_following_button_following_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/button/following-button/following-button.component */ "./src/app/component/button/following-button/following-button.component.ts");
/* harmony import */ var _component_button_favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/button/favorite-button/favorite-button.component */ "./src/app/component/button/favorite-button/favorite-button.component.ts");
var SharedModule_1;










let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [_authModule_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _component_listArticle_list_article_component__WEBPACK_IMPORTED_MODULE_5__["ListArticleComponent"],
            _component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
            _component_button_following_button_following_button_component__WEBPACK_IMPORTED_MODULE_8__["FollowingButtonComponent"],
            _component_button_favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_9__["FavoriteButtonComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ],
        exports: [
            _component_listArticle_list_article_component__WEBPACK_IMPORTED_MODULE_5__["ListArticleComponent"],
            _component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
            _component_button_following_button_following_button_component__WEBPACK_IMPORTED_MODULE_8__["FollowingButtonComponent"],
            _component_button_favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_9__["FavoriteButtonComponent"],
        ]
    })
], SharedModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mock_project\projectApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map