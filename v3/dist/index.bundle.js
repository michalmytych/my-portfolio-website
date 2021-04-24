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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\nconst Home = \r\n{\r\n    hideView : function(args = {})     \r\n    {   \r\n        let defaultDelay = args.delay ?? 0\r\n        \r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"header\", delay: defaultDelay})\r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"homeParag\", delay: 200 + defaultDelay})\r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"myBtn\", delay: 400 + defaultDelay})\r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.hideElementWithDelay)({id: \"socialLinks\", delay: 600 + defaultDelay})\r\n    },\r\n\r\n    revealView : function(args = {}) \r\n    {\r\n        let defaultDelay = args.delay ?? 0\r\n\r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"header\", delay: defaultDelay})\r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"homeParag\", delay: 200 + defaultDelay})\r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"myBtn\", delay: 500 + defaultDelay})    \r\n        ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.revealElementWithDelay)({id: \"socialLinks\", delay: 900 + defaultDelay})     \r\n    }\r\n}\n\n//# sourceURL=webpack://js/./src/Home.js?");

/***/ }),

/***/ "./src/LazyLoader.js":
/*!***************************!*\
  !*** ./src/LazyLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LazyLoader\": () => (/* binding */ LazyLoader)\n/* harmony export */ });\nconst LazyLoader =\r\n{\r\n    /**\r\n     * Setup lazy loading for all videos\r\n     */\r\n    addVideoLazyLoader : function() {\r\n        document.addEventListener(\"DOMContentLoaded\", \r\n            function() {\r\n                var lazyVideos = [].slice.call(document.querySelectorAll(\"video.lazy\"))\r\n        \r\n                if (\"IntersectionObserver\" in window) {\r\n                    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {\r\n                        entries.forEach(function(video) {\r\n                        if (video.isIntersecting) {\r\n                            for (var source in video.target.children) {\r\n                                var videoSource = video.target.children[source]\r\n                                    if (typeof videoSource.tagName === \"string\" && videoSource.tagName === \"SOURCE\") {\r\n                                        videoSource.src = videoSource.dataset.src\r\n                                    }\r\n                            }                \r\n                            video.target.load()\r\n                            video.target.classList.remove(\"lazy\")\r\n                            lazyVideoObserver.unobserve(video.target)\r\n                        }\r\n                    })\r\n                })\r\n        \r\n                lazyVideos.forEach(function(lazyVideo) {\r\n                    lazyVideoObserver.observe(lazyVideo)\r\n                })\r\n            }\r\n        })  \r\n    }    \r\n}\n\n//# sourceURL=webpack://js/./src/LazyLoader.js?");

/***/ }),

/***/ "./src/PageCover.js":
/*!**************************!*\
  !*** ./src/PageCover.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageCover\": () => (/* binding */ PageCover)\n/* harmony export */ });\nconst coverElement = document.getElementById(\"reveal_element_top\")\r\nconst revealingAnimationDuration = 2500\r\n\r\nconst PageCover = \r\n{    \r\n    revealingAnimationDuration : revealingAnimationDuration,\r\n    \r\n    hide : async function() \r\n    {\r\n        coverElement.style.display = 'block'\r\n        coverElement.animate([\r\n                { top: '-18rem', left: '-45rem', opacity: 1},\r\n                { top: '-40rem', left: '-65rem', opacity: 0.7},\r\n                { top: '-65rem', left: '-90rem', opacity: 0}\r\n            ], {\r\n                delay: revealingAnimationDuration * 0.8,\r\n                duration: revealingAnimationDuration * 0.2\r\n        })\r\n        await new Promise(r => setTimeout(r, revealingAnimationDuration))\r\n        coverElement.style.display = 'none'\r\n    }\r\n}\n\n//# sourceURL=webpack://js/./src/PageCover.js?");

/***/ }),

