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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), /*#__PURE__*/ movies = ref[0], setMovies = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _asyncToGenerator(_Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var results;\n            return _Users_chugyohyeon_Documents_nextjs_intro_Next_JS_Basic_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/movies\");\n                    case 2:\n                        _ctx.next = 4;\n                        return _ctx.sent.json();\n                    case 4:\n                        results = _ctx.sent.results;\n                        setMovies(results);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-15cd020fdec4cc0a\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"jsx-15cd020fdec4cc0a\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 19\n            }, this),\n            movies === null || movies === void 0 ? void 0 : movies.map(function(movie) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-15cd020fdec4cc0a\" + \" \" + \"movie\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"http://image.tmdb.org/t/p/w500\".concat(movie.poster_path),\n                            className: \"jsx-15cd020fdec4cc0a\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            className: \"jsx-15cd020fdec4cc0a\",\n                            children: movie.original_title\n                        }, void 0, false, {\n                            fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"15cd020fdec4cc0a\",\n                children: \".container.jsx-15cd020fdec4cc0a{display:grid;\\ngrid-template-columns:1fr 1fr;\\npadding:20px;\\ngap:20px}\\n.movie.jsx-15cd020fdec4cc0a img.jsx-15cd020fdec4cc0a{max-width:100%;\\nborder-radius:12px;\\n-webkit-transition:-webkit-transform 0.2s ease-in-out;\\ntransition:transform 0.2s ease-in-out;\\nbox-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}\\n.movie.jsx-15cd020fdec4cc0a:hover img.jsx-15cd020fdec4cc0a{-webkit-transform:scale(1.03) translateY(-5px);\\n-moz-transform:scale(1.03) translateY(-5px);\\n-ms-transform:scale(1.03) translateY(-5px);\\ntransform:scale(1.03) translateY(-5px)}\\n.movie.jsx-15cd020fdec4cc0a h4.jsx-15cd020fdec4cc0a{font-size:18px;\\ntext-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLFFBQVEsQ0FBQ0csSUFBSSxHQUFHLENBQUM7OztJQUM5QixHQUFLLENBQXVCRixHQUFVLEdBQVZBLCtDQUFRLGtCQUE3QkcsTUFBTSxHQUFlSCxHQUFVLEtBQXZCSSxTQUFTLEdBQUlKLEdBQVU7SUFDdENELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDOzZMQUNkLFFBQVEsV0FBSSxDQUFDO2dCQUNKTSxPQUFPOzs7OzsrQkFBa0JDLEtBQUssQ0FBRSxDQUFXOzs7eUNBQUlDLElBQUk7O3dCQUFuREYsT0FBTyxhQUFQQSxPQUFPO3dCQUNmRCxTQUFTLENBQUNDLE9BQU87Ozs7OztRQUNuQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sNkVBQ0hHLENBQUc7a0RBQVcsQ0FBVzs7d0ZBQ3ZCUCx1REFBRztnQkFBQ1EsS0FBSyxFQUFDLENBQU07Ozs7OzthQUNmTixNQUFNLGdGQUFLTyxDQUFFOzswQkFBQyxDQUFVOzs7Ozs7WUFDekJQLE1BQU0sYUFBTkEsTUFBTSxLQUFOQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLE1BQU0sQ0FBRVEsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEtBQUs7OEJBQ2hCLE1BQU0sK0RBQUxKLENBQUc7OERBQVcsQ0FBTzs7b0dBQ25CSyxDQUFHOzRCQUFDQyxHQUFHLEVBQUcsQ0FBOEIsZ0NBQW9CLE9BQWxCRixLQUFLLENBQUNHLFdBQVc7Ozs7Ozs7b0dBQzNETCxDQUFFOztzQ0FBRUUsS0FBSyxDQUFDSSxjQUFjOzs7Ozs7O21CQUZDSixLQUFLLENBQUNLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QjVDLENBQUM7R0F6Q3VCZixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCAoYXdhaXQgZmV0Y2goYC9hcGkvbW92aWVzYCkpLmpzb24oKTtcbiAgICAgIHNldE1vdmllcyhyZXN1bHRzKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgIHshbW92aWVzICYmIDxoND5Mb2FkaW5nLi4uPC9oND59XG4gICAgICB7bW92aWVzPy5tYXAobW92aWUgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllXCIga2V5PXttb3ZpZS5pZH0+XG4gICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofWB9IC8+XG4gICAgICAgICAgPGg0Pnttb3ZpZS5vcmlnaW5hbF90aXRsZX08L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubW92aWUgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5tb3ZpZTpob3ZlciBpbWcge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMykgdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgICAgfVxuICAgICAgICAubW92aWUgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlbyIsIkhvbWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJyZXN1bHRzIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwidGl0bGUiLCJoNCIsIm1hcCIsIm1vdmllIiwiaW1nIiwic3JjIiwicG9zdGVyX3BhdGgiLCJvcmlnaW5hbF90aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});