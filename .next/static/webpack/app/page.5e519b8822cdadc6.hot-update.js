"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Video.tsx":
/*!**********************************!*\
  !*** ./src/components/Video.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Video: function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ \"(app-pages-browser)/./src/components/Container.tsx\");\n/* __next_internal_client_entry_do_not_use__ Video auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Video(param) {\n    let { videoId } = param;\n    _s();\n    const [playVideo, setPlayVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (!videoId) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700\",\n            children: [\n                !playVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setPlayVideo(!playVideo),\n                    className: \"absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"w-16 h-16  lg:w-28 lg:h-28\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Play Video\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this),\n                playVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: \"https://streamable.com/4jwlrb\",\n                    title: \"YouTube video player\",\n                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                    className: \"w-full h-full aspect-video\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Video, \"es05Jj0vu851fo3CU94fwvAoPIc=\");\n_c = Video;\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ2tCO0FBTTVDLFNBQVNFLE1BQU0sS0FBaUM7UUFBakMsRUFBRUMsT0FBTyxFQUF3QixHQUFqQzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLElBQUksQ0FBQ0csU0FBUyxPQUFPO0lBRXJCLHFCQUNFLDhEQUFDRiw0REFBU0E7a0JBQ1IsNEVBQUNLO1lBQUlDLFdBQVU7O2dCQUNaLENBQUNILDJCQUNBLDhEQUFDSTtvQkFDQ0MsU0FBUyxJQUFNSixhQUFhLENBQUNEO29CQUM3QkcsV0FBVTs7c0NBRVYsOERBQUNHOzRCQUNDQyxPQUFNOzRCQUNOSixXQUFVOzRCQUNWSyxTQUFROzRCQUNSQyxNQUFLO3NDQUVMLDRFQUFDQztnQ0FDQ0MsVUFBUztnQ0FDVEMsR0FBRTtnQ0FDRkMsVUFBUzs7Ozs7Ozs7Ozs7c0NBR2IsOERBQUNDOzRCQUFLWCxXQUFVO3NDQUFVOzs7Ozs7Ozs7Ozs7Z0JBRzdCSCwyQkFDQyw4REFBQ2U7b0JBQ0NDLEtBQU07b0JBQ05DLE9BQU07b0JBQ05DLE9BQU07b0JBQ05mLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBdkNnQkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW8udHN4PzI0NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcblxyXG5pbnRlcmZhY2UgVmlkZW9Qcm9wcyB7XHJcbiAgdmlkZW9JZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmlkZW8oeyB2aWRlb0lkIH06IFJlYWRvbmx5PFZpZGVvUHJvcHM+KSB7XHJcbiAgY29uc3QgW3BsYXlWaWRlbywgc2V0UGxheVZpZGVvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKCF2aWRlb0lkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzUwMHB4XSBtYXgtdy00eGwgbXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gbGc6bWItMjAgcm91bmRlZC0yeGwgYmctaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlciBiZy1ncmFkaWVudC10by10ciBmcm9tLXB1cnBsZS00MDAgdG8taW5kaWdvLTcwMFwiPlxyXG4gICAgICAgIHshcGxheVZpZGVvICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGxheVZpZGVvKCFwbGF5VmlkZW8pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC1hdXRvIHctMTYgaC0xNiB0ZXh0LXdoaXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgbGc6dy0yOCBsZzpoLTI4IHRvcC0xLzIgbGVmdC0xLzJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2ICBsZzp3LTI4IGxnOmgtMjhcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTkuNTU1IDcuMTY4QTEgMSAwIDAwOCA4djRhMSAxIDAgMDAxLjU1NS44MzJsMy0yYTEgMSAwIDAwMC0xLjY2NGwtMy0yelwiXHJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UGxheSBWaWRlbzwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3BsYXlWaWRlbyAmJiAoXHJcbiAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vc3RyZWFtYWJsZS5jb20vNGp3bHJiYH1cclxuICAgICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXHJcbiAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYXNwZWN0LXZpZGVvXCJcclxuICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiVmlkZW8iLCJ2aWRlb0lkIiwicGxheVZpZGVvIiwic2V0UGxheVZpZGVvIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJzcGFuIiwiaWZyYW1lIiwic3JjIiwidGl0bGUiLCJhbGxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Video.tsx\n"));

/***/ })

});