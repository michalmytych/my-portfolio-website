/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\n\nconst Home = \n{\n    hideView : function(args = {})     \n    {   \n        let defaultDelay = args.delay ?? 0\n        \n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"header\", delay: defaultDelay})\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"homeParag\", delay: 200 + defaultDelay})\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"myBtn\", delay: 400 + defaultDelay})\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"socialLinks\", delay: 600 + defaultDelay})\n    },\n\n    revealView : function(args = {}) \n    {\n        let defaultDelay = args.delay ?? 0\n\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"header\", delay: defaultDelay})\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"homeParag\", delay: 200 + defaultDelay})\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"myBtn\", delay: 500 + defaultDelay})    \n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"socialLinks\", delay: 900 + defaultDelay})     \n    }\n}\n\n//# sourceURL=webpack://js/./src/Home.js?");

/***/ }),

/***/ "./src/PageCover.js":
/*!**************************!*\
  !*** ./src/PageCover.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageCover\": () => (/* binding */ PageCover)\n/* harmony export */ });\nconst coverElement = document.getElementById(\"reveal_element_top\")\nconst revealingAnimationDuration = 2500\n\nconst PageCover = \n{    \n    revealingAnimationDuration : revealingAnimationDuration,\n    \n    hide : async function() \n    {\n        coverElement.style.display = 'block'\n        coverElement.animate([\n                { top: '-18rem', left: '-45rem', opacity: 1},\n                { top: '-40rem', left: '-65rem', opacity: 0.7},\n                { top: '-65rem', left: '-90rem', opacity: 0}\n            ], {\n                delay: revealingAnimationDuration * 0.8,\n                duration: revealingAnimationDuration * 0.2\n        })\n        await new Promise(r => setTimeout(r, revealingAnimationDuration))\n        coverElement.style.display = 'none'\n    }\n}\n\n//# sourceURL=webpack://js/./src/PageCover.js?");

/***/ }),

/***/ "./src/Portfolio.js":
/*!**************************!*\
  !*** ./src/Portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Portfolio\": () => (/* binding */ Portfolio)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n// Object representing interface of Portfolio view\n\n\n\nconst viewRootElement = document.getElementById('portfolio')\nconst closeViewBtn = document.getElementById(\"closePortfolioBtn\")\nconst skewedPortfolioBackground = document.getElementById(\"skewedPortfolioBackground\")\n\n\nconst Portfolio = \n{      \n    revealView : function ()\n        {\n            closeViewBtn.style.display = 'block'\n            closeViewBtn.style.opacity = 1            \n\n            viewRootElement.animate([\n                    {  left: '60rem', opacity: 0 },            \n                    {  left: '-2rem', opacity: 1 }                    \n                ], {        \n                fill: 'forwards',\n                duration: 700\n            })\n            skewedPortfolioBackground.animate([\n                    {  right: '-10rem', opacity: 0 },            \n                    {  right: '18rem', opacity: 1 }                    \n                ], {        \n                fill: 'forwards',\n                duration: 900\n            })\n            \n        },\n        \n    hideView : function()\n    {\n        closeViewBtn.style.opacity = 0\n        viewRootElement.animate([\n                {  left: '-2rem', opacity: 1 },            \n                {  left: '60rem', opacity: 0 }                                    \n            ], {        \n            fill: 'forwards',\n            duration: 700\n        })\n        viewRootElement.animate([\n                {  right: '18rem',  opacity: 1 },            \n                {  right: '-10rem', opacity: 0 }                                    \n            ], {        \n            fill: 'forwards',\n            duration: 700\n        })\n    }\n}\n\n//# sourceURL=webpack://js/./src/Portfolio.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sleep\": () => (/* binding */ sleep),\n/* harmony export */   \"hideElementWithDelay\": () => (/* binding */ hideElementWithDelay),\n/* harmony export */   \"revealElementWithDelay\": () => (/* binding */ revealElementWithDelay)\n/* harmony export */ });\nasync function sleep(duration)\n{\n    await new Promise(r => setTimeout(r, duration));\n}\n\nfunction hideElementWithDelay(args)\n{\n    if (!args.id) { \n        console.error('at hideElementWithDelay() : id of element to hide not provided')\n        return\n    }\n    document.getElementById(args.id).animate([\n            {  marginLeft:      0, opacity: 1   },\n            {  marginLeft: '1rem', opacity: 0.6 },\n            {  marginLeft: '3rem', opacity: 0.4 },\n            {  marginLeft: '7rem', opacity: 0.1 },\n            {  marginLeft: '8rem', opacity: 0   }\n        ], {        \n        fill: 'forwards',\n        delay: args.delay ?? 100,\n        duration: args.duration ?? 600\n    })\n}\n\nfunction revealElementWithDelay(args)\n{\n    if (!args.id) { \n        console.error('at revealElementWithDelay() : id of element to reveal not provided')\n        return\n    }\n    document.getElementById(args.id).animate([\n            {  marginLeft: '8rem', opacity: 0   },\n            {  marginLeft: '7rem', opacity: 0.1 },\n            {  marginLeft: '3rem', opacity: 0.4 },\n            {  marginLeft: '1rem', opacity: 0.6 },\n            {  marginLeft:      0, opacity: 1   }\n        ], {        \n        fill: 'forwards',\n        delay: args.delay,\n        duration: args.duration ?? 600\n    })\n}\n\n\n/*\nexport function revealElementWithDelay(id, _delay = 1500)\n{\n    document.getElementById(id).animate([\n            {  marginLeft: '8rem', opacity: 0   },\n            {  marginLeft: '7rem', opacity: 0.1 },\n            {  marginLeft: '3rem', opacity: 0.4 },\n            {  marginLeft: '1rem', opacity: 0.6 },\n            {  marginLeft:      0, opacity: 1   }\n        ], {        \n        fill: 'forwards',\n        delay: _delay,\n        duration: 600\n    })\n}\n*/\n\n//# sourceURL=webpack://js/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _Portfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.js */ \"./src/Portfolio.js\");\n/* harmony import */ var _PageCover_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageCover.js */ \"./src/PageCover.js\");\n/* harmony import */ var _smooth_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smooth-scroll.js */ \"./src/smooth-scroll.js\");\n\n\n\n\n\nconst showWorksBtn = document.getElementById(\"myBtn\")\nconst closePortfolioBtn = document.getElementById(\"closePortfolioBtn\")\n\nwindow.onload = () => {    \n    \n    _PageCover_js__WEBPACK_IMPORTED_MODULE_2__.PageCover.hide()\n\n    _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.revealView({ delay : _PageCover_js__WEBPACK_IMPORTED_MODULE_2__.PageCover.revealingAnimationDuration - 200 })   \n\n    showWorksBtn.addEventListener('click', event = () => {\n        _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.hideView()\n        _Portfolio_js__WEBPACK_IMPORTED_MODULE_1__.Portfolio.revealView()\n    })\n\n    closePortfolioBtn.addEventListener('click', event = () => {\n        _Portfolio_js__WEBPACK_IMPORTED_MODULE_1__.Portfolio.hideView()\n        _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.revealView()                \n    })\n\n    ;(0,_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_3__.registerSmothScrollEventListeners)()\n}\n\n\n\n//# sourceURL=webpack://js/./src/index.js?");