/***/ "./src/Portfolio.js":
/*!**************************!*\
  !*** ./src/Portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Portfolio\": () => (/* binding */ Portfolio)\n/* harmony export */ });\n/* harmony import */ var _SmoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmoothScroll.js */ \"./src/SmoothScroll.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\n\r\n// Object representing interface of Portfolio view\r\n\r\nconst viewRootElement = document.getElementById('portfolio')\r\nconst closeViewBtn = document.getElementById(\"closePortfolioBtn\")\r\nconst skewedPortfolioBackground = document.getElementById(\"skewedPortfolioBackground\")\r\n\r\n\r\nconst projectsUrls = [\r\n    \"https://static.pexels.com/lib/videos/free-videos.mp4\",\r\n    \"https://vod-progressive.akamaized.net/exp=1619292896~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4552%2F19%2F497764426%2F2257380178.mp4~hmac=efac5d23bd0198a0ce5ad350c85302291aba23e1413c2d908294776f486e5627/vimeo-prod-skyfire-std-us/01/4552/19/497764426/2257380178.mp4?filename=pexels-roman-odintsov-6421804.mp4\",\r\n    \"https://vod-progressive.akamaized.net/exp=1619292872~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2782%2F14%2F363914815%2F1498002325.mp4~hmac=f4f54bc26060da66e15e867b26f79d8ad3a69545b4e630523fe044649395959c/vimeo-prod-skyfire-std-us/01/2782/14/363914815/1498002325.mp4?filename=video.mp4\",\r\n    \"https://vod-progressive.akamaized.net/exp=1619282041~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2466%2F13%2F337331520%2F1338193766.mp4~hmac=2954a3679af65051f875f456c035eaf8f99238473068a7a0e15ddbca5bd052e7/vimeo-prod-skyfire-std-us/01/2466/13/337331520/1338193766.mp4?filename=Pexels+Videos+2342562.mp4\",    \r\n]\r\n\r\nfunction setupVideoPlayer(projectNumber = 0)\r\n{\r\n    // Construct html of video player and place it in video wrapper element\r\n    const videPlayerWrapper = document.getElementById('projectVisualPreview')\r\n    const videoHtml = `<video data-project=\"${projectNumber}\" autoplay muted loop playsinline id=\"videoPreview\" \r\n                        src=\"${projectsUrls[projectNumber]}\" type=\"video/mp4\"></video>`\r\n    videPlayerWrapper.innerHTML = videoHtml\r\n}\r\n\r\nconst Portfolio = \r\n{      \r\n    revealView : function ()\r\n        {\r\n            (0,_SmoothScroll_js__WEBPACK_IMPORTED_MODULE_0__.registerSmothScrollEventListeners)()\r\n\r\n            closeViewBtn.style.display = 'block'\r\n            closeViewBtn.style.opacity = 1            \r\n\r\n            viewRootElement.animate([\r\n                    {  left: '60rem', opacity: 0 },            \r\n                    {  left: '-2rem', opacity: 1 }                    \r\n                ], {        \r\n                fill: 'forwards',\r\n                duration: 700\r\n            })\r\n            skewedPortfolioBackground.animate([\r\n                    {  right: '-10rem', opacity: 0 },            \r\n                    {  right: '18rem', opacity: 1 }                    \r\n                ], {        \r\n                fill: 'forwards',\r\n                duration: 900\r\n            })\r\n\r\n            // setup video element with first link\r\n            setupVideoPlayer()\r\n        },\r\n        \r\n    hideView : function()\r\n    {\r\n        closeViewBtn.style.opacity = 0\r\n        viewRootElement.animate([\r\n                {  left: '-2rem', opacity: 1 },            \r\n                {  left: '60rem', opacity: 0 }                                    \r\n            ], {        \r\n            fill: 'forwards',\r\n            duration: 700\r\n        })\r\n        viewRootElement.animate([\r\n                {  right: '18rem',  opacity: 1 },            \r\n                {  right: '-10rem', opacity: 0 }                                    \r\n            ], {        \r\n            fill: 'forwards',\r\n            duration: 700\r\n        })\r\n\r\n        _SmoothScroll_js__WEBPACK_IMPORTED_MODULE_0__.SmoothScroll.scrollToTop()\r\n    },\r\n\r\n    changeVideoPreviewSource : function (projectNumber = 0) \r\n    {     \r\n        let video = document.getElementById('videoPreview')\r\n        \r\n        /*\r\n        console.log('odpalam')     \r\n        \r\n        video.style.opacity = 0\r\n        video.animate(\r\n            [ { opacity: 1 }, { opacity: 0 } ], \r\n            { duration: 1500, fill: 'forwards'}\r\n        )        \r\n        sleep(2000)\r\n        */\r\n        video.src = projectsUrls[parseInt(projectNumber)]    \r\n        /*\r\n        video.animate(\r\n            [ { opacity: 0 }, { opacity: 1 } ], \r\n            { duration: 1500}\r\n        )\r\n        */\r\n        video.play()\r\n        video.dataset.project = projectNumber        \r\n     }\r\n}\n\n//# sourceURL=webpack://js/./src/Portfolio.js?");

