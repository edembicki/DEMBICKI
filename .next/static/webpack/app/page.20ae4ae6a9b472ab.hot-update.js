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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Video: function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ \"(app-pages-browser)/./src/components/Container.tsx\");\n/* __next_internal_client_entry_do_not_use__ Video auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Video(param) {\n    let { videoId } = param;\n    _s();\n    const [playVideo, setPlayVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (!videoId) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700\",\n            children: [\n                !playVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setPlayVideo(!playVideo),\n                    className: \"absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"w-16 h-16  lg:w-28 lg:h-28\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Play Video\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this),\n                playVideo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    className: \"w-full h-full aspect-video\",\n                    allow: \"fullscreen;autoplay\",\n                    height: \"848\",\n                    src: \"https://streamable.com/e/4jwlrb?autoplay=1\",\n                    width: \"680\",\n                    style: {\n                        border: \"none\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vesan\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\PROJETOS\\\\DEMBICKI_ASSESSORIA\\\\DEMBICKI\\\\src\\\\components\\\\Video.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Video, \"es05Jj0vu851fo3CU94fwvAoPIc=\");\n_c = Video;\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ2tCO0FBTTVDLFNBQVNFLE1BQU0sS0FBaUM7UUFBakMsRUFBRUMsT0FBTyxFQUF3QixHQUFqQzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLElBQUksQ0FBQ0csU0FBUyxPQUFPO0lBRXJCLHFCQUNFLDhEQUFDRiw0REFBU0E7a0JBQ1IsNEVBQUNLO1lBQUlDLFdBQVU7O2dCQUNaLENBQUNILDJCQUNBLDhEQUFDSTtvQkFDQ0MsU0FBUyxJQUFNSixhQUFhLENBQUNEO29CQUM3QkcsV0FBVTs7c0NBRVYsOERBQUNHOzRCQUNDQyxPQUFNOzRCQUNOSixXQUFVOzRCQUNWSyxTQUFROzRCQUNSQyxNQUFLO3NDQUVMLDRFQUFDQztnQ0FDQ0MsVUFBUztnQ0FDVEMsR0FBRTtnQ0FDRkMsVUFBUzs7Ozs7Ozs7Ozs7c0NBR2IsOERBQUNDOzRCQUFLWCxXQUFVO3NDQUFVOzs7Ozs7Ozs7Ozs7Z0JBRzdCSCwyQkFDQyw4REFBQ2U7b0JBQ0NaLFdBQVU7b0JBQ1ZhLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLEtBQUk7b0JBQ0pDLE9BQU07b0JBQ05DLE9BQU87d0JBQUNDLFFBQU87b0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0dBekNnQnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvLnRzeD8yNDU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5cclxuaW50ZXJmYWNlIFZpZGVvUHJvcHMge1xyXG4gIHZpZGVvSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZpZGVvKHsgdmlkZW9JZCB9OiBSZWFkb25seTxWaWRlb1Byb3BzPikge1xyXG4gIGNvbnN0IFtwbGF5VmlkZW8sIHNldFBsYXlWaWRlb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmICghdmlkZW9JZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVs1MDBweF0gbWF4LXctNHhsIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuIGxnOm1iLTIwIHJvdW5kZWQtMnhsIGJnLWluZGlnby0zMDAgY3Vyc29yLXBvaW50ZXIgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1wdXJwbGUtNDAwIHRvLWluZGlnby03MDBcIj5cclxuICAgICAgICB7IXBsYXlWaWRlbyAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBsYXlWaWRlbyghcGxheVZpZGVvKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtYXV0byB3LTE2IGgtMTYgdGV4dC13aGl0ZSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIGxnOnctMjggbGc6aC0yOCB0b3AtMS8yIGxlZnQtMS8yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiAgbGc6dy0yOCBsZzpoLTI4XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek05LjU1NSA3LjE2OEExIDEgMCAwMDggOHY0YTEgMSAwIDAwMS41NTUuODMybDMtMmExIDEgMCAwMDAtMS42NjRsLTMtMnpcIlxyXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlBsYXkgVmlkZW88L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtwbGF5VmlkZW8gJiYgKFxyXG4gICAgICAgICAgPGlmcmFtZSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhc3BlY3QtdmlkZW9cIiBcclxuICAgICAgICAgICAgYWxsb3c9XCJmdWxsc2NyZWVuO2F1dG9wbGF5XCIgXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjg0OFwiIFxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3N0cmVhbWFibGUuY29tL2UvNGp3bHJiP2F1dG9wbGF5PTFcIiBcclxuICAgICAgICAgICAgd2lkdGg9XCI2ODBcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6J25vbmUnfX0+XHJcbiAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiVmlkZW8iLCJ2aWRlb0lkIiwicGxheVZpZGVvIiwic2V0UGxheVZpZGVvIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJzcGFuIiwiaWZyYW1lIiwiYWxsb3ciLCJoZWlnaHQiLCJzcmMiLCJ3aWR0aCIsInN0eWxlIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Video.tsx\n"));

/***/ })

});