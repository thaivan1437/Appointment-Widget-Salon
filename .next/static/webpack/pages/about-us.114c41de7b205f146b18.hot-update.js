webpackHotUpdate_N_E("pages/about-us",{

/***/ "./src/includes/AboutUs/index.js":
/*!***************************************!*\
  !*** ./src/includes/AboutUs/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cards */ \"./src/includes/AboutUs/Cards.js\");\n/* harmony import */ var _cardData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cardData */ \"./src/includes/AboutUs/cardData.js\");\n/* harmony import */ var _AboutUs_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AboutUs.scss */ \"./src/includes/AboutUs/AboutUs.scss\");\n/* harmony import */ var _AboutUs_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AboutUs_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/macos/Documents/Outsoure/Salon-manager/belmont-beauty-salon/src/includes/AboutUs/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Permanent = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Permanent, _Component);\n\n  var _super = _createSuper(Permanent);\n\n  function Permanent(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Permanent);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Permanent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n        className: _AboutUs_scss__WEBPACK_IMPORTED_MODULE_9___default.a.container,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 16\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n        style: myStyle.sloganText,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }\n      }, \"\\\"Our salon is completely remodeled and under new management\\\"\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }\n      }, _cardData__WEBPACK_IMPORTED_MODULE_8__[\"default\"].map(function (item, index) {\n        return __jsx(_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          key: index,\n          body: item.body,\n          imgUrl: item.imgUrl,\n          bgColor: item.bgColor,\n          leftMargin: item.leftMargin,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 28\n          }\n        });\n      })));\n    }\n  }]);\n\n  return Permanent;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar myStyle = {\n  sloganText: {\n    marginTop: 70,\n    fontSize: 30,\n    color: '#1D3557',\n    fontWeight: 'bold',\n    textAlign: 'center'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Permanent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luY2x1ZGVzL0Fib3V0VXMvaW5kZXguanM/NmIxNiJdLCJuYW1lcyI6WyJQZXJtYW5lbnQiLCJwcm9wcyIsInN0YXRlIiwiY2xhc3NlcyIsImNvbnRhaW5lciIsIm15U3R5bGUiLCJzbG9nYW5UZXh0IiwiY2FyZERhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJib2R5IiwiaW1nVXJsIiwiYmdDb2xvciIsImxlZnRNYXJnaW4iLCJDb21wb25lbnQiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0lBR01BLFM7Ozs7O0FBQ0YscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBSGU7QUFLbEI7Ozs7NkJBRVE7QUFBQTs7QUFDTCxhQUFPLE1BQUMseURBQUQ7QUFBVyxpQkFBUyxFQUFFQyxvREFBTyxDQUFDQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0gsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxtREFBRDtBQUFLLGFBQUssRUFBRUMsT0FBTyxDQUFDQyxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQURKLENBREcsRUFJSCxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSUMsaURBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN6QixlQUFPLE1BQUMsOENBQUQ7QUFBTyxhQUFHLEVBQUVBLEtBQVo7QUFBbUIsY0FBSSxFQUFFRCxJQUFJLENBQUNFLElBQTlCO0FBQW9DLGdCQUFNLEVBQUVGLElBQUksQ0FBQ0csTUFBakQ7QUFBeUQsaUJBQU8sRUFBRUgsSUFBSSxDQUFDSSxPQUF2RTtBQUFnRixvQkFBVSxFQUFFSixJQUFJLENBQUNLLFVBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNILE9BRkQsQ0FGSixDQUpHLENBQVA7QUFZSDs7OztFQXJCbUJDLCtDOztBQXdCeEIsSUFBTVYsT0FBTyxHQUFHO0FBQ1pDLFlBQVUsRUFBRTtBQUNSVSxhQUFTLEVBQUMsRUFERjtBQUVSQyxZQUFRLEVBQUMsRUFGRDtBQUdSQyxTQUFLLEVBQUUsU0FIQztBQUlSQyxjQUFVLEVBQUUsTUFKSjtBQUtSQyxhQUFTLEVBQUM7QUFMRjtBQURBLENBQWhCO0FBVWVwQix3RUFBZiIsImZpbGUiOiIuL3NyYy9pbmNsdWRlcy9BYm91dFVzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBDYXJkcyBmcm9tIFwiLi9DYXJkc1wiO1xuaW1wb3J0IGNhcmREYXRhIGZyb20gXCIuL2NhcmREYXRhXCJcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9BYm91dFVzLnNjc3MnXG5cblxuY2xhc3MgUGVybWFuZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBzdHlsZT17bXlTdHlsZS5zbG9nYW5UZXh0fT5cIk91ciBzYWxvbiBpcyBjb21wbGV0ZWx5IHJlbW9kZWxlZCBhbmQgdW5kZXIgbmV3IG1hbmFnZW1lbnRcIjwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhcmREYXRhLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmRzIGtleT17aW5kZXh9IGJvZHk9e2l0ZW0uYm9keX0gaW1nVXJsPXtpdGVtLmltZ1VybH0gYmdDb2xvcj17aXRlbS5iZ0NvbG9yfSBsZWZ0TWFyZ2luPXtpdGVtLmxlZnRNYXJnaW59IC8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICB9XG59XG5cbmNvbnN0IG15U3R5bGUgPSB7XG4gICAgc2xvZ2FuVGV4dDoge1xuICAgICAgICBtYXJnaW5Ub3A6NzAsXG4gICAgICAgIGZvbnRTaXplOjMwLFxuICAgICAgICBjb2xvcjogJyMxRDM1NTcnLFxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVybWFuZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/includes/AboutUs/index.js\n");

/***/ })

})