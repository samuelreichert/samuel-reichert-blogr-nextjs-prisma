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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2xpYi9wcmlzbWEudHM/ZDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/adapters */ \"next-auth/adapters\");\n/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_adapters__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n// pages/api/auth/[...nextauth].ts\n\n\n\n\n\nconst authHandler = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authHandler);\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  })],\n  adapter: next_auth_adapters__WEBPACK_IMPORTED_MODULE_2___default().Prisma.Adapter({\n    prisma: _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.default\n  }),\n  secret: process.env.SECRET\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSSxXQUEyQixHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjTixnREFBUSxDQUFDSyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsT0FBWCxDQUExRDs7QUFDQSxpRUFBZUgsV0FBZjtBQUVBLE1BQU1HLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVFAsaUVBQUEsQ0FBaUI7QUFDZlMsSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZYLEdBQWpCLENBRFMsQ0FERztBQU9kQyxFQUFBQSxPQUFPLEVBQUVkLHdFQUFBLENBQXdCO0FBQUVDLElBQUFBLE1BQU1BLGtEQUFBQTtBQUFSLEdBQXhCLENBUEs7QUFRZGdCLEVBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRO0FBUk4sQ0FBaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yOGMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHNcblxuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tICduZXh0JztcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJztcbmltcG9ydCBBZGFwdGVycyBmcm9tICduZXh0LWF1dGgvYWRhcHRlcnMnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcblxuY29uc3QgYXV0aEhhbmRsZXI6IE5leHRBcGlIYW5kbGVyID0gKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XG5leHBvcnQgZGVmYXVsdCBhdXRoSGFuZGxlcjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICBhZGFwdGVyOiBBZGFwdGVycy5QcmlzbWEuQWRhcHRlcih7IHByaXNtYSB9KSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG59O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiQWRhcHRlcnMiLCJwcmlzbWEiLCJhdXRoSGFuZGxlciIsInJlcSIsInJlcyIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJHaXRIdWIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYWRhcHRlciIsIlByaXNtYSIsIkFkYXB0ZXIiLCJzZWNyZXQiLCJTRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/adapters":
/*!*************************************!*\
  !*** external "next-auth/adapters" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-auth/adapters");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();