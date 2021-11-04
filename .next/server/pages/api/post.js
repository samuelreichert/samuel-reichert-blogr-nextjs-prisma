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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2xpYi9wcmlzbWEudHM/ZDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n// pages/api/post/index.ts\n\n // POST /api/post\n// Required fields in body: title\n// Optional fields in body: content\n\nasync function handle(req, res) {\n  var _session$user;\n\n  const {\n    title,\n    content\n  } = req.body;\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.post.create({\n    data: {\n      title: title,\n      content: content,\n      author: {\n        connect: {\n          email: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email\n        }\n      }\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtDQUdBO0FBQ0E7QUFDQTs7QUFDZSxlQUFlRSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFBQTs7QUFDN0MsUUFBTTtBQUFFQyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBcUJILEdBQUcsQ0FBQ0ksSUFBL0I7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTVIsNERBQVUsQ0FBQztBQUFFRyxJQUFBQTtBQUFGLEdBQUQsQ0FBaEM7QUFDQSxRQUFNTSxNQUFNLEdBQUcsTUFBTVIsNERBQUEsQ0FBbUI7QUFDdENXLElBQUFBLElBQUksRUFBRTtBQUNKUCxNQUFBQSxLQUFLLEVBQUVBLEtBREg7QUFFSkMsTUFBQUEsT0FBTyxFQUFFQSxPQUZMO0FBR0pPLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBRUMsVUFBQUEsS0FBSyxFQUFFUCxPQUFGLGFBQUVBLE9BQUYsd0NBQUVBLE9BQU8sQ0FBRVEsSUFBWCxrREFBRSxjQUFlRDtBQUF4QjtBQUFYO0FBSEo7QUFEZ0MsR0FBbkIsQ0FBckI7QUFPQVgsRUFBQUEsR0FBRyxDQUFDYSxJQUFKLENBQVNSLE1BQVQ7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cz9iMzgyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9wb3N0L2luZGV4LnRzXG5cbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cbi8vIFBPU1QgL2FwaS9wb3N0XG4vLyBSZXF1aXJlZCBmaWVsZHMgaW4gYm9keTogdGl0bGVcbi8vIE9wdGlvbmFsIGZpZWxkcyBpbiBib2R5OiBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5wb3N0LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGF1dGhvcjogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uPy51c2VyPy5lbWFpbCB9IH0sXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5qc29uKHJlc3VsdCk7XG59XG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInByaXNtYSIsImhhbmRsZSIsInJlcSIsInJlcyIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJzZXNzaW9uIiwicmVzdWx0IiwicG9zdCIsImNyZWF0ZSIsImRhdGEiLCJhdXRob3IiLCJjb25uZWN0IiwiZW1haWwiLCJ1c2VyIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/post/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();