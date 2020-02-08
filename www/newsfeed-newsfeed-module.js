(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsfeed-newsfeed-module"],{

/***/ "./src/app/newsfeed/newsfeed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.module.ts ***!
  \*********************************************/
/*! exports provided: NewsfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/newsfeed/newsfeed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_5__["NewsfeedPage"]
    }
];
var NewsfeedPageModule = /** @class */ (function () {
    function NewsfeedPageModule() {
    }
    NewsfeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsfeed_page__WEBPACK_IMPORTED_MODULE_5__["NewsfeedPage"]]
        })
    ], NewsfeedPageModule);
    return NewsfeedPageModule;
}());



/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.html":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"newsitems.length == 0\" >\n  <br /><br /><br />\n  <h1>&nbsp; &nbsp; &nbsp; Loading...</h1>\n  <br /><br /><br />\n</div>\n\n<ion-content *ngIf='newsitems' >\n  <ion-list lines=\"none\" >\n    <ion-item class='item-borderless' *ngFor=\"let n of newsitems\">\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.photos\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n<!--          <ion-card padding class='medium-cover'>-->\n<!--            <p><ion-icon slot=\"start\" name='camera'></ion-icon> &nbsp; {{ n.name }} ({{ n.photos.length }})</p>-->\n<!--            <p>{{ n.created_at }}</p>-->\n<!--          </ion-card>-->\n          <ion-item class='flex-scroll-inner' *ngFor=\"let ph of n.photos\">\n\n            <ion-card padding class='medium-photo'>\n              <img [src]=\"ph.small_url\" (click)=\"openImageViewer(ph.small_url)\"  />\n            </ion-card>\n\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div padding class='flex-scroll-container' *ngIf=\"n.item_type=='video'\" >\n        <ion-list lines=\"none\" class='flex-scroll' >\n          <ion-card padding class='medium-cover'>\n            <p><ion-icon slot=\"start\" name='videocam'></ion-icon> &nbsp; {{ n.name }}</p>\n            <p>{{ n.created_at }}</p>\n          </ion-card>\n          <ion-card padding class='medium-video'>\n            <video src=\"{{ n.url }}\" width=\"100%\" controls ></video>\n          </ion-card>\n        </ion-list>\n      </div>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.item-borderless {\n  overflow-x: scroll; }\n/* width */\n.item-borderless::-webkit-scrollbar {\n  width: 10px; }\n/* Track */\n.item-borderless::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n/* Handle */\n.item-borderless::-webkit-scrollbar-thumb {\n  background: #888; }\n/* Handle on hover */\n.item-borderless::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n.thumb {\n  height: 2rem;\n  float: left; }\n.flex-scroll-container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: 100%;\n  height: 80vh;\n  padding-right: 0;\n  padding: 0;\n  margin-bottom: 15px; }\n/*\n[1]: Make a flex container so all our items align as necessary\n[2]: Prevent items from wrapping\n[3]: Automatic overflow means a scroll bar won’t be present if it isn’t needed\n[4]: Make it smooth scrolling on iOS devices\n[5]: Hide the ugly scrollbars in Edge until the scrollable area is hovered\n[6]: Hide the scroll bar in WebKit browsers\n*/\n.flex-scroll {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  /* [1] */\n  flex-wrap: nowrap;\n  /* [2] */\n  overflow-x: auto;\n  /* [3] */\n  -webkit-overflow-scrolling: touch;\n  /* [4] */\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  /* [5] */\n  padding: 0;\n  margin: 0; }\n.flex-scroll::-webkit-scrollbar {\n  display: none;\n  /* [6] */\n  height: 80vh; }\n.flex-scroll-inner {\n  padding-right: 0;\n  border: 0;\n  margin: auto; }\n.medium-cover {\n  background: #cecece;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-box-flex: 0;\n          flex: 0 0 0;\n  min-width: 16em;\n  height: 100%;\n  margin: 0; }\n.medium-photo {\n  padding: 2vh;\n  max-height: 80vh;\n  min-width: 20em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid red;\n  /* flex: 0 0 0; */\n  margin: 0; }\n.medium-photo img {\n    margin: auto;\n    width: 400px;\n    height: 267px; }\n.medium-video {\n  background: #cecece;\n  min-height: 100%;\n  height: 100%;\n  min-width: 30em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0 0 0 2em; }\n.medium-video video {\n  max-height: 70vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIiwiL2hvbWUvbXVoYW1tYWQvRG9jdW1lbnRzL3Byb2plY3RzL3RnbV9pb25pYy9pb25pYy9zcmMvYXBwL25ld3NmZWVkL25ld3NmZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7RUFDRSxtQkFBa0IsRUFDbkI7QUFHRCxXQUFXO0FBQ1g7RUFDRSxZQUFXLEVBQ1o7QUFFRCxXQUFXO0FBQ1g7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRCxZQUFZO0FBQ1o7RUFDRSxpQkFBZ0IsRUFDakI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRSxpQkFBZ0IsRUFDakI7QUFPQztFQUNBLGFBQVk7RUFDWixZQUFXLEVBQ1o7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLG9CQUFtQixFQUNwQjtBQUVEOzs7Ozs7O0VBT0U7QUFDRjtFQUNFLCtCQUFzQjtFQUF0Qiw0QkFBc0I7RUFBdEIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixxQkFBYTtFQUFiLGNBQWE7RUFBRSxTQUFTO0VBQ3hCLGtCQUFpQjtFQUFFLFNBQVM7RUFDNUIsaUJBQWdCO0VBQUUsU0FBUztFQUMzQixrQ0FBaUM7RUFBRSxTQUFTO0VBQzVDLDZDQUE0QztFQUFFLFNBQVM7RUFFdkQsV0FBVTtFQUNWLFVBQVMsRUFDVjtBQUNEO0VBQ0UsY0FBYTtFQUFFLFNBQVM7RUFDeEIsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULGFBQVksRUFDYjtBQUtEO0VBQ0Usb0JBQW1CO0VBQ25CLHFCQUFpQjtLQUFqQixrQkFBaUI7RUFDakIsb0JBQVc7VUFBWCxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixhQUFZO0VBQ1osVUFBUyxFQUNWO0FBRUQ7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVMsRUFNVjtBQWJEO0lBU0ksYUFBWTtJQUNaLGFBQVk7SUFDWixjQUFhLEVBQ2Q7QUFFSDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGtCQUFpQixFQUNsQjtBQUdEO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbmV3c2ZlZWQvbmV3c2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLml0ZW0tYm9yZGVybGVzcyB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDsgfVxuXG4vKiB3aWR0aCAqL1xuLml0ZW0tYm9yZGVybGVzczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDsgfVxuXG4vKiBUcmFjayAqL1xuLml0ZW0tYm9yZGVybGVzczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyB9XG5cbi8qIEhhbmRsZSAqL1xuLml0ZW0tYm9yZGVybGVzczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4OyB9XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLml0ZW0tYm9yZGVybGVzczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1OyB9XG5cbi50aHVtYiB7XG4gIGhlaWdodDogMnJlbTtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmZsZXgtc2Nyb2xsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG5cbi8qXG5bMV06IE1ha2UgYSBmbGV4IGNvbnRhaW5lciBzbyBhbGwgb3VyIGl0ZW1zIGFsaWduIGFzIG5lY2Vzc2FyeVxuWzJdOiBQcmV2ZW50IGl0ZW1zIGZyb20gd3JhcHBpbmdcblszXTogQXV0b21hdGljIG92ZXJmbG93IG1lYW5zIGEgc2Nyb2xsIGJhciB3b27igJl0IGJlIHByZXNlbnQgaWYgaXQgaXNu4oCZdCBuZWVkZWRcbls0XTogTWFrZSBpdCBzbW9vdGggc2Nyb2xsaW5nIG9uIGlPUyBkZXZpY2VzXG5bNV06IEhpZGUgdGhlIHVnbHkgc2Nyb2xsYmFycyBpbiBFZGdlIHVudGlsIHRoZSBzY3JvbGxhYmxlIGFyZWEgaXMgaG92ZXJlZFxuWzZdOiBIaWRlIHRoZSBzY3JvbGwgYmFyIGluIFdlYktpdCBicm93c2Vyc1xuKi9cbi5mbGV4LXNjcm9sbCB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogWzFdICovXG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAvKiBbMl0gKi9cbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLyogWzNdICovXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLyogWzRdICovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAvKiBbNV0gKi9cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyB9XG5cbi5mbGV4LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBbNl0gKi9cbiAgaGVpZ2h0OiA4MHZoOyB9XG5cbi5mbGV4LXNjcm9sbC1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiBhdXRvOyB9XG5cbi5tZWRpdW0tY292ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZmxleDogMCAwIDA7XG4gIG1pbi13aWR0aDogMTZlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7IH1cblxuLm1lZGl1bS1waG90byB7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgbWluLXdpZHRoOiAyMGVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAwIDAgMDsgKi9cbiAgbWFyZ2luOiAwOyB9XG4gIC5tZWRpdW0tcGhvdG8gaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMjY3cHg7IH1cblxuLm1lZGl1bS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNjZWNlY2U7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCAyZW07IH1cblxuLm1lZGl1bS12aWRlbyB2aWRlbyB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7IH1cbiIsIi5pdGVtLWJvcmRlcmxlc3N7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuXG4vKiB3aWR0aCAqL1xuLml0ZW0tYm9yZGVybGVzczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbi5pdGVtLWJvcmRlcmxlc3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG4uaXRlbS1ib3JkZXJsZXNzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuLml0ZW0tYm9yZGVybGVzczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG5cblxuXG5cblxuICAudGh1bWIge1xuICBoZWlnaHQ6IDJyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmxleC1zY3JvbGwtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qXG5bMV06IE1ha2UgYSBmbGV4IGNvbnRhaW5lciBzbyBhbGwgb3VyIGl0ZW1zIGFsaWduIGFzIG5lY2Vzc2FyeVxuWzJdOiBQcmV2ZW50IGl0ZW1zIGZyb20gd3JhcHBpbmdcblszXTogQXV0b21hdGljIG92ZXJmbG93IG1lYW5zIGEgc2Nyb2xsIGJhciB3b27igJl0IGJlIHByZXNlbnQgaWYgaXQgaXNu4oCZdCBuZWVkZWRcbls0XTogTWFrZSBpdCBzbW9vdGggc2Nyb2xsaW5nIG9uIGlPUyBkZXZpY2VzXG5bNV06IEhpZGUgdGhlIHVnbHkgc2Nyb2xsYmFycyBpbiBFZGdlIHVudGlsIHRoZSBzY3JvbGxhYmxlIGFyZWEgaXMgaG92ZXJlZFxuWzZdOiBIaWRlIHRoZSBzY3JvbGwgYmFyIGluIFdlYktpdCBicm93c2Vyc1xuKi9cbi5mbGV4LXNjcm9sbCB7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDsgLyogWzFdICovXG4gIGZsZXgtd3JhcDogbm93cmFwOyAvKiBbMl0gKi9cbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogWzNdICovXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgLyogWzRdICovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyOyAvKiBbNV0gKi9cblxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uZmxleC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTsgLyogWzZdICovXG4gIGhlaWdodDogODB2aDtcbn1cbi5mbGV4LXNjcm9sbC1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5cblxuXG4ubWVkaXVtLWNvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGZsZXg6IDAgMCAwO1xuICBtaW4td2lkdGg6IDE2ZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWVkaXVtLXBob3RvIHtcbiAgcGFkZGluZzogMnZoO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtaW4td2lkdGg6IDIwZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIC8qIGZsZXg6IDAgMCAwOyAqL1xuICBtYXJnaW46IDA7XG4gIGltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDI2N3B4O1xuICB9XG59XG4ubWVkaXVtLXZpZGVvIHtcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAwIDJlbTtcbn1cbi5tZWRpdW0tdmlkZW8taW5uZXIge1xufVxuLm1lZGl1bS12aWRlbyB2aWRlbyB7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.ts ***!
  \*******************************************/
