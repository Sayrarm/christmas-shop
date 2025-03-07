/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Modal.js":
/*!******************!*\
  !*** ./Modal.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   renderProducts: () => (/* binding */ renderProducts)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _images_mini_snowflake_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/mini-snowflake.svg */ "./images/mini-snowflake.svg");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 // Импортируем CSS-файл


function preventDefault(e) {
  e.preventDefault();
}
function generateStars(value) {
  var numStars = parseInt(value.replace('+', '')) / 100;
  var stars = '';
  for (var i = 0; i < 5; i++) {
    if (i < numStars) {
      stars += "<img class=\"red-star\" src=\"".concat(_images_mini_snowflake_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"red-snowflake\">");
    } else {
      stars += "<img class=\"gray-star\" src=\"".concat(_images_mini_snowflake_svg__WEBPACK_IMPORTED_MODULE_1__, "\" alt=\"gray-snowflake\">");
    }
  }
  return stars;
}
function openModal(modalDetails, modalOverlay, product) {
  modalDetails.innerHTML = "\n        <div class=\"modal-product-info\">\n            <img class=\"gift\" src=\"".concat(product.img, "\" width=\"310\" height=\"230\" alt=\"").concat(product.name, "\">\n            <div class=\"gift-card-text-modal\">\n                <div class=\"gift-category\"><span class=\"category-text ").concat(product.category, "\">").concat(product.category.replace(/-/g, ' '), "</span></div>\n                <div class=\"gift-card-item\"><b></b> ").concat(product.name, "</div>\n                <div class=\"modal-product-description\"><b></b> ").concat(product.description, "</div>\n                <div class=\"modal-product-superpowers\">\n                <b class=\"modal-product-superpowers-description\">Adds superpowers to:</b>\n                <ul class=\"modal-product-superpowers-items\">\n                ").concat(Object.entries(product.superpowers).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return "<li class=\"superpowers-item\"><span class=\"superpowers-item-key\">".concat(key, "</span> <span class=\"superpowers-item-value\">").concat(value, " ").concat(generateStars(value), "</span></li>");
  }).join(''), "\n                </ul>\n                </div>\n             </div>\n        </div>\n        ");
  modalOverlay.style.display = 'flex';
  document.body.addEventListener('wheel', preventDefault, {
    passive: false
  });
  document.body.addEventListener('touchmove', preventDefault, {
    passive: false
  });
}
function closeModal(modalOverlay) {
  modalOverlay.style.display = 'none';
  document.body.removeEventListener('wheel', preventDefault);
  document.body.removeEventListener('touchmove', preventDefault);
}
function renderProducts(productsToRender, catalog, openModal, modalDetails, modalOverlay, products) {
  catalog.innerHTML = '';
  productsToRender.forEach(function (product) {
    var card = document.createElement('button');
    card.classList.add('button-card');
    card.dataset.category = product.category;
    card.dataset.productIndex = products.indexOf(product);
    var categoryText = product.category.replace(/-/g, ' ');
    var categorySpan = "<span class=\"category-text ".concat(product.category, "\">").concat(categoryText, "</span>");
    card.innerHTML = "\n                <img class=\"gift\" src=\"".concat(product.img, "\" width=\"310\" height=\"230\" alt=\"gift-picture\">\n                <div class=\"gift-card-text\">\n                    <div class=\"gift-category\">").concat(categorySpan, "</div>\n                    <div class=\"gift-card-item\">").concat(product.name, "</div>\n                </div>\n    ");
    catalog.appendChild(card);
    card.addEventListener('click', function () {
      var productIndex = parseInt(this.dataset.productIndex);
      openModal(modalDetails, modalOverlay, products[productIndex]);
    });
  });
}

/***/ }),

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   products: () => (/* binding */ products)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/gift-for-work.png */ "./images/gift-for-work.png");
 // Импортируем CSS-файл




//cards

