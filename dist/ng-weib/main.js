(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/projects-list/projects-list.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'portfolio', component: _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsListComponent"] },
    { path: 'our-services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\n.topnav {\n    background-color: #333;\n    overflow: hidden;\n}\n/* Style the links inside the navigation bar */\n.topnav a {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n}\n/* Change the color of links on hover */\n.topnav a:hover {\n    background-color: #ddd;\n    color: black;\n}\n/* Add an active class to highlight the current page */\n.active {\n    background-color: #4CAF50;\n    color: white;\n}\n/* Hide the link that should open and close the topnav on small screens */\n.topnav .icon {\n    display: none;\n}\n.nav-bottom {\n    display: flex;\n    flex-direction: row;\n    z-index: 100;\n    position: absolute;\n    bottom: 0;\n}\n.banner {\n    max-height: 200px;\n    background: \n        /* linear-gradient(to bottom right, rgba(26, 198, 255, 0.8), rgb(256, 256, 256)) */\n        url('https://res.cloudinary.com/jaredomamo/image/upload/v1538587894/practice/background1.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n}\n.banner-text {\n    color: #ffffff;\n}\n.banner-text h2 {\n    font-size: 16px !important;\n}\n.banner-text p {\n    font-size: 12px !important;\n}\n.banner-4 {\n    height: 300px;\n    margin: 10px auto;\n    padding: 25px;\n    background-color: white;\n    line-height: 1.8;\n    border-radius: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n}\n.banner-4 ul {\n    list-style-type: none;\n    margin-top: 20px;\n}\n.banner-4 ul li {\n    display: inline-block;\n    font-weight: 600;\n    margin: 1px 10px;\n}\n/* #########  ABOUT   ############# */\n#about {\n    position: relative;\n    min-height: 300px;\n    padding-top: 20px;\n    background-image: url('https://res.cloudinary.com/jaredomamo/image/upload/v1538587885/practice/blog2.jpg');\n    background-attachment: fixed;\n}\n#about .row .col-sm-6:last-child {\n    position: absolute;\n    background-color: #ffffff;\n    bottom: 0;\n    right: 20px;\n}\n#new-project {\n    padding: 20px;\n    background-color: #29a3a3;\n    color: #ffffff;\n}\n/* ###########  FOOTER  ########## */\nfooter {\n    min-height: 150px;\n    background-color: #000000;\n    color: #ffffff;\n}\n@media only screen and (min-width: 768px) {\n    .nav-bottom {\n        display: none;\n    }\n    section {margin: auto;}\n    section, .banner { min-height: 400px; }\n    .banner-text {\n        margin: 5px 15px;\n        width: 40%;\n        padding: 20px;\n        background-color: rgba(0, 0, 0, 0.25);\n        font-weight: 500;\n     }\n    .banner-text h2 { font-size: 20px !important; }\n    .banner-text p { font-size: 14px !important; }\n    .banner-footer { margin: 2px 30px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; position: absolute; bottom: -50px; }\n    .banner-4 { width: 30%; }\n    #about { margin-top: 280px; min-height: 500px; background-size: cover; background-position: left; background-repeat: no-repeat;}\n    #about .row div:last-child { \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 40px;\n        width: 30%;\n        background-color: #ffffff;\n        position: absolute;\n        bottom: 0;\n        right: 40px;\n    }\n    #new-project div, #new-project .btn {display: inline-block;}\n    #new-project .btn {float: right;}\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"row nav-bottom\">\n  <nav class=\"nav nav-pills nav-fill\">\n    <a class=\"nav-item nav-link active\" href=\"#\">\n      <span class=\"glyphicon glyphicon-home\"></span>Home\n    </a>\n    <a class=\"nav-item nav-link\" href=\"#\">\n      <span class=\"glyphicon glyphicon-info\"></span>About\n    </a>\n    <a class=\"nav-item nav-link\" href=\"#\">\n      <span class=\"glyphicon glyphicon-gear\"></span>Services\n    </a>\n    <a class=\"nav-item nav-link\" href=\"#\">\n      <span class=\"glyphicon glyphicon-phone\"></span>Contacts\n    </a>\n  </nav>\n</div> -->\n\n<section>\n  <!-- <app-header></app-header> -->\n  <div class=\"topnav\" id=\"myTopnav\">\n    <a href=\"#home\" class=\"active\">Home</a>\n    <a href=\"#news\">News</a>\n    <a href=\"#contact\">Contact</a>\n    <a href=\"#about\">About</a>\n    <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n  </div>\n  <div class=\"row banner\">\n    <div class=\"banner-text\">\n      <h2>We design and develop intelligent applications and software that are user-friendly</h2>\n      <p>By partnering with Weib, you partner with a team that supports your project from start to finish.</p>\n      <a href=\"#\" class=\"btn btn-outline-primary\">Learn More</a>\n      <a href=\"#\" class=\"btn btn-outline-primary-b\">View Our Work</a>\n    </div>\n  </div>\n</section>\n<div class=\"banner-footer\">\n  <div class=\"banner-4\">\n    <h4>Product Strategy</h4>\n    <p>We are goal oriented and focused in defining a vision for impact and a plan to get you there</p>\n    <ul>\n      <li>Branding |</li>\n      <li>Project Discovery |</li>\n      <li>Project Roadmap</li>\n    </ul>\n  </div>\n  <div class=\"banner-4\">\n    <h4>Design</h4>\n    <p>We embrace the art of problem solving and create experiences that are not only beautiful, but also functional</p>\n    <ul>\n      <li>Product Design |</li>\n      <li>Prototyping |</li>\n      <li>User Experience</li>\n    </ul>\n  </div>\n  <div class=\"banner-4\">\n    <h4>Development</h4>\n    <p>Our agile works round the clock to bring agile experiences: from front-end to back-end</p>\n    <ul>\n      <li>Web |</li>\n      <li>Data Science |</li>\n      <li>Network |</li>\n      <li>IoT</li>\n    </ul>\n  </div>\n</div>\n\n<section id=\"about\">\n  <h3 class=\"big-title\">About Us</h3>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <!-- <img src=\"\" alt=\"about us placeholder\"> -->\n    </div>\n    <div class=\"col-sm-6\">\n      <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>\n      <a href=\"#\">Learn More</a>\n    </div>\n  </div>\n</section>\n\n<section>\n  <h3 class=\"big-title\">Our Portfolio</h3>\n  <div class=\"row\">\n    <app-projects-list></app-projects-list>\n  </div>\n</section>\n\n<section>\n  <h3 class=\"big-title\">Our Services</h3>\n  <div class=\"row\">\n    <app-services></app-services>\n  </div>\n</section>\n\n<div id=\"new-project\">\n  <div>\n    <h4>Have a project in mind?</h4>\n    <p>Some people believe that design is how it looks. Well, it is also how it works</p>\n  </div>\n  <a type=\"button\" class=\"btn btn-outline-primary\" href=\"#\">START A NEW PROJECT</a>\n</div>\n\n<footer class=\"row\">\n  <div class=\"col-xs-12\">\n    <a href=\"#\" class=\"big-title\"><h3>WEIB SOLUTIONS</h3></a>\n    <p>&copy; Weib Solutions | Rights Reserved</p>\n  </div>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Weib | Home';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/projects-list/projects-list.component.ts");
/* harmony import */ var _projects_list_projects_detail_projects_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects-list/projects-detail/projects-detail.component */ "./src/app/projects-list/projects-detail/projects-detail.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _services_services_detail_services_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services-detail/services-detail.component */ "./src/app/services/services-detail/services-detail.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsListComponent"],
                _projects_list_projects_detail_projects_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsDetailComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _services_services_detail_services_detail_component__WEBPACK_IMPORTED_MODULE_9__["ServicesDetailComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/projects-list/projects-detail/projects-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/projects-list/projects-detail/projects-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects-list/projects-detail/projects-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/projects-list/projects-detail/projects-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects-list/projects-detail/projects-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/projects-list/projects-detail/projects-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDetailComponent", function() { return ProjectsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsDetailComponent = /** @class */ (function () {
    function ProjectsDetailComponent() {
    }
    ProjectsDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-detail',
            template: __webpack_require__(/*! ./projects-detail.component.html */ "./src/app/projects-list/projects-detail/projects-detail.component.html"),
            styles: [__webpack_require__(/*! ./projects-detail.component.css */ "./src/app/projects-list/projects-detail/projects-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsDetailComponent);
    return ProjectsDetailComponent;
}());



/***/ }),

/***/ "./src/app/projects-list/projects-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/projects-list/projects-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-sm-4 {\n  position: relative;\n}\n.project-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  bottom: 0;\n  width: 93%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.25);\n  color: #ffffff;\n}\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  position: relative;\n}\nngb-carousel, .carousel-item{\n  max-height: 500px !important;\n  overflow: hidden;\n}\n@media screen and (min-width:768px) {\n  .project-container { min-height: 300px;}\n  .project-img { max-height: 400px; }\n}"

/***/ }),

/***/ "./src/app/projects-list/projects-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/projects-list/projects-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\" *ngFor=\"let project of projects\">\n      <img src=\"{{ project.projectPlaceholder }}\" alt=\"{{ project.title }}\" class=\"img-responsive img-fluid\">\n      <div class=\"project-container\">\n        <h4>{{ project.title }}</h4>\n        <p class=\"project-desc\">\n          {{ project.description }}<br>\n          <span>{{ project.tags }}</span>\n        </p>\n        <a [href]=\"project.projectUrl\">Link to project</a>\n      </div>\n    </div>\n    <!-- <div class=\"col-sm-6 project-img\" \n      style=\"background-image: url('{{ project.projectPlaceholder }}')\">\n      <img src=\"{{ project.projectPlaceholder }}\" alt=\"{{ project.title }}\" class=\"img-responsive img-fluid\">\n    </div> -->\n  </div>\n  <app-projects-detail></app-projects-detail>\n</div>\n<!-- \n<div class=\"col-xs-12\">\n  <div class=\"row\">\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-10\">\n      <ngb-carousel *ngIf=\"images\">\n        <ng-template ngbSlide>\n          <img [src]=\"images[0]\" alt=\"Random first slide\">\n          <div class=\"carousel-caption\">\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img [src]=\"images[1]\" alt=\"Random second slide\">\n          <div class=\"carousel-caption\">\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img [src]=\"images[2]\" alt=\"Random third slide\">\n          <div class=\"carousel-caption\">\n            <h3>Third slide label</h3>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n    </div>\n    <div class=\"col-xs-1\"></div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/projects-list/projects-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/projects-list/projects-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects-list/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent(projService, config) {
        this.projService = projService;
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.projects = this.projService.getProjectList();
    };
    ProjectsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-list',
            template: __webpack_require__(/*! ./projects-list.component.html */ "./src/app/projects-list/projects-list.component.html"),
            styles: [__webpack_require__(/*! ./projects-list.component.css */ "./src/app/projects-list/projects-list.component.css")],
            providers: [
                _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
            ]
        }),
        __metadata("design:paramtypes", [_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "./src/app/projects-list/projects.model.ts":
/*!*************************************************!*\
  !*** ./src/app/projects-list/projects.model.ts ***!
  \*************************************************/
/*! exports provided: ProjectsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModel", function() { return ProjectsModel; });
var ProjectsModel = /** @class */ (function () {
    function ProjectsModel(title, desc, url, placeholder, tags) {
        this.title = title;
        this.description = desc;
        this.projectUrl = url;
        this.projectPlaceholder = placeholder;
        this.tags = tags;
    }
    return ProjectsModel;
}());



/***/ }),

