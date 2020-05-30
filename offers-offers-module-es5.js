function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\">        \n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <ion-list>\n          <ion-item *ngFor=\"let offer of offers\" [routerLink]=\"[\n          '/',\n          'places',\n          'tabs',\n          'offers',\n          offer?.id\n          ]\">\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"offer?.imageUrl\">                \n              </ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h1>\n                {{ offer?.title }}\n              </h1>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/places/offers/offers-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/places/offers/offers-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: OffersPageRoutingModule */

  /***/
  function srcAppPlacesOffersOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function () {
      return OffersPageRoutingModule;
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


    var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/places/offers/offers.page.ts");

    var routes = [{
      path: '',
      component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }, {
      path: 'new-offer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | new-offer-new-offer-module */
        "new-offer-new-offer-module").then(__webpack_require__.bind(null,
        /*! ./new-offer/new-offer.module */
        "./src/app/places/offers/new-offer/new-offer.module.ts")).then(function (m) {
          return m.NewOfferPageModule;
        });
      }
    }, {
      path: 'edit-offer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | edit-offer-edit-offer-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./edit-offer/edit-offer.module */
        "./src/app/places/offers/edit-offer/edit-offer.module.ts")).then(function (m) {
          return m.EditOfferPageModule;
        });
      }
    }, {
      path: 'offer-bookings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | offer-bookings-offer-bookings-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./offer-bookings/offer-bookings.module */
        "./src/app/places/offers/offer-bookings/offer-bookings.module.ts")).then(function (m) {
          return m.OfferBookingsPageModule;
        });
      }
    }];

    var OffersPageRoutingModule = function OffersPageRoutingModule() {
      _classCallCheck(this, OffersPageRoutingModule);
    };

    OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offers.module.ts":
  /*!************************************************!*\
    !*** ./src/app/places/offers/offers.module.ts ***!
    \************************************************/

  /*! exports provided: OffersPageModule */

  /***/
  function srcAppPlacesOffersOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
      return OffersPageModule;
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


    var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offers-routing.module */
    "./src/app/places/offers/offers-routing.module.ts");
    /* harmony import */


    var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/places/offers/offers.page.ts");

    var OffersPageModule = function OffersPageModule() {
      _classCallCheck(this, OffersPageModule);
    };

    OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]],
      declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })], OffersPageModule);
    /***/
  },

  /***/
  "./src/app/places/offers/offers.page.scss":
  /*!************************************************!*\
    !*** ./src/app/places/offers/offers.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacesOffersOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/places/offers/offers.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/places/offers/offers.page.ts ***!
    \**********************************************/

  /*! exports provided: OffersPage */

  /***/
  function srcAppPlacesOffersOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
      return OffersPage;
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


    var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../places.service */
    "./src/app/places/places.service.ts");

    var OffersPage = /*#__PURE__*/function () {
      function OffersPage(placesService) {
        _classCallCheck(this, OffersPage);

        this.placesService = placesService;
      }

      _createClass(OffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.offers = this.placesService.places;
        }
      }]);

      return OffersPage;
    }();

    OffersPage.ctorParameters = function () {
      return [{
        type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]
      }];
    };

    OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./offers.page.scss */
      "./src/app/places/offers/offers.page.scss"))["default"]]
    })], OffersPage);
    /***/
  }
}]);
//# sourceMappingURL=offers-offers-module-es5.js.map