var products = [{
  name: "Bug Magnet",
  description: "Able to find bugs in code like they were placed there on purpose.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    "live": "+500",
    "create": "+500",
    "love": "+200",
    "dream": "+400"
  }
}, {
  id: 2,
  name: "Console.log Guru",
  description: "Uses console.log like a crystal ball to find any issue.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+200",
    dream: "+400"
  }
}, {
  id: 3,
  name: "Shortcut Cheater",
  description: "Knows every keyboard shortcut like they were born with them.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+400",
    dream: "+200"
  }
}, {
  id: 4,
  name: "Merge Master",
  description: "Merges branches in Git without conflicts, like a wizard during an exam.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+200",
    create: "+500",
    love: "+200",
    dream: "+300"
  }
}, {
  id: 5,
  name: "Async Tamer",
  description: "Handles asynchronous code and promises like well-trained pets.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+100",
    create: "+400",
    love: "+200",
    dream: "+300"
  }
}, {
  id: 6,
  name: "CSS Tamer",
  description: "Can make Flexbox and Grid work together like they were always best friends.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+200",
    create: "+500",
    love: "+200",
    dream: "+300"
  }
}, {
  id: 7,
  name: "Time Hacker",
  description: "Writes code at the last moment but always meets the deadline.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+500",
    dream: "+200"
  }
}, {
  id: 8,
  name: "Layout Master",
  description: "Creates perfect layouts on the first try, like they can read the designer's mind.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+300",
    love: "+200",
    dream: "+200"
  }
}, {
  id: 9,
  name: "Documentation Whisperer",
  description: "Understands cryptic documentation as if they wrote it themselves.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+200",
    dream: "+100"
  }
}, {
  id: 10,
  name: "Feedback Master",
  description: "Accepts client revisions with the Zen calm of Buddha.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+500",
    love: "+300",
    dream: "+400"
  }
}, {
  id: 11,
  name: "Code Minimalist",
  description: "Writes code so concise that one line does more than a whole file.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+500",
    dream: "+200"
  }
}, {
  id: 12,
  name: "Pixel-Perfect Magician",
  description: "Aligns elements to the last pixel, even when the design looks abstract.",
  category: "For-Work",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+400",
    dream: "+400"
  }
}, {
  id: 13,
  name: "Posture Levitation",
  description: "Can sit for hours, but maintains perfect posture like a ballerina.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+400",
    create: "+500",
    love: "+500",
    dream: "+400"
  }
}, {
  id: 14,
  name: "Step Master",
  description: "Gets 10,000 steps a day even while sitting at the computer.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+400",
    create: "+300",
    love: "+500",
    dream: "+400"
  }
}, {
  id: 15,
  name: "Snack Resister",
  description: "Ignoring desktop snacks like a strict dietician.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+400",
    create: "+100",
    love: "+200",
    dream: "+400"
  }
}, {
  id: 16,
  name: "Hydration Bot",
  description: "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+300",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 17,
  name: "Sleep Overlord",
  description: "Sleeps 6 hours but feels like they had 10.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+400",
    create: "+500",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 18,
  name: "Break Guru",
  description: "Takes a stretch break every hour without forgetting, no matter how focused.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+300",
    love: "+300",
    dream: "+400"
  }
}, {
  id: 19,
  name: "Eye Protector",
  description: "Can work all day at the monitor without feeling like their eyes are on fire.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+100",
    create: "+300",
    love: "+500",
    dream: "+400"
  }
}, {
  id: 20,
  name: "Stress Dodger",
  description: "Masters meditation right at the keyboard.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+100",
    create: "+400",
    love: "+200",
    dream: "+400"
  }
}, {
  id: 21,
  name: "Yoga Coder",
  description: "Easily switches from coding to yoga and back.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    "live": "+400",
    "create": "+400",
    "love": "+400",
    "dream": "+400"
  }
}, {
  id: 22,
  name: "Healthy Snacker",
  description: "Always picks fruit, even when chocolate is within arm’s reach.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+400",
    create: "+300",
    love: "+200",
    dream: "+400"
  }
}, {
  id: 23,
  name: "Chair Exerciser",
  description: "Manages to work out without leaving the chair.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+500",
    love: "+500",
    dream: "+400"
  }
}, {
  id: 24,
  name: "Caffeine Filter",
  description: "Drinks coffee at night and still falls asleep with no problem.",
  category: "For-Health",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+400",
    create: "+300",
    love: "+500",
    dream: "+200"
  }
}, {
  id: 25,
  name: "Joy Charger",
  description: "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+200",
    create: "+200",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 26,
  name: "Error Laugher",
  description: "Laughs at code errors like they’re jokes instead of getting angry.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 27,
  name: "Bug Acceptance Guru",
  description: "Accepts bugs as part of the journey to perfection — it’s just another task.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+500",
    dream: "+400"
  }
}, {
  id: 28,
  name: "Spontaneous Coding Philosopher",
  description: "Philosophically accepts any client suggestion after a long refactor.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+500",
    dream: "+400"
  }
}, {
  id: 29,
  name: "Deadline Sage",
  description: "Remains zen even when the deadline is close and the project manager is stressed.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+200",
    create: "+200",
    love: "+300",
    dream: "+500"
  }
}, {
  id: 30,
  name: "Inspiration Maestro",
  description: "Finds inspiration on an empty screen as if masterpieces are already there.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+400",
    dream: "+100"
  }
}, {
  id: 31,
  name: "Peace Keeper",
  description: "Maintains inner calm even in moments of intense crisis.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+200",
    create: "+200",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 32,
  name: "Empathy Guru",
  description: "Feels the team’s mood and can lift everyone’s spirits.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+500",
    create: "+200",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 33,
  name: "Laughter Generator",
  description: "Can lighten any tense situation with a joke that even bugs laugh at.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+200",
    dream: "+500"
  }
}, {
  id: 34,
  name: "Pause Master",
  description: "Knows when to just step back from the keyboard and breathe.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+100",
    dream: "+100"
  }
}, {
  id: 35,
  name: "Coder Healer",
  description: "Can support a colleague in their darkest hour, even if it’s a 500 error.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+500",
    dream: "+500"
  }
}, {
  id: 36,
  name: "Music Code Curator",
  description: "Creates work playlists so good, even deadlines follow the rhythm.",
  category: "For-Harmony",
  img: _images_gift_for_work_png__WEBPACK_IMPORTED_MODULE_1__,
  superpowers: {
    live: "+300",
    create: "+200",
    love: "+300",
    dream: "+200"
  }
}];

/***/ }),

/***/ "./images/gift-for-work.png":
/*!**********************************!*\
  !*** ./images/gift-for-work.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gift-for-work.png";

/***/ }),

/***/ "./images/mini-snowflake.svg":
/*!***********************************!*\
  !*** ./images/mini-snowflake.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mini-snowflake.svg";

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ "./cards.js");
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.js */ "./Modal.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 // Импортируем CSS-файл

//Burger-menu

document.addEventListener('DOMContentLoaded', function () {
  var burgerButton = document.getElementById('burger-menu-button');
  var menuOverlay = document.getElementById('burger-menu');
  var menuOpen = false; // Отслеживаем состояние меню

  burgerButton.addEventListener('click', function () {
    menuOpen = !menuOpen; // Переключаем состояние

    if (menuOpen) {
      menuOverlay.classList.remove('burger-menu');
      //Меню открыто
    } else {
      menuOverlay.classList.add('burger-menu');
      // Меню закрыто
    }
  });
});

//back to top button

var backToTopBtn = document.getElementById('back-to-top-button');
window.addEventListener('scroll', function () {
  // Проверка прокрутки
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  // Убираем кнопку в самом верху
  if (document.documentElement.scrollTop === 0) backToTopBtn.style.display = 'none';
});
backToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//Slider

