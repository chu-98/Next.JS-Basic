"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), /*#__PURE__*/ movies = ref[0], setMovies = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _asyncToGenerator(_Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var results;\n            return _Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/movies\");\n                    case 2:\n                        _ctx.next = 4;\n                        return _ctx.sent.json();\n                    case 4:\n                        results = _ctx.sent.results;\n                        setMovies(results);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-b3e1b6a7c9b96113\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"jsx-b3e1b6a7c9b96113\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 19\n            }, this),\n            movies === null || movies === void 0 ? void 0 : movies.map(function(movie) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-b3e1b6a7c9b96113\" + \" \" + \"movie\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"http://image.tmdb.org/t/p/w500\".concat(movie.poster_path),\n                            className: \"jsx-b3e1b6a7c9b96113\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            className: \"jsx-b3e1b6a7c9b96113\",\n                            children: movie.original_title\n                        }, void 0, false, {\n                            fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"b3e1b6a7c9b96113\",\n                children: \"\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLFFBQVEsQ0FBQ0csSUFBSSxHQUFHLENBQUM7OztJQUM5QixHQUFLLENBQXVCRixHQUFVLEdBQVZBLCtDQUFRLGtCQUE3QkcsTUFBTSxHQUFlSCxHQUFVLEtBQXZCSSxTQUFTLEdBQUlKLEdBQVU7SUFDdENELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDOzZMQUNkLFFBQVEsV0FBSSxDQUFDO2dCQUNKTSxPQUFPOzs7OzsrQkFBa0JDLEtBQUssQ0FBRSxDQUFXOzs7eUNBQUlDLElBQUk7O3dCQUFuREYsT0FBTyxhQUFQQSxPQUFPO3dCQUNmRCxTQUFTLENBQUNDLE9BQU87Ozs7OztRQUNuQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBQ0hHLENBQUc7a0RBQVcsQ0FBVzs7d0ZBQ3ZCUCx1REFBRztnQkFBQ1EsS0FBSyxFQUFDLENBQU07Ozs7OzthQUNmTixNQUFNLGdGQUFLTyxDQUFFOzswQkFBQyxDQUFVOzs7Ozs7WUFDekJQLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLE1BQU0sQ0FBRVEsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEtBQUs7OEJBQ2hCLE1BQU0sK0RBQUxKLENBQUc7OERBQVcsQ0FBTzs7b0dBQ25CSyxDQUFHOzRCQUFDQyxHQUFHLEVBQUcsQ0FBOEIsZ0NBQW9CLE9BQWxCRixLQUFLLENBQUNHLFdBQVc7Ozs7Ozs7b0dBQzNETCxDQUFFOztzQ0FBRUUsS0FBSyxDQUFDSSxjQUFjOzs7Ozs7O21CQUZDSixLQUFLLENBQUNLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUMsQ0FBQztHQXJCdUJmLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IChhd2FpdCBmZXRjaChgL2FwaS9tb3ZpZXNgKSkuanNvbigpO1xuICAgICAgc2V0TW92aWVzKHJlc3VsdHMpO1xuICAgIH0pKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPFNlbyB0aXRsZT1cIkhvbWVcIiAvPlxuICAgICAgeyFtb3ZpZXMgJiYgPGg0PkxvYWRpbmcuLi48L2g0Pn1cbiAgICAgIHttb3ZpZXM/Lm1hcChtb3ZpZSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIiBrZXk9e21vdmllLmlkfT5cbiAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9YH0gLz5cbiAgICAgICAgICA8aDQ+e21vdmllLm9yaWdpbmFsX3RpdGxlfTwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2VvIiwiSG9tZSIsIm1vdmllcyIsInNldE1vdmllcyIsInJlc3VsdHMiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJ0aXRsZSIsImg0IiwibWFwIiwibW92aWUiLCJpbWciLCJzcmMiLCJwb3N0ZXJfcGF0aCIsIm9yaWdpbmFsX3RpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});