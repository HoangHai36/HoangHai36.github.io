(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userModule-user-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userModule/profile-page/profile-page.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userModule/profile-page/profile-page.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page\">\n    <div class=\"user-info\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-10 offset-md-1\">\n                    <img [src]=\"dataProfile?.image ? dataProfile.image : imgNull\" class=\"user-img\" />\n                    <h4>{{dataProfile?.username}}</h4>\n                    <p>\n                        {{dataProfile?.bio}}\n                    </p>\n                    <app-following-button *ngIf=\"!check\" [dataProfile]=\"dataProfile\"\n                        (changeFollow)=\"onChangeFollow($event)\"></app-following-button>\n                    <button class=\"btn btn-sm btn-outline-secondary action-btn\" *ngIf=\"check\"\n                        routerLink=\"/profile/setting\" routerLinkActive=\"router-link-active\">\n                        <i class=\"ion-gear-a\"></i>\n                        &nbsp;\n                        Edit Profile Settings\n                    </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-10 offset-md-1\">\n                <div class=\"articles-toggle\">\n                    <ul class=\"nav nav-pills outline-active\">\n                        <li class=\"nav-item\" (click)=\"clickMyArticle()\">\n                            <a class=\"nav-link\" [ngClass]=\"tab == 1 ? 'active' : ''\">My Articles</a>\n                        </li>\n                        <li class=\"nav-item\" (click)=\"clickFavoritedArticle()\">\n                            <a class=\"nav-link\" [ngClass]=\"tab == 2 ? 'active' : ''\">Favorited Articles</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"article-preview\" *ngIf=\"loadingArticle\">Loading article...</div>\n                <div *ngIf=\"!loadingArticle\">\n                    <app-list-article [listArticle]='listArticle' *ngIf=\"listArticle\" [tab]=\"tab\" (unFavorite)=\"deleteArticleFavorite()\">\n                    </app-list-article>\n                    <div class=\"article-preview\" *ngIf=\"listArticle?.length === 0\">No articles are here... yet.</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-10 offset-md-1\">\n                <app-pagination [pager]=\"pager\" (clickPage)=\"setPage($event)\" *ngIf=\"!loadingArticle\"></app-pagination>\n            </div>\n        </div>\n\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userModule/setting-page/setting-page.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userModule/setting-page/setting-page.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"settings-page\">\n    <div class=\"container page\">\n      <div class=\"row\">\n  \n        <div class=\"col-md-6 offset-md-3 col-xs-12\">\n          <h1 class=\"text-xs-center\">Your Settings</h1>\n          <ul class=\"error-messages\" *ngIf=\"errSetting\">\n            <li *ngFor=\"let err of errSetting\">{{err}}</li>\n          </ul>\n          <form [formGroup]=\"formSetting\">\n            <fieldset>\n              <fieldset class=\"form-group\">\n                <img [src]=\"urlImage? urlImage : urlNull\" height=\"200\"> <br />\n                <input type='file' (change)=\"onSelectFile($event)\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Your Name\" formControlName=\"username\"\n                  value=\"dataUser.username\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                <textarea class=\"form-control form-control-lg\" rows=\"8\" placeholder=\"Short bio about you\"\n                  formControlName=\"bio\"></textarea>\n              </fieldset>\n              <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n              </fieldset>\n              <fieldset class=\"form-group\">\n                <input class=\"form-control form-control-lg\" type=\"password\" placeholder=\"Password\"\n                  formControlName=\"password\">\n              </fieldset>\n              <button class=\"btn btn-lg btn-primary pull-xs-right\" (click)=\"updateSetting()\">\n                Update Settings\n              </button>\n            </fieldset>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./src/app/userModule/profile-page/profile-page.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/userModule/profile-page/profile-page.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/userModule/profile-page/profile-page.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/userModule/profile-page/profile-page.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ProfilePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function () { return ProfilePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_articleModule_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/articleModule/article.service */ "./src/app/articleModule/article.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/userModule/user.service.ts");
            /* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
            var ProfilePageComponent = /** @class */ (function () {
                function ProfilePageComponent(route, articleService, userService, appService, router) {
                    this.route = route;
                    this.articleService = articleService;
                    this.userService = userService;
                    this.appService = appService;
                    this.router = router;
                    this.check = false;
                    this.loadingArticle = true;
                    this.isLogin = false;
                    this.imgNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
                    this.tab = 1;
                    this.page = 0;
                    this.pager = {};
                }
                ProfilePageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (param) {
                        if (param.username == localStorage.getItem('name')) {
                            _this.check = true;
                        }
                        else {
                            _this.check = false;
                        }
                        _this.name = param.username;
                        _this.userService.getProfile(_this.name).subscribe(function (data) {
                            _this.dataProfile = data['profile'];
                        });
                        _this.setPage(1);
                    });
                };
                ProfilePageComponent.prototype.clickFavoritedArticle = function () {
                    this.tab = 2;
                    this.setPage(1);
                };
                ProfilePageComponent.prototype.clickMyArticle = function () {
                    this.tab = 1;
                    this.setPage(1);
                };
                ProfilePageComponent.prototype.onChangeFollow = function (following) {
                    this.dataProfile.following = following;
                };
                ProfilePageComponent.prototype.deleteArticleFavorite = function () {
                    this.setPage(1);
                };
                ProfilePageComponent.prototype.setPage = function (page) {
                    var _this = this;
                    this.isLogin = localStorage.getItem('token') ? true : false;
                    this.loadingArticle = true;
                    var offSetPage = (page - 1) * 5;
                    if (page < 1 || page > this.pager.totalPages) {
                        offSetPage = 0;
                    }
                    switch (this.tab) {
                        case 1:
                            this.articleService.getMyArticle(this.name, this.isLogin, offSetPage, '5').subscribe(function (data) {
                                _this.loadingArticle = false;
                                _this.listArticle = data['articles'];
                                _this.total1 = data['articlesCount'];
                                _this.pager = _this.appService.getPager(_this.total1, page, 5);
                            });
                            break;
                        case 2:
                            this.articleService.getYourArticlefavorite(this.name, this.isLogin, offSetPage).subscribe(function (data) {
                                _this.listArticle = data['articles'];
                                _this.loadingArticle = false;
                                _this.total2 = data['articlesCount'];
                                _this.pager = _this.appService.getPager(_this.total2, page, 5);
                            });
                            break;
                    }
                };
                return ProfilePageComponent;
            }());
            ProfilePageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_articleModule_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            ProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userModule/profile-page/profile-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-page.component.css */ "./src/app/userModule/profile-page/profile-page.component.css")).default]
                })
            ], ProfilePageComponent);
            /***/ 
        }),
        /***/ "./src/app/userModule/setting-page/setting-page.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/userModule/setting-page/setting-page.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvc2V0dGluZy1wYWdlL3NldHRpbmctcGFnZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/userModule/setting-page/setting-page.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/userModule/setting-page/setting-page.component.ts ***!
          \*******************************************************************/
        /*! exports provided: SettingPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageComponent", function () { return SettingPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/userModule/user.service.ts");
            /* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
            var SettingPageComponent = /** @class */ (function () {
                function SettingPageComponent(userService, router, appService, fb) {
                    this.userService = userService;
                    this.router = router;
                    this.appService = appService;
                    this.fb = fb;
                    this.urlNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
                    this.errSetting = [];
                    this.formSetting = this.fb.group({
                        username: '',
                        email: '',
                        password: '',
                        bio: ''
                    });
                }
                SettingPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getUser().subscribe(function (data) {
                        _this.dataUser = data['user'];
                        _this.urlNull = _this.dataUser.image ? _this.dataUser.image : '';
                        _this.formSetting = _this.fb.group({
                            username: _this.dataUser.username,
                            email: _this.dataUser.email,
                            password: '',
                            bio: _this.dataUser.bio
                        });
                    });
                };
                SettingPageComponent.prototype.onSelectFile = function (event) {
                    var _this = this;
                    if (event.target.files && event.target.files[0]) {
                        var reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]); // read file as data url
                        reader.onload = function (event) {
                            _this.urlImage = event.target['result'];
                        };
                    }
                };
                SettingPageComponent.prototype.updateSetting = function () {
                    var _this = this;
                    this.dataSetting = this.formSetting.value;
                    if (!this.formSetting.controls.password.value) {
                        delete this.dataSetting.password;
                    }
                    if (this.urlImage) {
                        this.dataSetting['image'] = this.urlImage;
                        localStorage.setItem('image', this.urlImage);
                    }
                    this.userService.updateSetting(this.dataSetting).subscribe(function (data) {
                        _this.router.navigate(['/profile/', localStorage.getItem('name')]);
                    }, function (err) {
                        _this.errSetting = _this.appService.getError(err);
                    });
                };
                return SettingPageComponent;
            }());
            SettingPageComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            SettingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-setting-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userModule/setting-page/setting-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting-page.component.css */ "./src/app/userModule/setting-page/setting-page.component.css")).default]
                })
            ], SettingPageComponent);
            /***/ 
        }),
        /***/ "./src/app/userModule/user.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/userModule/user.module.ts ***!
          \*******************************************/
        /*! exports provided: UserModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function () { return UserModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/userModule/profile-page/profile-page.component.ts");
            /* harmony import */ var _setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-page/setting-page.component */ "./src/app/userModule/setting-page/setting-page.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
            var userRouters = [
                {
                    path: '', children: [
                        { path: 'setting', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], component: _setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_6__["SettingPageComponent"] },
                        { path: ':username', component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"] },
                    ]
                }
            ];
            var UserModule = /** @class */ (function () {
                function UserModule() {
                }
                return UserModule;
            }());
            UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"],
                        _setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_6__["SettingPageComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(userRouters)
                    ]
                })
            ], UserModule);
            /***/ 
        }),
        /***/ "./src/app/userModule/user.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/userModule/user.service.ts ***!
          \********************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.urlUser = 'https://conduit.productionready.io/api/user';
                    this.urlProfiles = 'https://conduit.productionready.io/api/profiles/';
                }
                UserService.prototype.setTokenUser = function () {
                    this.headersUser = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Authorization': "Token " + localStorage.getItem("token")
                    });
                };
                UserService.prototype.getUser = function () {
                    this.setTokenUser();
                    return this.http.get(this.urlUser, {
                        headers: this.headersUser
                    });
                };
                UserService.prototype.updateSetting = function (user) {
                    this.setTokenUser();
                    return this.http.put(this.urlUser, {
                        user: user,
                    }, {
                        headers: this.headersUser
                    });
                };
                UserService.prototype.getProfile = function (name) {
                    if (localStorage.getItem('name')) {
                        this.setTokenUser();
                        return this.http.get(this.urlProfiles + ("" + name), {
                            headers: this.headersUser
                        });
                    }
                    return this.http.get(this.urlProfiles + ("" + name));
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        })
    }]);
//# sourceMappingURL=userModule-user-module-es2015.js.map
//# sourceMappingURL=userModule-user-module-es5.js.map
//# sourceMappingURL=userModule-user-module-es5.js.map