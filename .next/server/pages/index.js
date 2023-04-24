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

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"inputfield\": \"Home_inputfield__Q1Qqe\",\n\t\"button\": \"Home_button__Zs7A2\",\n\t\"my-toast\": \"Home_my-toast__8A0f2\",\n\t\"my-toast-body\": \"Home_my-toast-body__Ux0H8\",\n\t\"my-toast-progress\": \"Home_my-toast-progress__JHJpb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yZmQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImlucHV0ZmllbGRcIjogXCJIb21lX2lucHV0ZmllbGRfX1ExUXFlXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fX1pzN0EyXCIsXG5cdFwibXktdG9hc3RcIjogXCJIb21lX215LXRvYXN0X184QTBmMlwiLFxuXHRcIm15LXRvYXN0LWJvZHlcIjogXCJIb21lX215LXRvYXN0LWJvZHlfX1V4MEg4XCIsXG5cdFwibXktdG9hc3QtcHJvZ3Jlc3NcIjogXCJIb21lX215LXRvYXN0LXByb2dyZXNzX19KSEpwYlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typewriter-effect */ \"typewriter-effect\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction Home() {\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const submitEmail = async ()=>{\n        const statusCode = 200;\n        try {\n            const response = await fetch(\"https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email: email\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            }).then((response)=>response.json()).then((data)=>{\n                if (data.status === 200) {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(\"You will recieve an email shortly.\", {\n                        position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER,\n                        autoClose: 7000,\n                        hideProgressBar: true,\n                        closeOnClick: false,\n                        pauseOnHover: false,\n                        draggable: false,\n                        progressClassName: \"my-toast-progress\",\n                        bodyClassName: \"my-toast-body\"\n                    });\n                } else {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(\"Sorry the email address entered is invalid, please try again.\", {\n                        position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER,\n                        autoClose: 7000,\n                        hideProgressBar: true,\n                        closeOnClick: false,\n                        pauseOnHover: false,\n                        draggable: false,\n                        progressClassName: \"my-toast-progress\",\n                        toastClassName: \"my-toast\",\n                        bodyClassName: \"my-toast-body\"\n                    });\n                }\n            });\n        } catch (error) {\n            console.log(error);\n        }\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Arpit Singh Resume\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/footer.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            onInit: (typewriter)=>{\n                                typewriter.typeString(\"Hi! To receive my resume start by typing your email address below & Hit Go!\").callFunction(()=>{\n                                    console.log(\"String typed out!\");\n                                }).start();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            required: true,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputfield),\n                            id: \"outlined-basic\",\n                            color: \"secondary\",\n                            label: \"Email\",\n                            placeholder: \"abc@xyz.com\",\n                            value: email,\n                            onChange: ({ target  })=>setEmail(target?.value),\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: submitEmail,\n                            children: \"Hit Go\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFFaUI7QUFDSjtBQUNNO0FBQ0w7QUFDVjtBQUNNO0FBR3hCLFNBQVNPLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1LLGNBQWMsVUFBWTtRQUM5QixNQUFNQyxhQUFhO1FBQ25CLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLDhEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVULE9BQU9BO2dCQUFNO2dCQUNwQ1UsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0YsR0FFQ0MsSUFBSSxDQUFDLENBQUNQLFdBQWFBLFNBQVNRLElBQUksSUFDaENELElBQUksQ0FBQyxDQUFDRSxPQUFTO2dCQUNkLElBQUlBLEtBQUtDLE1BQU0sS0FBSyxLQUFLO29CQUN2QmhCLHFEQUFLQSxDQUFDLHNDQUFzQzt3QkFDMUNpQixVQUFVakIscUVBQXlCO3dCQUNuQ29CLFdBQVc7d0JBQ1hDLGlCQUFpQixJQUFJO3dCQUNyQkMsY0FBYyxLQUFLO3dCQUNuQkMsY0FBYyxLQUFLO3dCQUNuQkMsV0FBVyxLQUFLO3dCQUNoQkMsbUJBQW1CO3dCQUNuQkMsZUFBZTtvQkFDakI7Z0JBQ0YsT0FBTztvQkFDTDFCLHFEQUFLQSxDQUNILGlFQUNBO3dCQUNFaUIsVUFBVWpCLHFFQUF5Qjt3QkFDbkNvQixXQUFXO3dCQUNYQyxpQkFBaUIsSUFBSTt3QkFDckJDLGNBQWMsS0FBSzt3QkFDbkJDLGNBQWMsS0FBSzt3QkFDbkJDLFdBQVcsS0FBSzt3QkFDaEJDLG1CQUFtQjt3QkFDbkJFLGdCQUFnQjt3QkFDaEJELGVBQWU7b0JBQ2pCO2dCQUVKLENBQUM7WUFDSDtRQUNKLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7UUFDQXpCLFNBQVM7SUFDWDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOztrQ0FDSCw4REFBQ3FDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBS0MsV0FBV3pDLHFFQUFXOztrQ0FDMUIsOERBQUMwQzt3QkFBSUQsV0FBV3pDLDRFQUFrQjtrQ0FDaEMsNEVBQUNHLDBEQUFVQTs0QkFDVHlDLFFBQVEsQ0FBQ0MsYUFBZTtnQ0FDdEJBLFdBQ0dDLFVBQVUsQ0FDVCwrRUFFREMsWUFBWSxDQUFDLElBQU07b0NBQ2xCYixRQUFRQyxHQUFHLENBQUM7Z0NBQ2QsR0FDQ2EsS0FBSzs0QkFDVjs7Ozs7Ozs7Ozs7a0NBR0osOERBQUNOO2tDQUNDLDRFQUFDeEMsZ0VBQVNBOzRCQUNSK0MsUUFBUTs0QkFDUlIsV0FBV3pDLDJFQUFpQjs0QkFDNUJtRCxJQUFHOzRCQUNIQyxPQUFNOzRCQUNOQyxPQUFNOzRCQUNOQyxhQUFZOzRCQUNaQyxPQUFPaEQ7NEJBQ1BpRCxVQUFVLENBQUMsRUFBRUMsT0FBTSxFQUFFLEdBQUtqRCxTQUFTaUQsUUFBUUY7c0NBQzVDOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQ2I7a0NBQ0MsNEVBQUN6Qyw2REFBTUE7NEJBQ0x3QyxXQUFXekMsdUVBQWE7NEJBQ3hCMkQsU0FBUTs0QkFDUlAsT0FBTTs0QkFDTlEsU0FBU25EO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBvcnRmb2xpby8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRlbnQsIEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tIFwidHlwZXdyaXRlci1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgcGFyc2VKc29uVGV4dCB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWl0RW1haWwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IDIwMDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovLzc0bXNoZmx3dGcuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRvYXN0KFwiWW91IHdpbGwgcmVjaWV2ZSBhbiBlbWFpbCBzaG9ydGx5LlwiLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxuICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDcwMDAsXG4gICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IFwibXktdG9hc3QtcHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgYm9keUNsYXNzTmFtZTogXCJteS10b2FzdC1ib2R5XCIsXG4gICAgICAgICAgICB9IGFzIGFueSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvYXN0KFxuICAgICAgICAgICAgICBcIlNvcnJ5IHRoZSBlbWFpbCBhZGRyZXNzIGVudGVyZWQgaXMgaW52YWxpZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNzAwMCxcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IFwibXktdG9hc3QtcHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgICB0b2FzdENsYXNzTmFtZTogXCJteS10b2FzdFwiLFxuICAgICAgICAgICAgICAgIGJvZHlDbGFzc05hbWU6IFwibXktdG9hc3QtYm9keVwiLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHNldEVtYWlsKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXJwaXQgU2luZ2ggUmVzdW1lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZm9vdGVyLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8VHlwZXdyaXRlclxuICAgICAgICAgICAgb25Jbml0PXsodHlwZXdyaXRlcikgPT4ge1xuICAgICAgICAgICAgICB0eXBld3JpdGVyXG4gICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoXG4gICAgICAgICAgICAgICAgICBcIkhpISBUbyByZWNlaXZlIG15IHJlc3VtZSBzdGFydCBieSB0eXBpbmcgeW91ciBlbWFpbCBhZGRyZXNzIGJlbG93ICYgSGl0IEdvIVwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdHJpbmcgdHlwZWQgb3V0IVwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRmaWVsZH1cbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFiY0B4eXouY29tXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0RW1haWwodGFyZ2V0Py52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRFbWFpbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaXQgR29cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlR5cGV3cml0ZXIiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiSG9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJzdWJtaXRFbWFpbCIsInN0YXR1c0NvZGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwicG9zaXRpb24iLCJQT1NJVElPTiIsIlRPUF9DRU5URVIiLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzc0NsYXNzTmFtZSIsImJvZHlDbGFzc05hbWUiLCJ0b2FzdENsYXNzTmFtZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiZGVzY3JpcHRpb24iLCJvbkluaXQiLCJ0eXBld3JpdGVyIiwidHlwZVN0cmluZyIsImNhbGxGdW5jdGlvbiIsInN0YXJ0IiwicmVxdWlyZWQiLCJpbnB1dGZpZWxkIiwiaWQiLCJjb2xvciIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

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