/***/ }),

/***/ "./src/SmoothScroll.js":
/*!*****************************!*\
  !*** ./src/SmoothScroll.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SmoothScroll\": () => (/* binding */ SmoothScroll),\n/* harmony export */   \"registerSmothScrollEventListeners\": () => (/* binding */ registerSmothScrollEventListeners)\n/* harmony export */ });\n/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio */ \"./src/Portfolio.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\n\r\nconst projectsList = document.getElementById('projectsList')\r\nconst navDots = document.querySelectorAll(\"[id^=nav_dot_]\")\r\n\r\n\r\nconst SmoothScroll = \r\n{\r\n  dotClickHandler : function(e) \r\n  {\r\n    e.preventDefault()    \r\n    const projectElementHeight = projectsList.children[0].offsetHeight    \r\n\r\n    // Reset color of all dots and set color of one (which was triggered) as white\r\n    navDots.forEach(nd => { nd.style.backgroundColor = \"rgba(255, 255, 255, 0.3)\" })\r\n    e.srcElement.style.backgroundColor = \"white\"\r\n    \r\n    // Get right project and scroll on calculated height of projectsList    \r\n    let projectNumber = parseInt(e.srcElement.dataset.project)\r\n    projectsList.scrollTo({top: projectNumber * projectElementHeight, behavior: \"smooth\"})\r\n\r\n    // Fire change of videPreview src with projectNumber param \r\n    _Portfolio__WEBPACK_IMPORTED_MODULE_0__.Portfolio.changeVideoPreviewSource(projectNumber)\r\n  },\r\n\r\n  scrollToTop : function()\r\n  {\r\n    // Reset position of scrolled list (fired at Portfolio view unmounting)\r\n    projectsList.scrollTo({top: 0, behavior: \"smooth\"})\r\n  }\r\n}\r\n\r\nasync function registerSmothScrollEventListeners()\r\n{\r\n    const projectElementHeight = projectsList.children[0].offsetHeight\r\n    const firstDot = document.getElementById('nav_dot_1')\r\n    \r\n    // Set color of first dot as white (when Portfolio view mounts)\r\n    firstDot.style.backgroundColor = \"white\"\r\n\r\n    // Add click event handlers to navDots, also add scroll listeners to projectsList\r\n    for (const dot of navDots) {\r\n        dot.addEventListener(\"click\", SmoothScroll.dotClickHandler)\r\n    }\r\n        \r\n    projectsList.addEventListener('scroll', event => {      \r\n      let projectNumber = projectsList.scrollTop / projectElementHeight            \r\n      projectNumber = Math.round(projectNumber + 0.8)\r\n\r\n      // Set color of all navDots as grey\r\n      navDots.forEach(nd => {\r\n        nd.style.backgroundColor = \"rgba(255, 255, 255, 0.3)\"\r\n      })            \r\n\r\n      // When scrolling stops, change src attribute on \r\n      // videoPreview at Portfolio view\r\n      ;(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.onScrollStop)(\r\n        _Portfolio__WEBPACK_IMPORTED_MODULE_0__.Portfolio.changeVideoPreviewSource(projectNumber)\r\n      )      \r\n\r\n      // Set color of navDot corresponding to viewed project as white            \r\n      document.getElementById(`nav_dot_${projectNumber}`).style.backgroundColor = 'white'\r\n    })\r\n}\n\n//# sourceURL=webpack://js/./src/SmoothScroll.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sleep\": () => (/* binding */ sleep),\n/* harmony export */   \"hideElementWithDelay\": () => (/* binding */ hideElementWithDelay),\n/* harmony export */   \"revealElementWithDelay\": () => (/* binding */ revealElementWithDelay),\n/* harmony export */   \"roundedToFixed\": () => (/* binding */ roundedToFixed),\n/* harmony export */   \"onScrollStop\": () => (/* binding */ onScrollStop)\n/* harmony export */ });\nasync function sleep(duration)\r\n{\r\n    await new Promise(r => setTimeout(r, duration));\r\n}\r\n\r\nfunction hideElementWithDelay(args)\r\n{\r\n    if (!args.id) { \r\n        console.error('at hideElementWithDelay() : id of element to hide not provided')\r\n        return\r\n    }\r\n    document.getElementById(args.id).animate([\r\n            {  marginLeft:      0, opacity: 1   },\r\n            {  marginLeft: '1rem', opacity: 0.6 },\r\n            {  marginLeft: '3rem', opacity: 0.4 },\r\n            {  marginLeft: '7rem', opacity: 0.1 },\r\n            {  marginLeft: '8rem', opacity: 0   }\r\n        ], {        \r\n        fill: 'forwards',\r\n        delay: args.delay ?? 100,\r\n        duration: args.duration ?? 600\r\n    })\r\n}\r\n\r\nfunction revealElementWithDelay(args)\r\n{\r\n    if (!args.id) { \r\n        console.error('at revealElementWithDelay() : id of element to reveal not provided')\r\n        return\r\n    }\r\n    document.getElementById(args.id).animate([\r\n            {  marginLeft: '8rem', opacity: 0   },\r\n            {  marginLeft: '7rem', opacity: 0.1 },\r\n            {  marginLeft: '3rem', opacity: 0.4 },\r\n            {  marginLeft: '1rem', opacity: 0.6 },\r\n            {  marginLeft:      0, opacity: 1   }\r\n        ], {        \r\n        fill: 'forwards',\r\n        delay: args.delay,\r\n        duration: args.duration ?? 600\r\n    })\r\n}\r\n\r\n\r\nfunction roundedToFixed(_float, _digits = 1){\r\n    /**\r\n     *      \"If you use Math.round(5.01) you will get 5 instead of 5.0.\r\n     *      If you use toFixed you run into rounding issues.\r\n     *      If you want the best of both worlds combine the two\"\r\n     *                     SO user Jasper de Vries , Oct 2 '12 at 21:04 :D\r\n     */\r\n    var rounded = Math.pow(10, _digits);\r\n    return (Math.round(_float * rounded) / rounded).toFixed(_digits);\r\n}\r\n\r\n\r\n/** \r\n * @param function callback \r\n */\r\nfunction onScrollStop(callback) {\r\n    var isScrolling;\r\n\r\n    window.addEventListener('scroll', function ( event ) {\r\n        window.clearTimeout( isScrolling );\r\n        isScrolling = setTimeout(function() {\r\n            callback()\r\n        }, 66);\r\n    }, false);\r\n}\r\n\n\n//# sourceURL=webpack://js/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _Portfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.js */ \"./src/Portfolio.js\");\n/* harmony import */ var _PageCover_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageCover.js */ \"./src/PageCover.js\");\n/* harmony import */ var _LazyLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LazyLoader.js */ \"./src/LazyLoader.js\");\n\r\n\r\n\r\n\r\n\r\nconst showWorksBtn = document.getElementById(\"myBtn\")\r\nconst closePortfolioBtn = document.getElementById(\"closePortfolioBtn\")\r\n\r\nwindow.onload = () => {    \r\n    _LazyLoader_js__WEBPACK_IMPORTED_MODULE_3__.LazyLoader.addVideoLazyLoader()    \r\n    _PageCover_js__WEBPACK_IMPORTED_MODULE_2__.PageCover.hide()\r\n    _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.revealView({ delay : _PageCover_js__WEBPACK_IMPORTED_MODULE_2__.PageCover.revealingAnimationDuration - 200 })   \r\n\r\n    showWorksBtn.addEventListener('click', event => {\r\n        _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.hideView()\r\n        _Portfolio_js__WEBPACK_IMPORTED_MODULE_1__.Portfolio.revealView()\r\n    })\r\n\r\n    closePortfolioBtn.addEventListener('click', event => {        \r\n        _Portfolio_js__WEBPACK_IMPORTED_MODULE_1__.Portfolio.hideView()\r\n        _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.revealView()        \r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://js/./src/index.js?");

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