/***/ "./src/app/projects-list/projects.service.ts":
/*!***************************************************!*\
  !*** ./src/app/projects-list/projects.service.ts ***!
  \***************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _projects_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.model */ "./src/app/projects-list/projects.model.ts");

var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.projects = [
            new _projects_model__WEBPACK_IMPORTED_MODULE_0__["ProjectsModel"]('sample title', 'description of sample project', 'path.to.project', 'https://res.cloudinary.com/jaredomamo/image/upload/v1538587733/practice/work1.jpg', 'sampleTag| sampleTag 2| sampleTag 3'),
            new _projects_model__WEBPACK_IMPORTED_MODULE_0__["ProjectsModel"]('sample title', 'description of sample project', 'path.to.project', 'https://res.cloudinary.com/jaredomamo/image/upload/v1538587734/practice/work4.jpg', 'sampleTag| sampleTag 2| sampleTag 3'),
            new _projects_model__WEBPACK_IMPORTED_MODULE_0__["ProjectsModel"]('sample title', 'description of sample project', 'path.to.project', 'https://res.cloudinary.com/jaredomamo/image/upload/v1538587730/practice/work6.jpg', 'sampleTag| sampleTag 2| sampleTag 3'),
        ];
    }
    ProjectService.prototype.getProjectList = function () {
        return this.projects.slice();
        // console.log(this.projects);
    };
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/services-detail/services-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/services/services-detail/services-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services-detail/services-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/services/services-detail/services-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/services/services-detail/services-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/services-detail/services-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServicesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesDetailComponent", function() { return ServicesDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesDetailComponent = /** @class */ (function () {
    function ServicesDetailComponent() {
    }
    ServicesDetailComponent.prototype.ngOnInit = function () {
    };
    ServicesDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-detail',
            template: __webpack_require__(/*! ./services-detail.component.html */ "./src/app/services/services-detail/services-detail.component.html"),
            styles: [__webpack_require__(/*! ./services-detail.component.css */ "./src/app/services/services-detail/services-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesDetailComponent);
    return ServicesDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6\">\n  <ul>\n    <li *ngFor=\"let service of services\">{{ service.title }}</li>\n    <!-- <li>Web Development</li>\n    <li>Software Development</li>\n    <li>Network Solutions</li> -->\n  </ul>\n</div>\n<div class=\"col-sm-6\">\n  <app-services-detail></app-services-detail>\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.service */ "./src/app/services/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(servService) {
        this.servService = servService;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.services = this.servService.getServicesList();
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/services.model.ts":
/*!********************************************!*\
  !*** ./src/app/services/services.model.ts ***!
  \********************************************/
/*! exports provided: ServicesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModel", function() { return ServicesModel; });
var ServicesModel = /** @class */ (function () {
    function ServicesModel(title, desc) {
        this.title = title;
        this.description = desc;
    }
    return ServicesModel;
}());



/***/ }),

/***/ "./src/app/services/services.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _services_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.model */ "./src/app/services/services.model.ts");

var ServicesService = /** @class */ (function () {
    function ServicesService() {
        this.services = [
            new _services_model__WEBPACK_IMPORTED_MODULE_0__["ServicesModel"]('Web Design', ''),
            new _services_model__WEBPACK_IMPORTED_MODULE_0__["ServicesModel"]('Web Development', ''),
            new _services_model__WEBPACK_IMPORTED_MODULE_0__["ServicesModel"]('Software Development', ''),
            new _services_model__WEBPACK_IMPORTED_MODULE_0__["ServicesModel"]('Network Solutions', '')
        ];
    }
    ServicesService.prototype.getServicesList = function () {
        return this.services;
    };
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.btn {\n  border-radius: 20px;\n  min-width: 20px;\n  padding: 5px 10px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 16px;\n}\n.btn-outline-primary, .btn-outline-primary-b:hover {\n  border: 2px solid #ffffff;\n  color: #ffffff;\n  background: transparent;\n}\n.btn-outline-primary-b, .btn-outline-primary:hover {\n  border: 2px solid #ffffff;\n  background-color: #ffffff;\n  color: #1ac6ff;\n}\n.btn-primary {\n  color: #1ac6ff;\n  background-color: #ffffff;\n}\n.btn-primary:hover {\n  background-color: #00b8e6;\n  box-shadow: 0 4px 8px 0 rgba(0, 184, 230, 0.2), 0 6px 20px 0 rgba(0, 184, 230, 0.19);\n}\nnav {\n    width: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n}\n.navbar-light {\n    background-color: #1ac6ff !important;\n}\n.navbar-brand {\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 25px;\n    color: #000000;\n}\n.navbar-nav .nav-link {\n    margin: 5px 15px;\n    padding-right: 12.5px !important;\n    padding-left: 12.5px !important;\n    font-weight: 500;\n    font-size: 18px;\n    border-radius: 15px;\n    color: #ffffff !important;\n}\n.navbar-nav .nav-link:hover {\n    background-color: rgba(256, 256, 256, 0.2)\n}\n@media screen and (max-width: 767px) {\n  #mainNav {\n    visibility: hidden;\n  }\n}\n@media screen and (min-width: 768px) {\n  #mainNav{\n    visibility: visible;\n  }\n}"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\" appDropdown>\n    <a class=\"navbar-brand\" href=\"#\">WEIB SOLUTIONS</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNav\" aria-controls=\"mainNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"mainNav\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" href=\"#\">About Us</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Services</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Contact Us</a>\n        <a class=\"btn btn-outline-primary-b\" href=\"#\">START A NEW PROJECT</a>\n      </div>\n    </div>\n  </nav>\n</div>\n<!-- <div class=\"row\">\n  <nav></nav>\n</div> -->\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jared/Desktop/projects/ng-weib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map