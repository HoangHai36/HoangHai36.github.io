(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articleModule-article-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/article-page/article-page.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/article-page/article-page.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-page\" *ngIf=\"article\">\n    <div class=\"banner\">\n        <div class=\"container\">\n            <h1>{{article?.title}}</h1>\n            <div class=\"article-meta\">\n                <a><img [src]=\"article?.author.image\" /></a>\n                <div class=\"info\">\n                    <a *ngIf=\"article?.author.username\" [routerLink]=\"['/profile/',article?.author.username]\"\n                        class=\"author\">{{article?.author.username}}</a>\n                    <span class=\"date\">{{article?.createdAt | date:'fullDate'}}</span>\n                </div>\n                <app-following-button *ngIf=\"!check\" [dataProfile]=\"article?.author\"\n                    (changeFollow)=\"onChangeFollow($event)\"></app-following-button>\n                &nbsp;\n                <app-favorite-button *ngIf=\"!check\" text=\"Favorite Article\" [article]=\"article\"\n                    (changeFavorite)=\"emitChangeFavorite($event)\">\n                </app-favorite-button>\n                <button class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"check\"\n                    [routerLink]=\"['/article/editor/',article?.slug]\">\n                    <i class=\"ion-edit\"></i>\n                    &nbsp;\n                    Edit Article\n                </button>\n                &nbsp;&nbsp;\n                <button class=\"btn btn-sm btn-outline-danger\" *ngIf=\"check\" (click)=\"deleteArticle()\">\n                    <i class=\"ion-trash-a\"></i>\n                    &nbsp;\n                    Delete Article\n                </button>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"container page\">\n        <div class=\"row article-content\">\n            <div class=\"col-md-12\">\n                <p>\n                    {{article?.body}}\n                </p>\n                <ul class=\"tag-list\">\n                    <li class=\"tag-default text-dark tag-pill tag-outline ng-binding ng-scope\"\n                        *ngFor=\"let item of article?.tagList\">{{item}}</li>\n                </ul>\n            </div>\n        </div>\n        <hr />\n        <div class=\"article-actions\">\n            <div class=\"article-meta\">\n                <a href=\"profile.html\"><img [src]=\"article?.author.image ? article?.author.image : img\" /></a>\n                <div class=\"info\">\n                    <a class=\"author\" *ngIf=\"article?.author.username\"\n                        [routerLink]=\"['/profile/',article?.author.username]\">{{article?.author.username}}</a>\n                    <span class=\"date\">{{article?.createdAt | date:'fullDate'}}</span>\n                </div>\n\n                <app-following-button *ngIf=\"!check\" [dataProfile]=\"article?.author\"\n                    (changeFollow)=\"onChangeFollow($event)\"></app-following-button>\n                &nbsp;\n                <app-favorite-button *ngIf=\"!check\" text=\"Favorite Article\" [article]=\"article\"\n                    (changeFavorite)=\"emitChangeFavorite($event)\">\n                </app-favorite-button>\n                <button class=\"btn btn-sm btn-outline-secondary\" *ngIf=\"check\"\n                    [routerLink]=\"['/article/editor/',article?.slug]\">\n                    <i class=\"ion-edit\"></i>\n                    &nbsp;\n                    Edit Article\n                </button>\n                &nbsp;&nbsp;\n                <button class=\"btn btn-sm btn-outline-danger\" *ngIf=\"check\" (click)=\"deleteArticle()\">\n                    <i class=\"ion-trash-a\"></i>\n                    &nbsp;\n                    Delete Article\n                </button>\n            </div>\n        </div>\n       <app-comment-article></app-comment-article>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/comment-article/comment-article.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/comment-article/comment-article.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12 col-md-8 offset-md-2\">\n        <p *ngIf=\"!isLogin\"><a class=\"text-success\" [routerLink]=\"['/login']\">Sign in</a> or <a class=\"text-success\"\n                [routerLink]=\"['/register']\">Sign up</a> to add comments on this article.\n        </p>\n        <form class=\"card comment-form\" *ngIf=\"isLogin\">\n            <div class=\"card-block\">\n                <textarea class=\"form-control\" placeholder=\"Write a comment...\" rows=\"3\"\n                    (keyup)=\"textBody = $event.target.value\" [value]=\"textBody\"></textarea>\n            </div>\n            <div class=\"card-footer\">\n                <img [src]=\"img? img : imgNull\" class=\"comment-author-img\" />\n                <button class=\"btn btn-sm btn-primary\" (click)=\"postNewComment()\">\n                    Post Comment\n                </button>\n            </div>\n        </form>\n        <div class=\"card\" *ngFor=\"let comment of listComment; let j = index\">\n            <div class=\"card-block\">\n                <p class=\"card-text\">{{comment?.body}}</p>\n            </div>\n            <div class=\"card-footer\">\n                <a href=\"\" class=\"comment-author\">\n                    <img [src]=\"comment?.author?.image\" class=\"comment-author-img\" />\n                </a>\n                &nbsp;\n                <a [routerLink]=\"['/profile/',comment?.author.username]\" class=\"comment-author\">{{comment?.author.username}}</a>\n                <span class=\"mod-options\" *ngIf=\"nameUserIslogin == comment?.author.username\"\n                    (click)=\"deleteComment(comment?.id, j)\"><i class=\"ion-trash-a\"></i></span>\n                <span class=\"date-posted\">{{comment?.createdAt | date:'fullDate'}}</span>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/editor-article/editor-article.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/editor-article/editor-article.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"editor-page\">\n    <div class=\"container page\">\n        <div class=\"row\">\n\n            <div class=\"col-md-10 offset-md-1 col-xs-12\">\n                <ul class=\"error-messages\" *ngIf=\"errNewArticle\">\n                    <li *ngFor=\"let item of errNewArticle\">{{item}}</li>\n                </ul>\n                <form [formGroup]=\"formArticle\">\n                    <fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Article Title\"\n                                formControlName=\"title\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"What's this article about?\"\n                                formControlName=\"description\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <textarea class=\"form-control\" rows=\"8\" placeholder=\"Write your article (in markdown)\"\n                                formControlName=\"body\"></textarea>\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter tags\"\n                                (keyup.enter)=\"pushTab($event)\">\n                            <div class=\"tag-list\">\n                                <span *ngFor=\"let item of tagList; let i = index\"><a class=\"tag-pill tag-default\"><span\n                                            (click)=\"removetab(i)\"><i\n                                                class=\"ion-close-round\"></i></span>{{item}}</a></span>\n                            </div>\n                        </fieldset>\n                        <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" (click)=\"postArticle()\">\n                            Publish Article\n                        </button>\n                    </fieldset>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!-- [disabled]=\"!formArticle.valid\" -->");

/***/ }),