/***/ }),

/***/ "./src/smooth-scroll.js":
/*!******************************!*\
  !*** ./src/smooth-scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerSmothScrollEventListeners\": () => (/* binding */ registerSmothScrollEventListeners)\n/* harmony export */ });\nconst projectsList = document.getElementById('projectsList')\nconst dots = document.querySelectorAll(\"[id^=nav_dot_]\")\nconst dotWrappers = document.querySelectorAll(\"[id^=_nav_dot_wrapper]\")\n \nfunction dotClickHandler(e) \n{\n  e.preventDefault(); \n  document.querySelectorAll(\".nav-dot\").forEach(_dot => {\n    _dot.style.backgroundColor = \"rgba(255, 255, 255, 0.3)\";\n  })\n  e.srcElement.style.backgroundColor = \"white\"\n  \n  let projectNumber = parseInt(e.srcElement.dataset.project)\n  projectsList.scrollTo({top: projectNumber * 840, behavior: \"smooth\"});\n}\n\nfunction dotWrapperMouseOverHandler(e) \n{\n  let wrapperIndex = parseInt(e.srcElement.dataset.wrapper)\n  const mouseoverEvent = new Event('mouseover');\n  document.getElementById(`nav_dot_${wrapperIndex}`).dispatchEvent(mouseoverEvent);\n}\n\nasync function registerSmothScrollEventListeners()\n{\n    document.getElementById('nav_dot_1').style.backgroundColor = \"white\"\n    for (const dotWrapper of dotWrappers) {\n      dotWrapper.addEventListener(\"mouseover\", dotWrapperMouseOverHandler);\n    }\n    for (const dot of dots) {\n        dot.addEventListener(\"click\", dotClickHandler);        \n    }\n    projectsList.addEventListener('scroll', event => {\n      document.querySelectorAll(\".nav-dot\").forEach(_dot => {\n        _dot.style.backgroundColor = \"rgba(255, 255, 255, 0.3)\";\n      })\n      let projectNumber = projectsList.scrollTop / 840\n      projectNumber = Math.round(projectNumber + 0.8)\n      document.getElementById(`nav_dot_${projectNumber}`).style.backgroundColor = 'white'\n    })\n}\n\n\n//# sourceURL=webpack://js/./src/smooth-scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;