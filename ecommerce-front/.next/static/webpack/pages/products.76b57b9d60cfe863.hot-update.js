"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./components/ProductsGrid.js":
/*!************************************!*\
  !*** ./components/ProductsGrid.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductsGrid; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductBox */ \"./components/ProductBox.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n   display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 20px;\\n  @media screen and (min-width: 768px) {\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst StyleProductGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__.styled.div(_templateObject());\n_c = StyleProductGrid;\nfunction ProductsGrid(param) {\n    let { products } = param;\n    var _products;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyleProductGrid, {\n        children: ((_products = products) === null || _products === void 0 ? void 0 : _products.length) > 0 && products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProductBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...product\n            }, product._id, false, {\n                fileName: \"D:\\\\ecommerce-app\\\\ecommerce-front\\\\components\\\\ProductsGrid.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\ecommerce-app\\\\ecommerce-front\\\\components\\\\ProductsGrid.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c1 = ProductsGrid;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyleProductGrid\");\n$RefreshReg$(_c1, \"ProductsGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNMO0FBRXJDLE1BQU1FLG1CQUFtQkYscURBQU1BLENBQUNHLEdBQUc7S0FBN0JEO0FBU1MsU0FBU0UsYUFBYSxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7UUFHeEJBO0lBRlQscUJBQ0ksOERBQUNIO2tCQUNJRyxFQUFBQSxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVDLE1BQU0sSUFBRyxLQUFLRCxTQUFTRSxHQUFHLENBQUNDLENBQUFBLHdCQUNsQyw4REFBQ1AsbURBQVVBO2dCQUFvQixHQUFHTyxPQUFPO2VBQXhCQSxRQUFRQyxHQUFHOzs7Ozs7Ozs7O0FBSTVDO01BUndCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RzR3JpZC5qcz9jYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBQcm9kdWN0Qm94IGZyb20gXCIuL1Byb2R1Y3RCb3hcIlxyXG5cclxuY29uc3QgU3R5bGVQcm9kdWN0R3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMjBweDtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNHcmlkKHsgcHJvZHVjdHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVQcm9kdWN0R3JpZD5cclxuICAgICAgICAgICAge3Byb2R1Y3RzPy5sZW5ndGggPiAwICYmIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Qm94IGtleT17cHJvZHVjdC5faWR9IHsuLi5wcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlUHJvZHVjdEdyaWQ+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlByb2R1Y3RCb3giLCJTdHlsZVByb2R1Y3RHcmlkIiwiZGl2IiwiUHJvZHVjdHNHcmlkIiwicHJvZHVjdHMiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductsGrid.js\n"));

/***/ })

});