/***/ "./src/app/articleModule/article-page/article-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/articleModule/article-page/article-page.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVNb2R1bGUvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/articleModule/article-page/article-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/articleModule/article-page/article-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ArticlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageComponent", function() { return ArticlePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/articleModule/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ArticlePageComponent = class ArticlePageComponent {
    constructor(articleService, route, router) {
        this.articleService = articleService;
        this.route = route;
        this.router = router;
        this.textBody = '';
        this.imgNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        this.route.params.subscribe(param => {
            this.img = localStorage.getItem('image');
            this.slug = param['slug'];
            this.articleService.getArticleDetail(param.slug).subscribe(article => {
                if (article['article'].author.username == localStorage.getItem('name')) {
                    this.check = true;
                }
                else {
                    this.check = false;
                }
                this.article = article['article'];
            });
        });
    }
    ngOnInit() {
    }
    onChangeFollow(following) {
        this.article.author.following = following;
    }
    emitChangeFavorite(favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    }
    deleteArticle() {
        if (this.check) {
            this.articleService.deleteArticle(this.slug).subscribe(data => {
            });
            this.router.navigate(['/profile/', localStorage.getItem('name')]);
        }
    }
};
ArticlePageComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ArticlePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/article-page/article-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article-page.component.css */ "./src/app/articleModule/article-page/article-page.component.css")).default]
    })
], ArticlePageComponent);



/***/ }),

/***/ "./src/app/articleModule/article.module.ts":
/*!*************************************************!*\
  !*** ./src/app/articleModule/article.module.ts ***!
  \*************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-page/article-page.component */ "./src/app/articleModule/article-page/article-page.component.ts");
/* harmony import */ var _editor_article_editor_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-article/editor-article.component */ "./src/app/articleModule/editor-article/editor-article.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _comment_article_comment_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comment-article/comment-article.component */ "./src/app/articleModule/comment-article/comment-article.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");