/*! exports provided: NewsfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPage", function() { return NewsfeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
/* harmony import */ var _modal_image_viewer_image_viewer_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/image-viewer/image-viewer.page */ "./src/app/modal/image-viewer/image-viewer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};









var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage(appService, 
    // private C: C,
    nativeStorage, router, httpClient, toastController, modalController) {
        var _this = this;
        this.appService = appService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.modalController = modalController;
        this.currentUser = null;
        this.newsitems = [];
        this.mainTitle = '';
        appService.setTitle('Newsfeed');
        this.mainTitle = 'Newsfeed';
        this.nativeStorage.getItem('current_user').then(function (data) {
            _this.currentUser = data;
            if ('facebook' == data.type) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.accessToken);
                var answer = _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].newsitemsPath, { params: params });
                answer.subscribe(function (data) {
                    if (data['newsitems']) {
                        _this.newsitems = data['newsitems'];
                    }
                }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    var toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('+++ error from m3 1-:', JSON.stringify(error));
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'The token has expired? Please login.',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('+++ newsfeed doesnt have current_user:', error);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are not logged in - please login.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.ngOnInit();
            }
            // Instance of should be:
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    NewsfeedPage.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.currentMessage.subscribe(function (message) {
            console.log('+++ new message:', message);
            if (message == _const__WEBPACK_IMPORTED_MODULE_7__["C"].didLogin) {
                _this.render();
            }
        });
    };
    NewsfeedPage.prototype.render = function () {
        var _this = this;
        this.nativeStorage.getItem('current_user').then(function (data) {
            _this.currentUser = data;
            if ('facebook' == data.type) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.accessToken);
                var answer = _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].newsitemsPath, { params: params });
                answer.subscribe(function (data) {
                    if (data['newsitems']) {
                        _this.newsitems = data['newsitems'];
                    }
                }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    var toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('+++ error from m3 1-:', JSON.stringify(error));
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'The token has expired? Please login.',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('+++ newsfeed doesnt have current_user:', error);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'You are not logged in - please login.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    NewsfeedPage.prototype.ionViewDidLoad = function () {
        console.log('+++ newsfeed ionViewDidLoad');
    };
    NewsfeedPage.prototype.openImageViewer = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_image_viewer_image_viewer_page__WEBPACK_IMPORTED_MODULE_8__["ImageViewerPage"],
                            componentProps: {
                                image: url
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NewsfeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/newsfeed/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/newsfeed/newsfeed.page.scss")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], NewsfeedPage);
    return NewsfeedPage;
}());

/**
  ionViewDidLoad
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
  ionViewWillUnload
  ionViewCanEnter
*/


/***/ })

}]);
//# sourceMappingURL=newsfeed-newsfeed-module.js.map