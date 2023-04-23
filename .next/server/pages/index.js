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

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"inputfield\": \"Home_inputfield__Q1Qqe\",\n\t\"button\": \"Home_button__Zs7A2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yZmQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImlucHV0ZmllbGRcIjogXCJIb21lX2lucHV0ZmllbGRfX1ExUXFlXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fX1pzN0EyXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typewriter-effect */ \"typewriter-effect\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Home() {\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const submitEmail = async ()=>{\n        try {\n            const response = await fetch(\"https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            console.log(data);\n        } catch (error) {\n            console.log(error);\n        }\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Arpit Singh Resume\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/footer.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            onInit: (typewriter)=>{\n                                typewriter.typeString(\"Hi! Get started by typing your email address below.\").callFunction(()=>{\n                                    console.log(\"String typed out!\");\n                                }).start();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            required: true,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputfield),\n                            id: \"outlined-basic\",\n                            color: \"secondary\",\n                            label: \"Email\",\n                            placeholder: \"abc@xyz.com\",\n                            value: email,\n                            onChange: ({ target  })=>setEmail(target?.value),\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: submitEmail,\n                            children: \"Hit Go\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUVpQjtBQUNKO0FBQ007QUFDTDtBQUNWO0FBRWxCLFNBQVNNLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1JLGNBQWMsVUFBWTtRQUM5QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiw4REFDQTtnQkFDRUMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUjtnQkFBTTtnQkFDN0JTLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUYsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUNIO1FBQ2QsRUFBRSxPQUFPSSxPQUFPO1lBQ2RGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZDtRQUNBYixTQUFTO0lBQ1g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNSLGtEQUFJQTs7a0NBQ0gsOERBQUNzQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVcxQixxRUFBVzs7a0NBQzFCLDhEQUFDMkI7d0JBQUlELFdBQVcxQiw0RUFBa0I7a0NBQ2hDLDRFQUFDRywwREFBVUE7NEJBQ1QwQixRQUFRLENBQUNDLGFBQWU7Z0NBQ3RCQSxXQUNHQyxVQUFVLENBQ1QsdURBRURDLFlBQVksQ0FBQyxJQUFNO29DQUNsQmQsUUFBUUMsR0FBRyxDQUFDO2dDQUNkLEdBQ0NjLEtBQUs7NEJBQ1Y7Ozs7Ozs7Ozs7O2tDQUdKLDhEQUFDTjtrQ0FDQyw0RUFBQ3pCLGdFQUFTQTs0QkFDUmdDLFFBQVE7NEJBQ1JSLFdBQVcxQiwyRUFBaUI7NEJBQzVCb0MsSUFBRzs0QkFDSEMsT0FBTTs0QkFDTkMsT0FBTTs0QkFDTkMsYUFBWTs0QkFDWkMsT0FBT2xDOzRCQUNQbUMsVUFBVSxDQUFDLEVBQUVDLE9BQU0sRUFBRSxHQUFLbkMsU0FBU21DLFFBQVFGO3NDQUM1Qzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNiO2tDQUNDLDRFQUFDMUIsNkRBQU1BOzRCQUNMeUIsV0FBVzFCLHVFQUFhOzRCQUN4QjRDLFNBQVE7NEJBQ1JQLE9BQU07NEJBQ05RLFNBQVNyQztzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDb250ZW50LCBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSBcInR5cGV3cml0ZXItZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEVtYWlsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vNzRtc2hmbHd0Zy5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIixcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHNldEVtYWlsKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXJwaXQgU2luZ2ggUmVzdW1lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZm9vdGVyLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPFR5cGV3cml0ZXJcbiAgICAgICAgICAgIG9uSW5pdD17KHR5cGV3cml0ZXIpID0+IHtcbiAgICAgICAgICAgICAgdHlwZXdyaXRlclxuICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgXCJIaSEgR2V0IHN0YXJ0ZWQgYnkgdHlwaW5nIHlvdXIgZW1haWwgYWRkcmVzcyBiZWxvdy5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuY2FsbEZ1bmN0aW9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RyaW5nIHR5cGVkIG91dCFcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0ZmllbGR9XG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhYmNAeHl6LmNvbVwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEVtYWlsKHRhcmdldD8udmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0RW1haWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGl0IEdvXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBld3JpdGVyIiwidXNlU3RhdGUiLCJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Ym1pdEVtYWlsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsIm9uSW5pdCIsInR5cGV3cml0ZXIiLCJ0eXBlU3RyaW5nIiwiY2FsbEZ1bmN0aW9uIiwic3RhcnQiLCJyZXF1aXJlZCIsImlucHV0ZmllbGQiLCJpZCIsImNvbG9yIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "typewriter-effect":
/*!************************************!*\
  !*** external "typewriter-effect" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("typewriter-effect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();