const articleRoutes = [
    {
        path: '', children: [
            { path: ':slug', component: _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__["ArticlePageComponent"] },
            { path: 'new/editor', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _editor_article_editor_article_component__WEBPACK_IMPORTED_MODULE_5__["EditorArticleComponent"] },
            { path: 'editor/:slug', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _editor_article_editor_article_component__WEBPACK_IMPORTED_MODULE_5__["EditorArticleComponent"] }
        ]
    }
];
let ArticleModule = class ArticleModule {
};
ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_4__["ArticlePageComponent"],
            _editor_article_editor_article_component__WEBPACK_IMPORTED_MODULE_5__["EditorArticleComponent"],
            _comment_article_comment_article_component__WEBPACK_IMPORTED_MODULE_9__["CommentArticleComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(articleRoutes)
        ]
    })
], ArticleModule);



/***/ }),

/***/ "./src/app/articleModule/comment-article/comment-article.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/articleModule/comment-article/comment-article.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVNb2R1bGUvY29tbWVudC1hcnRpY2xlL2NvbW1lbnQtYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/articleModule/comment-article/comment-article.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/articleModule/comment-article/comment-article.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommentArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentArticleComponent", function() { return CommentArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/articleModule/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CommentArticleComponent = class CommentArticleComponent {
    constructor(articleService, route) {
        this.articleService = articleService;
        this.route = route;
        this.textBody = '';
        this.imgNull = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        if (localStorage.getItem('token')) {
            this.isLogin = true;
            this.nameUserIslogin = localStorage.getItem('name');
        }
        else {
            this.isLogin = false;
        }
        this.route.params.subscribe(param => {
            this.slug = param['slug'];
            this.img = localStorage.getItem('image');
            this.articleService.getCommentArticle(this.slug).subscribe(data => {
                this.listComment = data['comments'];
            });
        });
    }
    ngOnInit() {
    }
    //comment
    postNewComment() {
        if (localStorage.getItem('token')) {
            this.articleService.postCommentArticle(this.slug, { 'body': this.textBody }).subscribe(data => {
                this.listComment.unshift(data['comment']);
            });
        }
        else {
            this.isLogin = false;
        }
        this.textBody = "";
    }
    deleteComment(id, index) {
        if (this.isLogin) {
            this.articleService.deleteCommentArticle(this.slug, id).subscribe(data => {
                this.listComment.splice(index, 1);
            });
        }
    }
};
CommentArticleComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CommentArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment-article',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment-article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/comment-article/comment-article.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comment-article.component.css */ "./src/app/articleModule/comment-article/comment-article.component.css")).default]
    })
], CommentArticleComponent);



/***/ }),

/***/ "./src/app/articleModule/editor-article/editor-article.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/articleModule/editor-article/editor-article.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVNb2R1bGUvZWRpdG9yLWFydGljbGUvZWRpdG9yLWFydGljbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/articleModule/editor-article/editor-article.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/articleModule/editor-article/editor-article.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditorArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorArticleComponent", function() { return EditorArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/articleModule/article.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");






let EditorArticleComponent = class EditorArticleComponent {
    constructor(articleService, appService, route, router, fb) {
        this.articleService = articleService;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.check = false;
        this.tagList = [];
        this.formArticle = fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.route.params.subscribe(param => {
            if (param['slug']) {
                this.check = true;
                this.slug = param['slug'];
                this.articleService.getArticleDetail(param['slug']).subscribe(data => {
                    this.formArticle = fb.group({
                        title: [data['article'].title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        description: [data['article'].description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        body: [data['article'].body, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                    this.tagList = data['article'].tagList;
                });
            }
        });
    }
    ngOnInit() {
    }
    pushTab(event) {
        event.stopPropagation();
        if (event.target['value'] !== '') {
            this.tagList.push(event.target['value']);
        }
        event.target['value'] = '';
    }
    postArticle() {
        this.newArticle = this.formArticle.value;
        if (this.tagList) {
            this.newArticle.tagList = this.tagList;
        }
        if (!this.check) {
            this.articleService.postNewArticle(this.newArticle).subscribe((data) => {
                this.router.navigate(['/article/', data['article']['slug']]);
            }, err => {
                this.errNewArticle = this.appService.getError(err);
            });
        }
        else {
            this.articleService.updateArticle(this.newArticle, this.slug).subscribe((data) => {
                this.router.navigate(['/article/', data['article']['slug']]);
            }, err => {
                this.errNewArticle = this.appService.getError(err);
            });
        }
    }
    removetab(index) {
        this.tagList.splice(index, 1);
    }
};
EditorArticleComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditorArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editor-article',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor-article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/articleModule/editor-article/editor-article.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor-article.component.css */ "./src/app/articleModule/editor-article/editor-article.component.css")).default]
    })
], EditorArticleComponent);



/***/ })

}]);
//# sourceMappingURL=articleModule-article-module-es2015.js.map