"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/components/Seo.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/components/Seo.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFYixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLDZFQUNIRixrREFBSTs4RkFDRkUsQ0FBSzs7Z0JBQUVBLEtBQUs7Z0JBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O0FBR2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtaW50cm8vLi9jb21wb25lbnRzL1Nlby5qcz80Mjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VvKHsgdGl0bGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX0gfCBOZXh0IE1vdmllczwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJTZW8iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\nconst API_KEY = \"a695e0cfa850fe04e3cd07cd0027d795\";\nfunction Home() {\n    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { results  } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n            setMovies(results);\n        })();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 19\n            }, this),\n            movies?.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, movie.id, false, {\n                    fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chugyohyeon/Documents/nextjs-intro/Next.JS-Basic/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFFbkMsS0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBa0M7QUFFbkMsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUTtJQUNwQ0QsZ0RBQVMsS0FBTyxDQUFDO21CQUNGLENBQUM7WUFDWixLQUFLLENBQUMsQ0FBQyxDQUFDTyxPQUFPLEVBQUMsQ0FBQyxHQUFHLEtBQUssRUFDdkIsS0FBSyxDQUFDQyxLQUFLLEVBQ1IsbURBQW1ELEVBQUVMLE9BQU8sS0FFL0RNLElBQUk7WUFDTkgsU0FBUyxDQUFDQyxPQUFPO1FBQ25CLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDSEcsQ0FBRzs7d0ZBQ0RSLHVEQUFHO2dCQUFDUyxLQUFLLEVBQUMsQ0FBTTs7Ozs7O2FBQ2ZOLE1BQU0sZ0ZBQUtPLENBQUU7MEJBQUMsQ0FBVTs7Ozs7O1lBQ3pCUCxNQUFNLEVBQUVRLEdBQUcsRUFBQ0MsS0FBSywrRUFDZkosQ0FBRzswR0FDREUsQ0FBRTtrQ0FBRUUsS0FBSyxDQUFDQyxjQUFjOzs7Ozs7bUJBRGpCRCxLQUFLLENBQUNFLEVBQUU7Ozs7Ozs7Ozs7OztBQU0xQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWludHJvLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xuXG5jb25zdCBBUElfS0VZID0gXCJhNjk1ZTBjZmE4NTBmZTA0ZTNjZDA3Y2QwMDI3ZDc5NVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCAoXG4gICAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT0ke0FQSV9LRVl9YFxuICAgICAgICApXG4gICAgICApLmpzb24oKTtcbiAgICAgIHNldE1vdmllcyhyZXN1bHRzKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cbiAgICAgIHshbW92aWVzICYmIDxoND5Mb2FkaW5nLi4uPC9oND59XG4gICAgICB7bW92aWVzPy5tYXAobW92aWUgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bW92aWUuaWR9PlxuICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlbyIsIkFQSV9LRVkiLCJIb21lIiwibW92aWVzIiwic2V0TW92aWVzIiwicmVzdWx0cyIsImZldGNoIiwianNvbiIsImRpdiIsInRpdGxlIiwiaDQiLCJtYXAiLCJtb3ZpZSIsIm9yaWdpbmFsX3RpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();