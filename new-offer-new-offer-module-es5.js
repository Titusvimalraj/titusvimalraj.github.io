function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-offer-new-offer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersNewOfferNewOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/places/tabs/offers\">\n\n        </ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: NewOfferPageRoutingModule */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPageRoutingModule", function () {
      return NewOfferPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _new_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new-offer.page */
    "./src/app/places/offers/new-offer/new-offer.page.ts");

    var routes = [{
      path: '',
      component: _new_offer_page__WEBPACK_IMPORTED_MODULE_3__["NewOfferPage"]
    }];

    var NewOfferPageRoutingModule = function NewOfferPageRoutingModule() {
      _classCallCheck(this, NewOfferPageRoutingModule);
    };

    NewOfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewOfferPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
    \*************************************************************/

  /*! exports provided: NewOfferPageModule */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function () {
      return NewOfferPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-offer-routing.module */
    "./src/app/places/offers/new-offer/new-offer-routing.module.ts");
    /* harmony import */


    var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./new-offer.page */
    "./src/app/places/offers/new-offer/new-offer.page.ts");

    var NewOfferPageModule = function NewOfferPageModule() {
      _classCallCheck(this, NewOfferPageModule);
    };

    NewOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewOfferPageRoutingModule"]],
      declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
    })], NewOfferPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/places/offers/new-offer/new-offer.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
    \***********************************************************/

  /*! exports provided: NewOfferPage */

  /***/
  function srcAppPlacesOffersNewOfferNewOfferPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOfferPage", function () {
      return NewOfferPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewOfferPage = /*#__PURE__*/function () {
      function NewOfferPage() {
        _classCallCheck(this, NewOfferPage);
      }

      _createClass(NewOfferPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewOfferPage;
    }();

    NewOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-offer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-offer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-offer.page.scss */
      "./src/app/places/offers/new-offer/new-offer.page.scss"))["default"]]
    })], NewOfferPage);
    /***/
  }
}]);
//# sourceMappingURL=new-offer-new-offer-module-es5.js.map