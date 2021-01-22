(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lwcit\OneDrive\Documents\Side Coding Projects\leon-chow\src\main.ts */"zUnb");


/***/ }),

/***/ "566j":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ContactService {
    constructor(http) {
        this.http = http;
        // exposed API, but it should be okay
        this.emailApi = 'https://mailthis.to/Leon';
    }
    // function that takes formData as the parameter from the HTML template and sends the message
    sendMessage(formData) {
        return this.http.post(this.emailApi, formData, { responseType: 'text' }).pipe((res) => {
            if (res) {
                return res;
            }
        }, (error) => {
            //console.log(error);
            return error;
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../resize.service */ "xwFR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AboutComponent_table_12_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Languages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_table_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillsOverview_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillsOverview_r12.language, " ");
} }
function AboutComponent_table_12_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Frameworks & Libraries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_table_12_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillsOverview_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillsOverview_r13.framework, " ");
} }
function AboutComponent_table_12_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editors/IDEs & Version Control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_table_12_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillsOverview_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillsOverview_r14.editor, " ");
} }
function AboutComponent_table_12_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Databases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_table_12_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillsOverview_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillsOverview_r15.database, " ");
} }
function AboutComponent_table_12_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function AboutComponent_table_12_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function AboutComponent_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_table_12_th_2_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_table_12_td_3_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AboutComponent_table_12_th_5_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutComponent_table_12_td_6_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_table_12_th_8_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutComponent_table_12_td_9_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutComponent_table_12_th_11_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutComponent_table_12_td_12_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_table_12_tr_13_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AboutComponent_table_12_tr_14_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.cols);
} }
function AboutComponent_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Languages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Frameworks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Editors & VC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Databases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " TypeScript ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Angular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " VS Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " MySql");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " JavaScript ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Angular Material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " IDEA IntelliJ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " MongoDB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " HTML/CSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " RxJS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Jupyter Notebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " PostgreSQL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Dart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Flutter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Spyder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Firebase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Java ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Bootstrap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Git ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Python ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " PHP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " C++ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "about": a0, "about-mobile": a1 }; };
class AboutComponent {
    constructor(resizeService) {
        this.resizeService = resizeService;
        this.cols = ["language", "framework", "editor", "database"];
        this.skills = [
            {
                language: "TypeScript", framework: "Angular", editor: "Visual Studio Code", database: "MySQL"
            },
            {
                language: "JavaScript", framework: "Angular Material", editor: "IDEA IntelliJ", database: "MongoDB"
            },
            {
                language: "HTML/CSS", framework: "RxJS", editor: "Jupyter Notebook", database: "PostgreSQL"
            },
            {
                language: "Dart", framework: "Flutter", editor: "Eclipse", database: "Firebase"
            },
            {
                language: "Java", framework: "Bootstrap", editor: "Git"
            },
            {
                language: "Python"
            },
            {
                language: "PHP"
            },
            {
                language: "C++"
            }
        ];
    }
    ngOnInit() {
        // initializing data source instance
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.skills);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 26, vars: 6, consts: [[3, "ngClass"], ["src", "../../assets/images/me_2.jpg", "alt", "Me", 1, "img"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["class", "mobile-table", 4, "ngIf"], ["href", "https://blog.ontariotechu.ca/co-ops-in-the-faculty-of-science", "target", "_blank"], ["href", "https://science.ontariotechu.ca/undergraduate/co-op%20programs/student-testimonials/computer-science/leon-chow.php", "target", "_blank"], ["href", "https://www.clarifai.com/blog/clarifai-featured-hack-helping-small-businesses-say-hai-to-their-customers", "target", "_blank"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "language"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "framework"], ["matColumnDef", "editor"], ["matColumnDef", "database"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mobile-table"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hello! My name is Leon Chow and I am currently a 4th year computer science student at the Ontario Tech University (formerly UOIT). I am seeking professional experience in web/mobile development and enjoy learning new languages and technologies. Below, you can see a list of skills that I have acquired, as well as a few links about me, mostly from the university. If you wish to contact me, you can fill out the form at the bottom of the page, or you can email me at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " leonwl.chow@gmail.com. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Technical Skills Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutComponent_table_12_Template, 15, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_table_13_Template, 63, 0, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Links about me: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Co-op Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Co-op Testimonial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Intuit SmallBiz Hack Clarifai Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.resizeService.mobileScreen === false, ctx.resizeService.mobileScreen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.resizeService.mobileScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizeService.mobileScreen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".about[_ngcontent-%COMP%] {\n  background-color: #252C3F;\n  color: #eee;\n  margin: 20px;\n  padding: 10px;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n.about-mobile[_ngcontent-%COMP%] {\n  background-color: #252C3F;\n  color: #eee;\n  padding-bottom: 10px;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n.grid-tile[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 16px;\n  padding-left: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #DDAF6D;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Open-sans;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: Open-sans;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.mobile-table[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 10px;\n  padding: 10px;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-right: 15px;\n  font-size: 1rem;\n}\n\ntd[_ngcontent-%COMP%] {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGdsb2JhbF9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0NDZ0I7RURBaEIsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UseUJDUlc7RURTWCxXQ1BnQjtFRFFoQixvQkFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsY0MvQnNCO0FEOEJ4Qjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxzQkN0Q1U7QURxQ1o7O0FBSUE7RUFDRSxzQkMxQ1U7QUR5Q1o7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBTUE7RUFDRSxXQUFBO0FBSEYiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vZ2xvYmFsX3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uYWJvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5hYm91dC1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5ncmlkLXRpbGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAkbWFpbi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucCB7XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLy8gb3ZlcmZsb3dzIG9uIHNjcmVlbnMgc21hbGxlciB0aGFuIDM1MHB4LCBsb29rIGludG8gZml4aW5nIHRoaXMgaW4gdGhlIGZ1dHVyZVxyXG4ubW9iaWxlLXRhYmxlIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG59XHJcblxyXG50ZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIiwiLy8gZ2xvYmFsIHN0eWxlc1xyXG5cclxuLy8gbWFpbiBlbGVtZW50c1xyXG4kbWFpbi1jb2xvcjogIzI1MkMzRjtcclxuJG1haW4tZm9udDogT3Blbi1zYW5zO1xyXG4kbWFpbi1mb250LWNvbG9yOiAjZWVlO1xyXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRERBRjZEO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "FXWk":
/*!*********************************!*\
  !*** ./src/app/contact/form.ts ***!
  \*********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
// form class data
class Form {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize.service */ "xwFR");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(resizeService) {
        this.resizeService = resizeService;
        this.title = 'leon-chow';
        this.mobileScreen = false;
    }
    // onResize, checks if the width and height are less than or equal to 600, will switch to mobile view
    onResize() {
        this.resizeService.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
        console.log(`Width: ${window.innerHeight}, width: ${window.innerWidth}`);
    }
    ngOnInit() {
        this.resizeService.mobileScreen = window.innerHeight <= 600 || window.innerWidth <= 600;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: #369;\n  font-family: Open-sans;\n  font-size: 3.5rem;\n  font-size: bold;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  color: #444;\n  font-family: Open-sans;\n  font-weight: lighter;\n  font-size: 3rem;\n}\nbody[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: #333;\n  font-family: Open-sans;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: Arial;\n  color: #4D5960;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxnbG9iYWxfc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esb0JBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0Esc0JDUFU7RURRVixvQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLHNCQ2RVO0FEY1o7QUFHQSxvQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi9zcmMvYXBwL2dsb2JhbF9zdHlsZXMuc2Nzc1wiO1xyXG4vKiBBcHAtd2lkZSBTdHlsZXMgKi9cclxuaDEge1xyXG4gIGNvbG9yOiAjMzY5O1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIGZvbnQtc2l6ZTogYm9sZDtcclxufVxyXG5cclxuaDIsIGgzIHtcclxuICBjb2xvcjogIzQ0NDtcclxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbmJvZHksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBidXR0b24ge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG59XHJcblxyXG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGNvbG9yOiAjNEQ1OTYwO1xyXG59XHJcblxyXG5cclxuIiwiLy8gZ2xvYmFsIHN0eWxlc1xyXG5cclxuLy8gbWFpbiBlbGVtZW50c1xyXG4kbWFpbi1jb2xvcjogIzI1MkMzRjtcclxuJG1haW4tZm9udDogT3Blbi1zYW5zO1xyXG4kbWFpbi1mb250LWNvbG9yOiAjZWVlO1xyXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRERBRjZEO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize.service */ "xwFR");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/header.component */ "fECr");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_resize_service__WEBPACK_IMPORTED_MODULE_0__["ResizeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_22__["MainComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                ],
                providers: [_resize_service__WEBPACK_IMPORTED_MODULE_0__["ResizeService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "FXWk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../contact.service */ "566j");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../resize.service */ "xwFR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











const _c0 = function (a0, a1) { return { "contact-form": a0, "contact-form-mobile": a1 }; };
class ContactComponent {
    constructor(contactService, snackBar, resizeService) {
        this.contactService = contactService;
        this.snackBar = snackBar;
        this.resizeService = resizeService;
        this.form = new _form__WEBPACK_IMPORTED_MODULE_0__["Form"]('', '');
    }
    // init empty fields
    ngOnInit() {
        this.form.name = '';
        this.form.message = '';
    }
    // confirmation that will appear once the form is valid and submitted
    submitConfirmation() {
        this.snackBar.open("Successfully sent message!", "Dismiss", {
            duration: 3000,
        });
    }
    // handles form submission, used template driven forms here
    submitForm() {
        this.submitConfirmation();
        this.contactService.sendMessage(this.form).subscribe(res => {
            //console.log(res);
        }, (error) => {
            console.log(error);
        });
        this.form.name = '';
        this.form.message = '';
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_resize_service__WEBPACK_IMPORTED_MODULE_4__["ResizeService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 24, vars: 7, consts: [[3, "ngClass"], [3, "ngSubmit"], ["contactForm", "ngForm"], [1, "form-container"], ["required", ""], ["name", ""], ["required", "", "type", "text", "id", "name", "name", "name", "matInput", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["required", "", "name", "message", "matInput", "", "rows", "5", "cols", "40", 3, "ngModel", "ngModelChange"], ["message", "ngModel"], ["type", "submit", "mat-raised-button", "", 1, "button", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Contact Me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Please fill out the form below to contact me and I will try to reach back within 3 business days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_5_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_12_listener($event) { return ctx.form.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.form.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx.resizeService.mobileScreen === false, ctx.resizeService.mobileScreen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-family: Open-sans;\n  font-size: 32px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: table;\n  color: #eee;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  float: left;\n  padding: 10px;\n  margin: 10px;\n  color: #eee;\n}\n\n.form-element[_ngcontent-%COMP%] {\n  float: right;\n  padding: 10px;\n  margin: 10px;\n  background-color: #252C3F;\n  color: #eee;\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #252C3F;\n  color: #eee;\n  margin: 20px;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n.contact-form-mobile[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #252C3F;\n  color: #eee;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n  .mat-form-field-label {\n  \n  color: #eee !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcZ2xvYmFsX3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JDQ1U7RURBVixlQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsV0NKZ0I7QURHbEI7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQ1hnQjtBRFVsQjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ3BCVztFRHFCWCxXQ25CZ0I7QURrQmxCOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQzFCVztFRDJCWCxXQ3pCZ0I7RUQwQmhCLFlBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQ2xDVztFRG1DWCxXQ2pDZ0I7RURrQ2hCLCtCQUFBO0FBREY7O0FBSUE7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0FBREYiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9nbG9iYWxfc3R5bGVzLnNjc3NcIjtcclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY29sb3I6ICRtYWluLWZvbnQtY29sb3I7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogJG1haW4tZm9udC1jb2xvcjtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCAjODg4ODg4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtLW1vYmlsZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICBjb2xvcjogJG1haW4tZm9udC1jb2xvcjtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCAjODg4ODg4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgY29sb3I6ICRtYWluLWZvbnQtY29sb3IgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiIsIi8vIGdsb2JhbCBzdHlsZXNcclxuXHJcbi8vIG1haW4gZWxlbWVudHNcclxuJG1haW4tY29sb3I6ICMyNTJDM0Y7XHJcbiRtYWluLWZvbnQ6IE9wZW4tc2FucztcclxuJG1haW4tZm9udC1jb2xvcjogI2VlZTtcclxuJG1haW4tYmFja2dyb3VuZC1jb2xvcjogI0REQUY2RDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _resize_service__WEBPACK_IMPORTED_MODULE_4__["ResizeService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../resize.service */ "xwFR");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








const _c0 = function (a1) { return { "mat-elevation-z5": true, "sticky": a1 }; };
const _c1 = function (a0, a1) { return { "title": a0, "mobile-title": a1 }; };
function HeaderComponent_mat_toolbar_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Leon Chow ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " picture_as_pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.isSticky))("@enterAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, ctx_r0.resizeService.mobileScreen === false, ctx_r0.resizeService.mobileScreen === true));
} }
class HeaderComponent {
    constructor(resizeService) {
        this.resizeService = resizeService;
        this.links = ['Projects', 'About', 'Contact'];
        this.isSticky = false;
        this.toggleDropdown = false;
    }
    // event to check if page is scrolled vertically of at least 50px, which will make the sticky header appear
    checkScroll() {
        this.isSticky = window.pageYOffset >= 50;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.checkScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 5, consts: [[1, "header"], [3, "ngClass"], ["mat-icon-button", ""], ["href", "../../assets/files/Leon_Chow_Resume.pdf", "target", "_blank"], [1, "pdf-icon"], ["href", "https://github.com/leon-chow", "target", "_blank"], ["src", "../../assets/icons/GitHub-Mark-Light-32px.png"], ["href", "https://www.linkedin.com/in/leon-chow/", "target", "_blank"], ["src", "../../assets/icons/linkedin-3-xxl.png", 1, "icon"], ["class", "float-header", 3, "ngClass", 4, "ngIf"], [1, "float-header", 3, "ngClass"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Leon Chow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " picture_as_pdf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_mat_toolbar_16_Template, 16, 8, "mat-toolbar", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx.resizeService.mobileScreen === false, ctx.resizeService.mobileScreen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSticky);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: #252C3F;\n  box-shadow: 1px 2px 8px #888888;\n  text-align: left;\n  margin-bottom: 10px;\n  width: auto;\n}\n\n.float-header[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #252C3F;\n  text-align: left;\n  top: 0;\n  height: 0;\n  opacity: 0;\n  display: hidden;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 2;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Open-sans;\n  color: #eee;\n  font-size: 2.5rem;\n  font-size: bold;\n  text-align: left;\n  position: relative;\n  padding-right: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Open-sans;\n  font-size: 1rem;\n  text-align: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  position: relative;\n}\n\n.mobile-title[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n}\n\n.icons[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n  background-color: #eee;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 10px;\n  height: 2rem;\n  background-color: #eee;\n  color: #eee;\n}\n\n.pdf-icon[_ngcontent-%COMP%] {\n  color: white;\n  padding-right: 10px;\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxnbG9iYWxfc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxtQkNUVztFRFVYLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLHNCQ3RCVTtFRHVCVixXQ3RCZ0I7RUR1QmhCLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JDaENVO0VEaUNWLGVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JDbERnQjtBRGlEbEI7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkN4RGdCO0VEeURoQixXQ3pEZ0I7QUR3RGxCOztBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vZ2xvYmFsX3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCAjODg4ODg4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmZsb2F0LWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6ICRtYWluLWNvbG9yO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGRpc3BsYXk6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XHJcbiAgY29sb3I6ICRtYWluLWZvbnQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC1zaXplOiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tb2JpbGUtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG4gIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG59XHJcblxyXG4ucGRmLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG4iLCIvLyBnbG9iYWwgc3R5bGVzXHJcblxyXG4vLyBtYWluIGVsZW1lbnRzXHJcbiRtYWluLWNvbG9yOiAjMjUyQzNGO1xyXG4kbWFpbi1mb250OiBPcGVuLXNhbnM7XHJcbiRtYWluLWZvbnQtY29sb3I6ICNlZWU7XHJcbiRtYWluLWJhY2tncm91bmQtY29sb3I6ICNEREFGNkQ7XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: .15, opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: .15, opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: .15, opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: .15, opacity: 0 }))
                        ])
                    ])
                ],
            }]
    }], function () { return [{ type: _resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"] }]; }, { checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function NavbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".")("fragment", link_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1, " ");
} }
class NavbarComponent {
    constructor() {
        // used to store the array of links
        this.links = ['Projects', 'About', 'Contact'];
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 2, vars: 1, consts: [[1, "links"], [4, "ngFor", "ngForOf"], [1, "link-text", 3, "routerLink", "fragment"], ["mat-flat-button", "", 1, "link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["button[_ngcontent-%COMP%] {\n  background-color: #252C3F;\n  border: 1px solid white;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #eee;\n}\n\n.links[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 3rem;\n  font-size: 1rem;\n  padding: 1rem;\n}\n\n.link[_ngcontent-%COMP%] {\n  margin: 20px;\n  font-size: 1rem;\n  text-align: center;\n  font-weight: bold;\n  color: #eee;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  background-color: #DDAF6D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxnbG9iYWxfc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLFdDSmdCO0FER2xCOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQ25CZ0I7QURrQmxCOztBQUlBO0VBQ0UseUJDdEJzQjtBRHFCeEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2dsb2JhbF9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICRtYWluLWZvbnQtY29sb3I7XHJcbn1cclxuXHJcbi5saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4iLCIvLyBnbG9iYWwgc3R5bGVzXHJcblxyXG4vLyBtYWluIGVsZW1lbnRzXHJcbiRtYWluLWNvbG9yOiAjMjUyQzNGO1xyXG4kbWFpbi1mb250OiBPcGVuLXNhbnM7XHJcbiRtYWluLWZvbnQtY29sb3I6ICNlZWU7XHJcbiRtYWluLWJhY2tncm91bmQtY29sb3I6ICNEREFGNkQ7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "wlho");





const routes = [
    {
        // default
        path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        // wildcard, redirect
        path: '**', pathMatch: 'full', redirectTo: ''
    },
    {
        // resume
        path: 'resume', redirectTo: '../assets/files/Leon_Chow_Resume.pdf'
    }
];
// used to allow page jumping when a link is clicked, for fragments
const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 25],
};
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, routerOptions)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../resize.service */ "xwFR");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/projects.component */ "zUkc");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact/contact.component */ "bzTf");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");









