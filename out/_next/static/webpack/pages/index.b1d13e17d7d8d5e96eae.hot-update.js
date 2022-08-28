webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LinkList.js":
/*!********************************!*\
  !*** ./components/LinkList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_links_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/links.json */ "./json/links.json");
var _json_links_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/links.json */ "./json/links.json", 1);

var _jsxFileName = "E:\\linktree_page\\linkpro\\components\\LinkList.js";


function LinkList() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "flex px-3 sm:px-0",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "w-full md:w-4/5 lg:w-3/6 mx-auto",
      children: _json_links_json__WEBPACK_IMPORTED_MODULE_1__.map(function (link) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "mb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "relative transition duration-200 font-bold bg-green-500 border-green-500 border-2 hover:bg-transparent py-3 w-40 block text-center text-gray-800 hover:text-green-400 rounded-lg pl-10 md:px-12",
            href: link.url,
            alt: link.title,
            target: "_blank",
            rel: "noopener",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center",
              children: link.emoji
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: link.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, _this)
        }, link.title, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = LinkList;
/* harmony default export */ __webpack_exports__["default"] = (LinkList);

var _c;

$RefreshReg$(_c, "LinkList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5rTGlzdC5qcyJdLCJuYW1lcyI6WyJMaW5rTGlzdCIsImxpbmtzIiwibWFwIiwibGluayIsInVybCIsInRpdGxlIiwiZW1vamkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQixzQkFDRTtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBQyxrQ0FBZDtBQUFBLGdCQUNHQyw2Q0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDRCQUNiO0FBQUksbUJBQVMsRUFBQyxNQUFkO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLGlNQURaO0FBRUUsZ0JBQUksRUFBRUEsSUFBSSxDQUFDQyxHQUZiO0FBR0UsZUFBRyxFQUFFRCxJQUFJLENBQUNFLEtBSFo7QUFJRSxrQkFBTSxFQUFDLFFBSlQ7QUFLRSxlQUFHLEVBQUMsVUFMTjtBQUFBLG9DQU9FO0FBQU0sdUJBQVMsRUFBQyxnRUFBaEI7QUFBQSx3QkFBa0ZGLElBQUksQ0FBQ0c7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQUEsd0JBQU9ILElBQUksQ0FBQ0U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTBCRixJQUFJLENBQUNFLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7S0FyQlFMLFE7QUF1Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxZDEzZTE3ZDdkOGQ1ZTk2ZWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGlua3MgZnJvbSAnLi4vanNvbi9saW5rcy5qc29uJ1xyXG5cclxuZnVuY3Rpb24gTGlua0xpc3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggcHgtMyBzbTpweC0wXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy00LzUgbGc6dy0zLzYgbXgtYXV0b1wiPlxyXG4gICAgICAgIHtsaW5rcy5tYXAobGluayA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNFwiIGtleT17bGluay50aXRsZX0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZm9udC1ib2xkIGJnLWdyZWVuLTUwMCBib3JkZXItZ3JlZW4tNTAwIGJvcmRlci0yIGhvdmVyOmJnLXRyYW5zcGFyZW50IHB5LTMgdy00MCBibG9jayB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtZ3JlZW4tNDAwIHJvdW5kZWQtbGcgcGwtMTAgbWQ6cHgtMTJcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsudXJsfVxyXG4gICAgICAgICAgICAgIGFsdD17bGluay50aXRsZX1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIGFic29sdXRlIGxlZnQtMCB0b3AtMCBib3R0b20tMCBwbC0zIGZsZXggaXRlbXMtY2VudGVyXCI+e2xpbmsuZW1vaml9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntsaW5rLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbWFpbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9