document.addEventListener('DOMContentLoaded', function () {
  var sliderWrapper = document.querySelector('.slider-row');
  var slides = document.querySelectorAll('.row-pic, .row-text');
  var prevButton = document.querySelector('.slider-button-1');
  var nextButton = document.querySelector('.slider-button-2');
  var currentIndex = 0; // Индекс текущего активного слайда (первого видимого)
  var slidesToScroll = 1; // Количество слайдов для прокрутки
  var slideWidth = 0; // Ширина одного слайда
  var sliderOffset = 0; // Текущее смещение слайдера

  // Функция для сдвига слайдера
  function moveSlider() {
    var shouldReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    slideWidth = slides[4].offsetWidth;
    if (shouldReset) {
      sliderOffset = 0; // Сбрасываем смещение при сбросе
    } else {
      sliderOffset = currentIndex * slideWidth;
    }
    sliderWrapper.style.transform = "translateX(-".concat(sliderOffset, "px)");
    updateButtons();
  }

  // Функция для обновления состояния кнопок
  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex + slidesToScroll >= slides.length;
  }

  // Обработчик для кнопки "Вперед"
  nextButton.addEventListener('click', function () {
    if (currentIndex + slidesToScroll < slides.length) {
      currentIndex += slidesToScroll;
      moveSlider();
    }
  });

  // Обработчик для кнопки "Назад"
  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex = Math.max(0, currentIndex - slidesToScroll); // Чтобы не уходить в отрицательный индекс
      moveSlider();
    }
  });

  // Функция для сброса слайдера в начальное положение
  function resetSlider() {
    currentIndex = 0;
    moveSlider(true);
  }

  // Обработка изменения размера окна для адаптивности
  function updateSlideWidth() {
    resetSlider();
  }
  window.addEventListener('resize', updateSlideWidth);

  // Начальная установка положения
  moveSlider();
});

//timer

function updateTimer() {
  var newYearDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);
  var now = new Date();
  var timeLeft = newYearDate - now;
  if (timeLeft <= 0) {
    document.getElementById('days').textContent = 'С';
    document.getElementById('hours').textContent = 'Н';
    document.getElementById('minutes').textContent = 'О';
    document.getElementById('seconds').textContent = 'М';
    return;
  }
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateTimer();
setInterval(updateTimer, 1000);

//random gifts

// Функция для перемешивания массива
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
  return array;
}

// Импортируем данные о продуктах