function MainComponent_mat_drawer_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "hero-text": a0, "mobile-hero-text": a1 }; };
class MainComponent {
    constructor(resizeService) {
        this.resizeService = resizeService;
        // stores the array of links for appropriate fragments
        this.links = ['About', 'Projects', 'Contact'];
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 12, vars: 8, consts: [[1, "drawer"], ["autosize", "", 1, "drawer"], ["class", "side-drawer", "mode", "side", "opened", "!this.resizeService.mobileScreen", 4, "ngIf"], ["align", "center"], [1, "hero-div"], [3, "ngClass"], ["src", "../../assets/images/night_sky.jpg", 1, "hero-image"], ["mode", "side", "opened", "!this.resizeService.mobileScreen", 1, "side-drawer"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_mat_drawer_2_Template, 2, 0, "mat-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Welcome to my Website! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.resizeService.mobileScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.resizeService.mobileScreen === false, ctx.resizeService.mobileScreen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.links[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.links[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.links[2]);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]], styles: [".drawer[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  background-color: #DDAF6D;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  margin-top: 4rem;\n  background-color: #252C3F;\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  width: 97.6%;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n.hero-div[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  height: 100%;\n  text-align: center;\n}\n\n.hero-text[_ngcontent-%COMP%], .mobile-hero-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 4rem;\n  color: white;\n  text-shadow: 2px 2px black;\n  line-height: normal;\n}\n\n.mobile-hero-text[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcZ2xvYmFsX3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNDc0I7QURGeEI7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNSVztBRE9iOztBQUlBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vZ2xvYmFsX3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uZHJhd2VyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG59XHJcblxyXG4uaGVyby1pbWFnZSB7XHJcbiAgd2lkdGg6IDk3LjYlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5oZXJvLWRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQsIC5tb2JpbGUtaGVyby10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLm1vYmlsZS1oZXJvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4iLCIvLyBnbG9iYWwgc3R5bGVzXHJcblxyXG4vLyBtYWluIGVsZW1lbnRzXHJcbiRtYWluLWNvbG9yOiAjMjUyQzNGO1xyXG4kbWFpbi1mb250OiBPcGVuLXNhbnM7XHJcbiRtYWluLWZvbnQtY29sb3I6ICNlZWU7XHJcbiRtYWluLWJhY2tncm91bmQtY29sb3I6ICNEREFGNkQ7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"] }]; }, null); })();


/***/ }),

/***/ "xwFR":
/*!***********************************!*\
  !*** ./src/app/resize.service.ts ***!
  \***********************************/
/*! exports provided: ResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return ResizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResizeService {
    constructor() {
        // global variable to be used for screen sizes, will look into fixing this in the future when im more experienced
        this.mobileScreen = false;
    }
}
ResizeService.ɵfac = function ResizeService_Factory(t) { return new (t || ResizeService)(); };
ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResizeService, factory: ResizeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../resize.service */ "xwFR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






const _c0 = function (a0, a1) { return { "projects": a0, "projects-mobile": a1 }; };
class ProjectsComponent {
    constructor(resizeService) {
        this.resizeService = resizeService;
        this.cols = 2;
    }
    // initial resizing of the columns for the projects grid view
    ngOnInit() {
        this.cols = this.resizeService.mobileScreen ? this.cols = 1 : this.cols = 2;
    }
    // on resize event, will check if screen is mobile to reduce the projects grid view columns to 1
    onResize() {
        this.cols = this.resizeService.mobileScreen ? this.cols = 1 : this.cols = 2;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], hostBindings: function ProjectsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ProjectsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 38, vars: 5, consts: [[3, "ngClass"], ["rowHeight", "52rem", "rowWidth", "3rem", 3, "cols"], ["mat-stroked-button", "", 1, "button"], ["href", "https://github.com/leon-chow/otu-companion", "target", "_blank"], ["src", "../../assets/icons/GitHub-Mark-Light-32px.png", 1, "icon"], ["src", "../../assets/images/otu_companion_demo.gif", 1, "img"], ["href", "https://github.com/leon-chow/fatesweeper2", "target", "_blank"], ["src", "../../assets/images/hobby_minesweeper.png", 1, "img"], ["href", "https://github.com/leon-chow/sqa-backend", "target", "_blank"], ["src", "../../assets/images/sqa_mock_auction_system_daily_script.png", 1, "img"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Personal Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " University Companion App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Skills leveraged: Dart | Flutter | Firebase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Hobby-themed Minesweeper (WIP) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Skills leveraged: Dart | Flutter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mock Auction System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Skills leveraged: C++ | Java | Shell | JUnit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " More coming soon... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.resizeService.mobileScreen === false, ctx.resizeService.mobileScreen === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".projects[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #252C3F;\n  color: #eee;\n  font-family: Open-sans;\n  margin: 20px;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n.projects-mobile[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #252C3F;\n  font-family: Open-sans;\n  color: #eee;\n  box-shadow: 1px 2px 8px #888888;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 32px;\n  padding-top: 3px;\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 40px;\n  border-color: gray;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Open-sans;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: Open-sans;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGdsb2JhbF9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSx5QkNGVztFREdYLFdDRGdCO0VERWhCLHNCQ0hVO0VESVYsWUFBQTtFQUNBLCtCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EseUJDWFc7RURZWCxzQkNYVTtFRFlWLFdDWGdCO0VEWWhCLCtCQUFBO0FBRkY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLHNCQzdCVTtBRDBCWjs7QUFNQTtFQUNFLHNCQ2pDVTtBRDhCWiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IFwiLi4vZ2xvYmFsX3N0eWxlcy5zY3NzXCI7XHJcblxyXG4ucHJvamVjdHMge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgY29sb3I6ICRtYWluLWZvbnQtY29sb3I7XHJcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1tb2JpbGUge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XHJcbiAgY29sb3I6ICRtYWluLWZvbnQtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggIzg4ODg4ODtcclxufVxyXG5cclxuXHJcbi5pY29uIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xyXG59XHJcbiIsIi8vIGdsb2JhbCBzdHlsZXNcclxuXHJcbi8vIG1haW4gZWxlbWVudHNcclxuJG1haW4tY29sb3I6ICMyNTJDM0Y7XHJcbiRtYWluLWZvbnQ6IE9wZW4tc2FucztcclxuJG1haW4tZm9udC1jb2xvcjogI2VlZTtcclxuJG1haW4tYmFja2dyb3VuZC1jb2xvcjogI0REQUY2RDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map