// Код для отображения случайных карточек
document.addEventListener('DOMContentLoaded', function () {
  var catalog = document.querySelector('.best-gifts-cards');
  var modalOverlay = document.getElementById('modal-overlay');
  var modalDetails = document.getElementById('modal-details');
  var modalCloseButton = document.getElementById('modal-close');
  var shuffledProducts = shuffleArray(_toConsumableArray(_cards_js__WEBPACK_IMPORTED_MODULE_1__.products));
  var randomProducts = shuffledProducts.slice(0, 4);
  (0,_Modal_js__WEBPACK_IMPORTED_MODULE_2__.renderProducts)(randomProducts, catalog, _Modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal, modalDetails, modalOverlay, _cards_js__WEBPACK_IMPORTED_MODULE_1__.products);
  modalCloseButton.addEventListener('click', function () {
    return (0,_Modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(modalOverlay);
  });
  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      (0,_Modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(modalOverlay);
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWpELFlBQVksR0FBR21CLFFBQVEsQ0FBQzhCLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDN0QsSUFBTXFELGdCQUFnQixHQUFHbkYsUUFBUSxDQUFDOEIsY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUUvRCxJQUFNc0QsZ0JBQWdCLEdBQUdMLFlBQVksQ0FBQU0sa0JBQUEsQ0FBSzVFLCtDQUFRLENBQUMsQ0FBQztFQUNwRCxJQUFNNkUsY0FBYyxHQUFHRixnQkFBZ0IsQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDbkRqRix5REFBYyxDQUFDZ0YsY0FBYyxFQUFDOUUsT0FBTyxFQUFFNUIsZ0RBQVMsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUUyQiwrQ0FBUSxDQUFDO0VBRXZGMEUsZ0JBQWdCLENBQUNqRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFBQSxPQUFLRSxxREFBVSxDQUFDdEIsWUFBWSxDQUFDO0VBQUEsRUFBQztFQUN6RUEsWUFBWSxDQUFDb0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNzRixLQUFLLEVBQUU7SUFDbkQsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLEtBQUszRyxZQUFZLEVBQUU7TUFDL0JzQixxREFBVSxDQUFDdEIsWUFBWSxDQUFDO0lBQzVCO0VBQ0osQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC8uL01vZGFsLmpzIiwid2VicGFjazovL2NocmlzdG1hcy1zaG9wLy4vY2FyZHMuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXNob3AvLi9zdHlsZS5jc3M/NjQyOSIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXNob3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NocmlzdG1hcy1zaG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXNob3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXNob3AvLi9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7IC8vINCY0LzQv9C+0YDRgtC40YDRg9C10LwgQ1NTLdGE0LDQudC7XHJcbmltcG9ydCByZWRTdGFydCBmcm9tICcuL2ltYWdlcy9taW5pLXNub3dmbGFrZS5zdmcnO1xyXG5pbXBvcnQgZ3JheVN0YXJ0IGZyb20gJy4vaW1hZ2VzL21pbmktc25vd2ZsYWtlLnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3RhcnModmFsdWUpIHtcclxuICAgIGNvbnN0IG51bVN0YXJzID0gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgnKycsICcnKSkgLyAxMDA7XHJcbiAgICBsZXQgc3RhcnMgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPCBudW1TdGFycykge1xyXG4gICAgICAgICAgICBzdGFycyArPSBgPGltZyBjbGFzcz1cInJlZC1zdGFyXCIgc3JjPVwiJHtyZWRTdGFydH1cIiBhbHQ9XCJyZWQtc25vd2ZsYWtlXCI+YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFycyArPSBgPGltZyBjbGFzcz1cImdyYXktc3RhclwiIHNyYz1cIiR7Z3JheVN0YXJ0fVwiIGFsdD1cImdyYXktc25vd2ZsYWtlXCI+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxEZXRhaWxzLCBtb2RhbE92ZXJsYXksIHByb2R1Y3QpIHtcclxuICAgIG1vZGFsRGV0YWlscy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiZ2lmdFwiIHNyYz1cIiR7cHJvZHVjdC5pbWd9XCIgd2lkdGg9XCIzMTBcIiBoZWlnaHQ9XCIyMzBcIiBhbHQ9XCIke3Byb2R1Y3QubmFtZX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpZnQtY2FyZC10ZXh0LW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdC1jYXRlZ29yeVwiPjxzcGFuIGNsYXNzPVwiY2F0ZWdvcnktdGV4dCAke3Byb2R1Y3QuY2F0ZWdvcnl9XCI+JHtwcm9kdWN0LmNhdGVnb3J5LnJlcGxhY2UoLy0vZywgJyAnKX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdC1jYXJkLWl0ZW1cIj48Yj48L2I+ICR7cHJvZHVjdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXByb2R1Y3QtZGVzY3JpcHRpb25cIj48Yj48L2I+ICR7cHJvZHVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1wcm9kdWN0LXN1cGVycG93ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICA8YiBjbGFzcz1cIm1vZGFsLXByb2R1Y3Qtc3VwZXJwb3dlcnMtZGVzY3JpcHRpb25cIj5BZGRzIHN1cGVycG93ZXJzIHRvOjwvYj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1vZGFsLXByb2R1Y3Qtc3VwZXJwb3dlcnMtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICR7T2JqZWN0LmVudHJpZXMocHJvZHVjdC5zdXBlcnBvd2VycykubWFwKChba2V5LCB2YWx1ZV0pID0+IGA8bGkgY2xhc3M9XCJzdXBlcnBvd2Vycy1pdGVtXCI+PHNwYW4gY2xhc3M9XCJzdXBlcnBvd2Vycy1pdGVtLWtleVwiPiR7a2V5fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzdXBlcnBvd2Vycy1pdGVtLXZhbHVlXCI+JHt2YWx1ZX0gJHtnZW5lcmF0ZVN0YXJzKHZhbHVlKX08L3NwYW4+PC9saT5gKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgbW9kYWxPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbE92ZXJsYXkpIHtcclxuICAgIG1vZGFsT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHByZXZlbnREZWZhdWx0KTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdHMocHJvZHVjdHNUb1JlbmRlciwgY2F0YWxvZywgb3Blbk1vZGFsLCBtb2RhbERldGFpbHMsIG1vZGFsT3ZlcmxheSwgcHJvZHVjdHMpIHtcclxuICAgIGNhdGFsb2cuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwcm9kdWN0c1RvUmVuZGVyLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNhcmQnKTtcclxuICAgICAgICBjYXJkLmRhdGFzZXQuY2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xyXG4gICAgICAgIGNhcmQuZGF0YXNldC5wcm9kdWN0SW5kZXggPSBwcm9kdWN0cy5pbmRleE9mKHByb2R1Y3QpO1xyXG5cclxuICAgICAgICBsZXQgY2F0ZWdvcnlUZXh0ID0gcHJvZHVjdC5jYXRlZ29yeS5yZXBsYWNlKC8tL2csICcgJyk7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5U3BhbiA9IGA8c3BhbiBjbGFzcz1cImNhdGVnb3J5LXRleHQgJHtwcm9kdWN0LmNhdGVnb3J5fVwiPiR7Y2F0ZWdvcnlUZXh0fTwvc3Bhbj5gO1xyXG5cclxuICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJnaWZ0XCIgc3JjPVwiJHtwcm9kdWN0LmltZ31cIiB3aWR0aD1cIjMxMFwiIGhlaWdodD1cIjIzMFwiIGFsdD1cImdpZnQtcGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpZnQtY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpZnQtY2F0ZWdvcnlcIj4ke2NhdGVnb3J5U3Bhbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdC1jYXJkLWl0ZW1cIj4ke3Byb2R1Y3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgICAgICBjYXRhbG9nLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC5wcm9kdWN0SW5kZXgpO1xyXG4gICAgICAgICAgICBvcGVuTW9kYWwobW9kYWxEZXRhaWxzLCBtb2RhbE92ZXJsYXkscHJvZHVjdHNbcHJvZHVjdEluZGV4XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnOyAvLyDQmNC80L/QvtGA0YLQuNGA0YPQtdC8IENTUy3RhNCw0LnQu1xyXG5pbXBvcnQgZm9yV29yayBmcm9tICcuL2ltYWdlcy9naWZ0LWZvci13b3JrLnBuZyc7XHJcbmltcG9ydCBmb3JIZWFsdGggZnJvbSAnLi9pbWFnZXMvZ2lmdC1mb3Itd29yay5wbmcnO1xyXG5pbXBvcnQgZm9ySGFybW9ueSBmcm9tICcuL2ltYWdlcy9naWZ0LWZvci13b3JrLnBuZyc7XHJcblxyXG4vL2NhcmRzXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCdWcgTWFnbmV0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWJsZSB0byBmaW5kIGJ1Z3MgaW4gY29kZSBsaWtlIHRoZXkgd2VyZSBwbGFjZWQgdGhlcmUgb24gcHVycG9zZS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBcImxpdmVcIjogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBcImxvdmVcIjogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIFwiZHJlYW1cIjogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwiQ29uc29sZS5sb2cgR3VydVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXMgY29uc29sZS5sb2cgbGlrZSBhIGNyeXN0YWwgYmFsbCB0byBmaW5kIGFueSBpc3N1ZS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJTaG9ydGN1dCBDaGVhdGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiS25vd3MgZXZlcnkga2V5Ym9hcmQgc2hvcnRjdXQgbGlrZSB0aGV5IHdlcmUgYm9ybiB3aXRoIHRoZW0uXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLVdvcmtcIixcclxuICAgICAgICBpbWc6IGZvcldvcmssXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMjAwXCJ9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIG5hbWU6IFwiTWVyZ2UgTWFzdGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWVyZ2VzIGJyYW5jaGVzIGluIEdpdCB3aXRob3V0IGNvbmZsaWN0cywgbGlrZSBhIHdpemFyZCBkdXJpbmcgYW4gZXhhbS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIiszMDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgbmFtZTogXCJBc3luYyBUYW1lclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhhbmRsZXMgYXN5bmNocm9ub3VzIGNvZGUgYW5kIHByb21pc2VzIGxpa2Ugd2VsbC10cmFpbmVkIHBldHMuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLVdvcmtcIixcclxuICAgICAgICBpbWc6IGZvcldvcmssXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMzAwXCJ9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIG5hbWU6IFwiQ1NTIFRhbWVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FuIG1ha2UgRmxleGJveCBhbmQgR3JpZCB3b3JrIHRvZ2V0aGVyIGxpa2UgdGhleSB3ZXJlIGFsd2F5cyBiZXN0IGZyaWVuZHMuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLVdvcmtcIixcclxuICAgICAgICBpbWc6IGZvcldvcmssXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMzAwXCJ9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIG5hbWU6IFwiVGltZSBIYWNrZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXcml0ZXMgY29kZSBhdCB0aGUgbGFzdCBtb21lbnQgYnV0IGFsd2F5cyBtZWV0cyB0aGUgZGVhZGxpbmUuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLVdvcmtcIixcclxuICAgICAgICBpbWc6IGZvcldvcmssXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMjAwXCJ9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA4LFxyXG4gICAgICAgIG5hbWU6IFwiTGF5b3V0IE1hc3RlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZXMgcGVyZmVjdCBsYXlvdXRzIG9uIHRoZSBmaXJzdCB0cnksIGxpa2UgdGhleSBjYW4gcmVhZCB0aGUgZGVzaWduZXIncyBtaW5kLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzIwMFwifVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICBuYW1lOiBcIkRvY3VtZW50YXRpb24gV2hpc3BlcmVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVW5kZXJzdGFuZHMgY3J5cHRpYyBkb2N1bWVudGF0aW9uIGFzIGlmIHRoZXkgd3JvdGUgaXQgdGhlbXNlbHZlcy5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisxMDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIG5hbWU6IFwiRmVlZGJhY2sgTWFzdGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWNjZXB0cyBjbGllbnQgcmV2aXNpb25zIHdpdGggdGhlIFplbiBjYWxtIG9mIEJ1ZGRoYS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMSxcclxuICAgICAgICBuYW1lOiBcIkNvZGUgTWluaW1hbGlzdFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldyaXRlcyBjb2RlIHNvIGNvbmNpc2UgdGhhdCBvbmUgbGluZSBkb2VzIG1vcmUgdGhhbiBhIHdob2xlIGZpbGUuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLVdvcmtcIixcclxuICAgICAgICBpbWc6IGZvcldvcmssXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMjAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgbmFtZTogXCJQaXhlbC1QZXJmZWN0IE1hZ2ljaWFuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWxpZ25zIGVsZW1lbnRzIHRvIHRoZSBsYXN0IHBpeGVsLCBldmVuIHdoZW4gdGhlIGRlc2lnbiBsb29rcyBhYnN0cmFjdC5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMyxcclxuICAgICAgICBuYW1lOiBcIlBvc3R1cmUgTGV2aXRhdGlvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhbiBzaXQgZm9yIGhvdXJzLCBidXQgbWFpbnRhaW5zIHBlcmZlY3QgcG9zdHVyZSBsaWtlIGEgYmFsbGVyaW5hLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNCxcclxuICAgICAgICBuYW1lOiBcIlN0ZXAgTWFzdGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR2V0cyAxMCwwMDAgc3RlcHMgYSBkYXkgZXZlbiB3aGlsZSBzaXR0aW5nIGF0IHRoZSBjb21wdXRlci5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGVhbHRoXCIsXHJcbiAgICAgICAgaW1nOiBmb3JIZWFsdGgsXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgbmFtZTogXCJTbmFjayBSZXNpc3RlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIklnbm9yaW5nIGRlc2t0b3Agc25hY2tzIGxpa2UgYSBzdHJpY3QgZGlldGljaWFuLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisxMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNixcclxuICAgICAgICBuYW1lOiBcIkh5ZHJhdGlvbiBCb3RcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEcmlua3MgdGhlIHJlY29tbWVuZGVkIDIgbGl0ZXJzIG9mIHdhdGVyIGEgZGF5IGxpa2UgYSBoZWFsdGgtcHJvZ3JhbW1lZCByb2JvdC5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGVhbHRoXCIsXHJcbiAgICAgICAgaW1nOiBmb3JIZWFsdGgsXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNTAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTcsXHJcbiAgICAgICAgbmFtZTogXCJTbGVlcCBPdmVybG9yZFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNsZWVwcyA2IGhvdXJzIGJ1dCBmZWVscyBsaWtlIHRoZXkgaGFkIDEwLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxOCxcclxuICAgICAgICBuYW1lOiBcIkJyZWFrIEd1cnVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUYWtlcyBhIHN0cmV0Y2ggYnJlYWsgZXZlcnkgaG91ciB3aXRob3V0IGZvcmdldHRpbmcsIG5vIG1hdHRlciBob3cgZm9jdXNlZC5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGVhbHRoXCIsXHJcbiAgICAgICAgaW1nOiBmb3JIZWFsdGgsXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTksXHJcbiAgICAgICAgbmFtZTogXCJFeWUgUHJvdGVjdG9yXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FuIHdvcmsgYWxsIGRheSBhdCB0aGUgbW9uaXRvciB3aXRob3V0IGZlZWxpbmcgbGlrZSB0aGVpciBleWVzIGFyZSBvbiBmaXJlLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisxMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMCxcclxuICAgICAgICBuYW1lOiBcIlN0cmVzcyBEb2RnZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXN0ZXJzIG1lZGl0YXRpb24gcmlnaHQgYXQgdGhlIGtleWJvYXJkLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisxMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMSxcclxuICAgICAgICBuYW1lOiBcIllvZ2EgQ29kZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFYXNpbHkgc3dpdGNoZXMgZnJvbSBjb2RpbmcgdG8geW9nYSBhbmQgYmFjay5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGVhbHRoXCIsXHJcbiAgICAgICAgaW1nOiBmb3JIZWFsdGgsXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgXCJsaXZlXCI6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIis0MDBcIixcclxuICAgICAgICAgICAgXCJsb3ZlXCI6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBcImRyZWFtXCI6IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIyLFxyXG4gICAgICAgIG5hbWU6IFwiSGVhbHRoeSBTbmFja2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWx3YXlzIHBpY2tzIGZydWl0LCBldmVuIHdoZW4gY2hvY29sYXRlIGlzIHdpdGhpbiBhcm3igJlzIHJlYWNoLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMyxcclxuICAgICAgICBuYW1lOiBcIkNoYWlyIEV4ZXJjaXNlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZXMgdG8gd29yayBvdXQgd2l0aG91dCBsZWF2aW5nIHRoZSBjaGFpci5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGVhbHRoXCIsXHJcbiAgICAgICAgaW1nOiBmb3JIZWFsdGgsXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjQsXHJcbiAgICAgICAgbmFtZTogXCJDYWZmZWluZSBGaWx0ZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEcmlua3MgY29mZmVlIGF0IG5pZ2h0IGFuZCBzdGlsbCBmYWxscyBhc2xlZXAgd2l0aCBubyBwcm9ibGVtLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisyMDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyNSxcclxuICAgICAgICBuYW1lOiBcIkpveSBDaGFyZ2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmluZHMgam95IGluIHRoZSBsaXR0bGUgdGhpbmdz4oCUZXZlbiBpbiBhIGJ1aWxkIHRoYXQgZmluaXNoZXMgdW5leHBlY3RlZGx5IGZhc3QuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNTAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjYsXHJcbiAgICAgICAgbmFtZTogXCJFcnJvciBMYXVnaGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGF1Z2hzIGF0IGNvZGUgZXJyb3JzIGxpa2UgdGhleeKAmXJlIGpva2VzIGluc3RlYWQgb2YgZ2V0dGluZyBhbmdyeS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyNyxcclxuICAgICAgICBuYW1lOiBcIkJ1ZyBBY2NlcHRhbmNlIEd1cnVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBY2NlcHRzIGJ1Z3MgYXMgcGFydCBvZiB0aGUgam91cm5leSB0byBwZXJmZWN0aW9uIOKAlCBpdOKAmXMganVzdCBhbm90aGVyIHRhc2suXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjgsXHJcbiAgICAgICAgbmFtZTogXCJTcG9udGFuZW91cyBDb2RpbmcgUGhpbG9zb3BoZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQaGlsb3NvcGhpY2FsbHkgYWNjZXB0cyBhbnkgY2xpZW50IHN1Z2dlc3Rpb24gYWZ0ZXIgYSBsb25nIHJlZmFjdG9yLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDI5LFxyXG4gICAgICAgIG5hbWU6IFwiRGVhZGxpbmUgU2FnZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlbWFpbnMgemVuIGV2ZW4gd2hlbiB0aGUgZGVhZGxpbmUgaXMgY2xvc2UgYW5kIHRoZSBwcm9qZWN0IG1hbmFnZXIgaXMgc3RyZXNzZWQuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNTAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMzAsXHJcbiAgICAgICAgbmFtZTogXCJJbnNwaXJhdGlvbiBNYWVzdHJvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmluZHMgaW5zcGlyYXRpb24gb24gYW4gZW1wdHkgc2NyZWVuIGFzIGlmIG1hc3RlcnBpZWNlcyBhcmUgYWxyZWFkeSB0aGVyZS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisxMDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzMSxcclxuICAgICAgICBuYW1lOiBcIlBlYWNlIEtlZXBlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1haW50YWlucyBpbm5lciBjYWxtIGV2ZW4gaW4gbW9tZW50cyBvZiBpbnRlbnNlIGNyaXNpcy5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzMixcclxuICAgICAgICBuYW1lOiBcIkVtcGF0aHkgR3VydVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZlZWxzIHRoZSB0ZWFt4oCZcyBtb29kIGFuZCBjYW4gbGlmdCBldmVyeW9uZeKAmXMgc3Bpcml0cy5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzMyxcclxuICAgICAgICBuYW1lOiBcIkxhdWdodGVyIEdlbmVyYXRvclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNhbiBsaWdodGVuIGFueSB0ZW5zZSBzaXR1YXRpb24gd2l0aCBhIGpva2UgdGhhdCBldmVuIGJ1Z3MgbGF1Z2ggYXQuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNTAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMzQsXHJcbiAgICAgICAgbmFtZTogXCJQYXVzZSBNYXN0ZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJLbm93cyB3aGVuIHRvIGp1c3Qgc3RlcCBiYWNrIGZyb20gdGhlIGtleWJvYXJkIGFuZCBicmVhdGhlLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisxMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzEwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDM1LFxyXG4gICAgICAgIG5hbWU6IFwiQ29kZXIgSGVhbGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FuIHN1cHBvcnQgYSBjb2xsZWFndWUgaW4gdGhlaXIgZGFya2VzdCBob3VyLCBldmVuIGlmIGl04oCZcyBhIDUwMCBlcnJvci5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzNixcclxuICAgICAgICBuYW1lOiBcIk11c2ljIENvZGUgQ3VyYXRvclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZXMgd29yayBwbGF5bGlzdHMgc28gZ29vZCwgZXZlbiBkZWFkbGluZXMgZm9sbG93IHRoZSByaHl0aG0uXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMjAwXCJ9XHJcbiAgICB9XHJcbl07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJzsgLy8g0JjQvNC/0L7RgNGC0LjRgNGD0LXQvCBDU1Mt0YTQsNC50LtcclxuXHJcbi8vQnVyZ2VyLW1lbnVcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBidXJnZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyLW1lbnUtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBtZW51T3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXItbWVudScpO1xyXG4gICAgbGV0IG1lbnVPcGVuID0gZmFsc2U7IC8vINCe0YLRgdC70LXQttC40LLQsNC10Lwg0YHQvtGB0YLQvtGP0L3QuNC1INC80LXQvdGOXHJcblxyXG4gICAgYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1lbnVPcGVuID0gIW1lbnVPcGVuOyAvLyDQn9C10YDQtdC60LvRjtGH0LDQtdC8INGB0L7RgdGC0L7Rj9C90LjQtVxyXG5cclxuICAgICAgICBpZiAobWVudU9wZW4pIHtcclxuICAgICAgICAgICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLW1lbnUnKTtcclxuICAgICAgICAgICAgLy/QnNC10L3RjiDQvtGC0LrRgNGL0YLQvlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnVPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2J1cmdlci1tZW51Jyk7XHJcbiAgICAgICAgICAgIC8vINCc0LXQvdGOINC30LDQutGA0YvRgtC+XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy9iYWNrIHRvIHRvcCBidXR0b25cclxuXHJcbmNvbnN0IGJhY2tUb1RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLXRvLXRvcC1idXR0b24nKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDMwMCkge1xyXG4gICAgICAgIGJhY2tUb1RvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KPQsdC40YDQsNC10Lwg0LrQvdC+0L/QutGDINCyINGB0LDQvNC+0Lwg0LLQtdGA0YXRg1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPT09IDApXHJcbiAgICAgICAgYmFja1RvVG9wQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59KTtcclxuXHJcbmJhY2tUb1RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vL1NsaWRlclxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXJvdycpO1xyXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdy1waWMsIC5yb3ctdGV4dCcpO1xyXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYnV0dG9uLTEnKTtcclxuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWJ1dHRvbi0yJyk7XHJcblxyXG5cclxuICAgIGxldCBjdXJyZW50SW5kZXggPSAwOyAvLyDQmNC90LTQtdC60YEg0YLQtdC60YPRidC10LPQviDQsNC60YLQuNCy0L3QvtCz0L4g0YHQu9Cw0LnQtNCwICjQv9C10YDQstC+0LPQviDQstC40LTQuNC80L7Qs9C+KVxyXG4gICAgY29uc3Qgc2xpZGVzVG9TY3JvbGwgPSAxOyAvLyDQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdC70LDQudC00L7QsiDQtNC70Y8g0L/RgNC+0LrRgNGD0YLQutC4XHJcbiAgICBsZXQgc2xpZGVXaWR0aCA9IDA7IC8vINCo0LjRgNC40L3QsCDQvtC00L3QvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICBsZXQgc2xpZGVyT2Zmc2V0ID0gMDsgLy8g0KLQtdC60YPRidC10LUg0YHQvNC10YnQtdC90LjQtSDRgdC70LDQudC00LXRgNCwXHJcblxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LTQstC40LPQsCDRgdC70LDQudC00LXRgNCwXHJcbiAgICBmdW5jdGlvbiBtb3ZlU2xpZGVyKHNob3VsZFJlc2V0ID0gZmFsc2UpIHtcclxuICAgICAgICBzbGlkZVdpZHRoID0gc2xpZGVzWzRdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGlmIChzaG91bGRSZXNldCkge1xyXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQgPSAwOyAvLyDQodCx0YDQsNGB0YvQstCw0LXQvCDRgdC80LXRidC10L3QuNC1INC/0YDQuCDRgdCx0YDQvtGB0LVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQgPSBjdXJyZW50SW5kZXggKiBzbGlkZVdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3NsaWRlck9mZnNldH1weClgO1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0LHQvdC+0LLQu9C10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjRjyDQutC90L7Qv9C+0LpcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgcHJldkJ1dHRvbi5kaXNhYmxlZCA9IGN1cnJlbnRJbmRleCA9PT0gMDtcclxuICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gY3VycmVudEluZGV4ICsgc2xpZGVzVG9TY3JvbGwgPj0gc2xpZGVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LTQu9GPINC60L3QvtC/0LrQuCBcItCS0L/QtdGA0LXQtFwiXHJcbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggKyBzbGlkZXNUb1Njcm9sbCA8IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY3VycmVudEluZGV4ICs9IHNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICBtb3ZlU2xpZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0LTQu9GPINC60L3QvtC/0LrQuCBcItCd0LDQt9Cw0LRcIlxyXG4gICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBNYXRoLm1heCgwLCBjdXJyZW50SW5kZXggLSBzbGlkZXNUb1Njcm9sbCk7IC8vINCn0YLQvtCx0Ysg0L3QtSDRg9GF0L7QtNC40YLRjCDQsiDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQuSDQuNC90LTQtdC60YFcclxuICAgICAgICAgICAgbW92ZVNsaWRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQsdGA0L7RgdCwINGB0LvQsNC50LTQtdGA0LAg0LIg0L3QsNGH0LDQu9GM0L3QvtC1INC/0L7Qu9C+0LbQtdC90LjQtVxyXG4gICAgZnVuY3Rpb24gcmVzZXRTbGlkZXIoKSB7XHJcbiAgICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICBtb3ZlU2xpZGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQuNC30LzQtdC90LXQvdC40Y8g0YDQsNC30LzQtdGA0LAg0L7QutC90LAg0LTQu9GPINCw0LTQsNC/0YLQuNCy0L3QvtGB0YLQuFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVXaWR0aCgpIHtcclxuICAgICAgICByZXNldFNsaWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTbGlkZVdpZHRoKTtcclxuXHJcblxyXG4gICAgLy8g0J3QsNGH0LDQu9GM0L3QsNGPINGD0YHRgtCw0L3QvtCy0LrQsCDQv9C+0LvQvtC20LXQvdC40Y9cclxuICAgIG1vdmVTbGlkZXIoKTtcclxufSk7XHJcblxyXG4vL3RpbWVyXHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcclxuICAgIGNvbnN0IG5ld1llYXJEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgMSwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgdGltZUxlZnQgPSBuZXdZZWFyRGF0ZSAtIG5vdztcclxuXHJcbiAgICBpZiAodGltZUxlZnQgPD0gMCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlzJykudGV4dENvbnRlbnQgPSAn0KEnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VycycpLnRleHRDb250ZW50ID0gJ9CdJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWludXRlcycpLnRleHRDb250ZW50ID0gJ9CeJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kcycpLnRleHRDb250ZW50ID0gJ9CcJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheXMnKS50ZXh0Q29udGVudCA9IGRheXM7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMnKS50ZXh0Q29udGVudCA9IFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW51dGVzJykudGV4dENvbnRlbnQgPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRzJykudGV4dENvbnRlbnQgPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKTtcclxufVxyXG5cclxudXBkYXRlVGltZXIoKTtcclxuc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDEwMDApO1xyXG5cclxuXHJcbi8vcmFuZG9tIGdpZnRzXHJcblxyXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QtdGA0LXQvNC10YjQuNCy0LDQvdC40Y8g0LzQsNGB0YHQuNCy0LBcclxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG4vLyDQmNC80L/QvtGA0YLQuNGA0YPQtdC8INC00LDQvdC90YvQtSDQviDQv9GA0L7QtNGD0LrRgtCw0YVcclxuaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tICcuL2NhcmRzLmpzJztcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCByZW5kZXJQcm9kdWN0cyB9IGZyb20gJy4vTW9kYWwuanMnO1xyXG5cclxuLy8g0JrQvtC0INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINGB0LvRg9GH0LDQudC90YvRhSDQutCw0YDRgtC+0YfQtdC6XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlc3QtZ2lmdHMtY2FyZHMnKTtcclxuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBtb2RhbERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZGV0YWlscycpO1xyXG4gICAgY29uc3QgbW9kYWxDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1jbG9zZScpO1xyXG5cclxuICAgIGNvbnN0IHNodWZmbGVkUHJvZHVjdHMgPSBzaHVmZmxlQXJyYXkoWy4uLnByb2R1Y3RzXSk7XHJcbiAgICBjb25zdCByYW5kb21Qcm9kdWN0cyA9IHNodWZmbGVkUHJvZHVjdHMuc2xpY2UoMCwgNCk7XHJcbiAgICByZW5kZXJQcm9kdWN0cyhyYW5kb21Qcm9kdWN0cyxjYXRhbG9nLCBvcGVuTW9kYWwsIG1vZGFsRGV0YWlscywgbW9kYWxPdmVybGF5LCBwcm9kdWN0cyk7XHJcblxyXG4gICAgbW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gY2xvc2VNb2RhbChtb2RhbE92ZXJsYXkpKTtcclxuICAgIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxPdmVybGF5KSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWxPdmVybGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pOyJdLCJuYW1lcyI6WyJyZWRTdGFydCIsImdyYXlTdGFydCIsInByZXZlbnREZWZhdWx0IiwiZSIsImdlbmVyYXRlU3RhcnMiLCJ2YWx1ZSIsIm51bVN0YXJzIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwic3RhcnMiLCJpIiwiY29uY2F0Iiwib3Blbk1vZGFsIiwibW9kYWxEZXRhaWxzIiwibW9kYWxPdmVybGF5IiwicHJvZHVjdCIsImlubmVySFRNTCIsImltZyIsIm5hbWUiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiT2JqZWN0IiwiZW50cmllcyIsInN1cGVycG93ZXJzIiwibWFwIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJrZXkiLCJqb2luIiwic3R5bGUiLCJkaXNwbGF5IiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjbG9zZU1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlclByb2R1Y3RzIiwicHJvZHVjdHNUb1JlbmRlciIsImNhdGFsb2ciLCJwcm9kdWN0cyIsImZvckVhY2giLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJwcm9kdWN0SW5kZXgiLCJpbmRleE9mIiwiY2F0ZWdvcnlUZXh0IiwiY2F0ZWdvcnlTcGFuIiwiYXBwZW5kQ2hpbGQiLCJmb3JXb3JrIiwiZm9ySGVhbHRoIiwiZm9ySGFybW9ueSIsImlkIiwibGl2ZSIsImNyZWF0ZSIsImxvdmUiLCJkcmVhbSIsImJ1cmdlckJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwibWVudU92ZXJsYXkiLCJtZW51T3BlbiIsInJlbW92ZSIsImJhY2tUb1RvcEJ0biIsIndpbmRvdyIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJzbGlkZXJXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2QnV0dG9uIiwibmV4dEJ1dHRvbiIsImN1cnJlbnRJbmRleCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVXaWR0aCIsInNsaWRlck9mZnNldCIsIm1vdmVTbGlkZXIiLCJzaG91bGRSZXNldCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm9mZnNldFdpZHRoIiwidHJhbnNmb3JtIiwidXBkYXRlQnV0dG9ucyIsImRpc2FibGVkIiwiTWF0aCIsIm1heCIsInJlc2V0U2xpZGVyIiwidXBkYXRlU2xpZGVXaWR0aCIsInVwZGF0ZVRpbWVyIiwibmV3WWVhckRhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJub3ciLCJ0aW1lTGVmdCIsInRleHRDb250ZW50IiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsImoiLCJyYW5kb20iLCJtb2RhbENsb3NlQnV0dG9uIiwic2h1ZmZsZWRQcm9kdWN0cyIsIl90b0NvbnN1bWFibGVBcnJheSIsInJhbmRvbVByb2R1Y3RzIiwic2xpY2UiLCJldmVudCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=