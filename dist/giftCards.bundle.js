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
/*!**********************!*\
  !*** ./giftCards.js ***!
  \**********************/
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



document.addEventListener('DOMContentLoaded', function () {
  var menuButtons = document.querySelectorAll('.gifts-nav-item-button');
  var catalog = document.querySelector('.gifts-container');
  var modalOverlay = document.getElementById('modal-overlay');
  var modalDetails = document.getElementById('modal-details');
  var modalCloseButton = document.getElementById('modal-close');
  function sortProductsByName(products) {
    return _toConsumableArray(products).sort(function (a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  function filterProducts(category) {
    var filteredProducts = _toConsumableArray(_cards_js__WEBPACK_IMPORTED_MODULE_1__.products);
    if (category === 'all') {
      filteredProducts = sortProductsByName(filteredProducts);
    } else {
      filteredProducts = _cards_js__WEBPACK_IMPORTED_MODULE_1__.products.filter(function (product) {
        return product.category === category;
      });
      filteredProducts = sortProductsByName(filteredProducts);
    }
    (0,_Modal_js__WEBPACK_IMPORTED_MODULE_2__.renderProducts)(filteredProducts, catalog, _Modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal, modalDetails, modalOverlay, _cards_js__WEBPACK_IMPORTED_MODULE_1__.products);
  }
  function activateMenuButton(clickedButton) {
    menuButtons.forEach(function (button) {
      return button.classList.remove('active');
    });
    clickedButton.classList.add('active');
  }
  modalCloseButton.addEventListener('click', function () {
    return (0,_Modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(modalOverlay);
  });
  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      (0,_Modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(modalOverlay);
    }
  });
  filterProducts('all');
  menuButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var category = this.dataset.category;
      filterProducts(category);
      activateMenuButton(this);
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLEVBQUU1QixnREFBUyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRTJCLCtDQUFRLENBQUM7RUFDN0Y7RUFFQSxTQUFTb0Msa0JBQWtCQSxDQUFDQyxhQUFhLEVBQUU7SUFDdkNqQixXQUFXLENBQUNuQixPQUFPLENBQUMsVUFBQXFDLE1BQU07TUFBQSxPQUFJQSxNQUFNLENBQUNsQyxTQUFTLENBQUNtQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQUEsRUFBQztJQUNoRUYsYUFBYSxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3pDO0VBRUFtQixnQkFBZ0IsQ0FBQy9CLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUFBLE9BQU1FLHFEQUFVLENBQUN0QixZQUFZLENBQUM7RUFBQSxFQUFDO0VBQzFFQSxZQUFZLENBQUNvQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUytDLEtBQUssRUFBRTtJQUNuRCxJQUFJQSxLQUFLLENBQUNDLE1BQU0sS0FBS3BFLFlBQVksRUFBRTtNQUMvQnNCLHFEQUFVLENBQUN0QixZQUFZLENBQUM7SUFDNUI7RUFDSixDQUFDLENBQUM7RUFFRjRELGNBQWMsQ0FBQyxLQUFLLENBQUM7RUFFckJiLFdBQVcsQ0FBQ25CLE9BQU8sQ0FBQyxVQUFBcUMsTUFBTSxFQUFJO0lBQzFCQSxNQUFNLENBQUM3QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUN6QyxJQUFNZixRQUFRLEdBQUcsSUFBSSxDQUFDNEIsT0FBTyxDQUFDNUIsUUFBUTtNQUN0Q3VELGNBQWMsQ0FBQ3ZELFFBQVEsQ0FBQztNQUN4QjBELGtCQUFrQixDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NocmlzdG1hcy1zaG9wLy4vTW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXNob3AvLi9jYXJkcy5qcyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC8uL3N0eWxlLmNzcz82NDI5Iiwid2VicGFjazovL2NocmlzdG1hcy1zaG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NocmlzdG1hcy1zaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NocmlzdG1hcy1zaG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLXNob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jaHJpc3RtYXMtc2hvcC8uL2dpZnRDYXJkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJzsgLy8g0JjQvNC/0L7RgNGC0LjRgNGD0LXQvCBDU1Mt0YTQsNC50LtcclxuaW1wb3J0IHJlZFN0YXJ0IGZyb20gJy4vaW1hZ2VzL21pbmktc25vd2ZsYWtlLnN2Zyc7XHJcbmltcG9ydCBncmF5U3RhcnQgZnJvbSAnLi9pbWFnZXMvbWluaS1zbm93Zmxha2Uuc3ZnJztcclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTdGFycyh2YWx1ZSkge1xyXG4gICAgY29uc3QgbnVtU3RhcnMgPSBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKCcrJywgJycpKSAvIDEwMDtcclxuICAgIGxldCBzdGFycyA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICBpZiAoaSA8IG51bVN0YXJzKSB7XHJcbiAgICAgICAgICAgIHN0YXJzICs9IGA8aW1nIGNsYXNzPVwicmVkLXN0YXJcIiBzcmM9XCIke3JlZFN0YXJ0fVwiIGFsdD1cInJlZC1zbm93Zmxha2VcIj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJzICs9IGA8aW1nIGNsYXNzPVwiZ3JheS1zdGFyXCIgc3JjPVwiJHtncmF5U3RhcnR9XCIgYWx0PVwiZ3JheS1zbm93Zmxha2VcIj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdGFycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbERldGFpbHMsIG1vZGFsT3ZlcmxheSwgcHJvZHVjdCkge1xyXG4gICAgbW9kYWxEZXRhaWxzLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJnaWZ0XCIgc3JjPVwiJHtwcm9kdWN0LmltZ31cIiB3aWR0aD1cIjMxMFwiIGhlaWdodD1cIjIzMFwiIGFsdD1cIiR7cHJvZHVjdC5uYW1lfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdC1jYXJkLXRleHQtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaWZ0LWNhdGVnb3J5XCI+PHNwYW4gY2xhc3M9XCJjYXRlZ29yeS10ZXh0ICR7cHJvZHVjdC5jYXRlZ29yeX1cIj4ke3Byb2R1Y3QuY2F0ZWdvcnkucmVwbGFjZSgvLS9nLCAnICcpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaWZ0LWNhcmQtaXRlbVwiPjxiPjwvYj4gJHtwcm9kdWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcHJvZHVjdC1kZXNjcmlwdGlvblwiPjxiPjwvYj4gJHtwcm9kdWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXByb2R1Y3Qtc3VwZXJwb3dlcnNcIj5cclxuICAgICAgICAgICAgICAgIDxiIGNsYXNzPVwibW9kYWwtcHJvZHVjdC1zdXBlcnBvd2Vycy1kZXNjcmlwdGlvblwiPkFkZHMgc3VwZXJwb3dlcnMgdG86PC9iPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibW9kYWwtcHJvZHVjdC1zdXBlcnBvd2Vycy1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgJHtPYmplY3QuZW50cmllcyhwcm9kdWN0LnN1cGVycG93ZXJzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYDxsaSBjbGFzcz1cInN1cGVycG93ZXJzLWl0ZW1cIj48c3BhbiBjbGFzcz1cInN1cGVycG93ZXJzLWl0ZW0ta2V5XCI+JHtrZXl9PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN1cGVycG93ZXJzLWl0ZW0tdmFsdWVcIj4ke3ZhbHVlfSAke2dlbmVyYXRlU3RhcnModmFsdWUpfTwvc3Bhbj48L2xpPmApLmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICBtb2RhbE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsT3ZlcmxheSkge1xyXG4gICAgbW9kYWxPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgcHJldmVudERlZmF1bHQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9kdWN0cyhwcm9kdWN0c1RvUmVuZGVyLCBjYXRhbG9nLCBvcGVuTW9kYWwsIG1vZGFsRGV0YWlscywgbW9kYWxPdmVybGF5LCBwcm9kdWN0cykge1xyXG4gICAgY2F0YWxvZy5pbm5lckhUTUwgPSAnJztcclxuICAgIHByb2R1Y3RzVG9SZW5kZXIuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2FyZCcpO1xyXG4gICAgICAgIGNhcmQuZGF0YXNldC5jYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnk7XHJcbiAgICAgICAgY2FyZC5kYXRhc2V0LnByb2R1Y3RJbmRleCA9IHByb2R1Y3RzLmluZGV4T2YocHJvZHVjdCk7XHJcblxyXG4gICAgICAgIGxldCBjYXRlZ29yeVRleHQgPSBwcm9kdWN0LmNhdGVnb3J5LnJlcGxhY2UoLy0vZywgJyAnKTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlTcGFuID0gYDxzcGFuIGNsYXNzPVwiY2F0ZWdvcnktdGV4dCAke3Byb2R1Y3QuY2F0ZWdvcnl9XCI+JHtjYXRlZ29yeVRleHR9PC9zcGFuPmA7XHJcblxyXG4gICAgICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImdpZnRcIiBzcmM9XCIke3Byb2R1Y3QuaW1nfVwiIHdpZHRoPVwiMzEwXCIgaGVpZ2h0PVwiMjMwXCIgYWx0PVwiZ2lmdC1waWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdC1jYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdC1jYXRlZ29yeVwiPiR7Y2F0ZWdvcnlTcGFufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaWZ0LWNhcmQtaXRlbVwiPiR7cHJvZHVjdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgICAgIGNhdGFsb2cuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZGV4ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnByb2R1Y3RJbmRleCk7XHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbERldGFpbHMsIG1vZGFsT3ZlcmxheSxwcm9kdWN0c1twcm9kdWN0SW5kZXhdKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7IC8vINCY0LzQv9C+0YDRgtC40YDRg9C10LwgQ1NTLdGE0LDQudC7XHJcbmltcG9ydCBmb3JXb3JrIGZyb20gJy4vaW1hZ2VzL2dpZnQtZm9yLXdvcmsucG5nJztcclxuaW1wb3J0IGZvckhlYWx0aCBmcm9tICcuL2ltYWdlcy9naWZ0LWZvci13b3JrLnBuZyc7XHJcbmltcG9ydCBmb3JIYXJtb255IGZyb20gJy4vaW1hZ2VzL2dpZnQtZm9yLXdvcmsucG5nJztcclxuXHJcbi8vY2FyZHNcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJ1ZyBNYWduZXRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBYmxlIHRvIGZpbmQgYnVncyBpbiBjb2RlIGxpa2UgdGhleSB3ZXJlIHBsYWNlZCB0aGVyZSBvbiBwdXJwb3NlLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIFwibGl2ZVwiOiBcIis1MDBcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIFwibG92ZVwiOiBcIisyMDBcIixcclxuICAgICAgICAgICAgXCJkcmVhbVwiOiBcIis0MDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJDb25zb2xlLmxvZyBHdXJ1XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlcyBjb25zb2xlLmxvZyBsaWtlIGEgY3J5c3RhbCBiYWxsIHRvIGZpbmQgYW55IGlzc3VlLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIlNob3J0Y3V0IENoZWF0ZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJLbm93cyBldmVyeSBrZXlib2FyZCBzaG9ydGN1dCBsaWtlIHRoZXkgd2VyZSBib3JuIHdpdGggdGhlbS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisyMDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJNZXJnZSBNYXN0ZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNZXJnZXMgYnJhbmNoZXMgaW4gR2l0IHdpdGhvdXQgY29uZmxpY3RzLCBsaWtlIGEgd2l6YXJkIGR1cmluZyBhbiBleGFtLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzMwMFwifVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBuYW1lOiBcIkFzeW5jIFRhbWVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGFuZGxlcyBhc3luY2hyb25vdXMgY29kZSBhbmQgcHJvbWlzZXMgbGlrZSB3ZWxsLXRyYWluZWQgcGV0cy5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisxMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIiszMDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgbmFtZTogXCJDU1MgVGFtZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDYW4gbWFrZSBGbGV4Ym94IGFuZCBHcmlkIHdvcmsgdG9nZXRoZXIgbGlrZSB0aGV5IHdlcmUgYWx3YXlzIGJlc3QgZnJpZW5kcy5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIiszMDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgbmFtZTogXCJUaW1lIEhhY2tlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldyaXRlcyBjb2RlIGF0IHRoZSBsYXN0IG1vbWVudCBidXQgYWx3YXlzIG1lZXRzIHRoZSBkZWFkbGluZS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisyMDBcIn1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgbmFtZTogXCJMYXlvdXQgTWFzdGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlcyBwZXJmZWN0IGxheW91dHMgb24gdGhlIGZpcnN0IHRyeSwgbGlrZSB0aGV5IGNhbiByZWFkIHRoZSBkZXNpZ25lcidzIG1pbmQuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLVdvcmtcIixcclxuICAgICAgICBpbWc6IGZvcldvcmssXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMjAwXCJ9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA5LFxyXG4gICAgICAgIG5hbWU6IFwiRG9jdW1lbnRhdGlvbiBXaGlzcGVyZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVbmRlcnN0YW5kcyBjcnlwdGljIGRvY3VtZW50YXRpb24gYXMgaWYgdGhleSB3cm90ZSBpdCB0aGVtc2VsdmVzLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzEwMFwifVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgbmFtZTogXCJGZWVkYmFjayBNYXN0ZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBY2NlcHRzIGNsaWVudCByZXZpc2lvbnMgd2l0aCB0aGUgWmVuIGNhbG0gb2YgQnVkZGhhLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgIG5hbWU6IFwiQ29kZSBNaW5pbWFsaXN0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV3JpdGVzIGNvZGUgc28gY29uY2lzZSB0aGF0IG9uZSBsaW5lIGRvZXMgbW9yZSB0aGFuIGEgd2hvbGUgZmlsZS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItV29ya1wiLFxyXG4gICAgICAgIGltZzogZm9yV29yayxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisyMDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMixcclxuICAgICAgICBuYW1lOiBcIlBpeGVsLVBlcmZlY3QgTWFnaWNpYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGlnbnMgZWxlbWVudHMgdG8gdGhlIGxhc3QgcGl4ZWwsIGV2ZW4gd2hlbiB0aGUgZGVzaWduIGxvb2tzIGFic3RyYWN0LlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1Xb3JrXCIsXHJcbiAgICAgICAgaW1nOiBmb3JXb3JrLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEzLFxyXG4gICAgICAgIG5hbWU6IFwiUG9zdHVyZSBMZXZpdGF0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FuIHNpdCBmb3IgaG91cnMsIGJ1dCBtYWludGFpbnMgcGVyZmVjdCBwb3N0dXJlIGxpa2UgYSBiYWxsZXJpbmEuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgIG5hbWU6IFwiU3RlcCBNYXN0ZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHZXRzIDEwLDAwMCBzdGVwcyBhIGRheSBldmVuIHdoaWxlIHNpdHRpbmcgYXQgdGhlIGNvbXB1dGVyLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNSxcclxuICAgICAgICBuYW1lOiBcIlNuYWNrIFJlc2lzdGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSWdub3JpbmcgZGVza3RvcCBzbmFja3MgbGlrZSBhIHN0cmljdCBkaWV0aWNpYW4uXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzEwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE2LFxyXG4gICAgICAgIG5hbWU6IFwiSHlkcmF0aW9uIEJvdFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRyaW5rcyB0aGUgcmVjb21tZW5kZWQgMiBsaXRlcnMgb2Ygd2F0ZXIgYSBkYXkgbGlrZSBhIGhlYWx0aC1wcm9ncmFtbWVkIHJvYm90LlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNyxcclxuICAgICAgICBuYW1lOiBcIlNsZWVwIE92ZXJsb3JkXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2xlZXBzIDYgaG91cnMgYnV0IGZlZWxzIGxpa2UgdGhleSBoYWQgMTAuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzUwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE4LFxyXG4gICAgICAgIG5hbWU6IFwiQnJlYWsgR3VydVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRha2VzIGEgc3RyZXRjaCBicmVhayBldmVyeSBob3VyIHdpdGhvdXQgZm9yZ2V0dGluZywgbm8gbWF0dGVyIGhvdyBmb2N1c2VkLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxOSxcclxuICAgICAgICBuYW1lOiBcIkV5ZSBQcm90ZWN0b3JcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDYW4gd29yayBhbGwgZGF5IGF0IHRoZSBtb25pdG9yIHdpdGhvdXQgZmVlbGluZyBsaWtlIHRoZWlyIGV5ZXMgYXJlIG9uIGZpcmUuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzEwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIwLFxyXG4gICAgICAgIG5hbWU6IFwiU3RyZXNzIERvZGdlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1hc3RlcnMgbWVkaXRhdGlvbiByaWdodCBhdCB0aGUga2V5Ym9hcmQuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzEwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIxLFxyXG4gICAgICAgIG5hbWU6IFwiWW9nYSBDb2RlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVhc2lseSBzd2l0Y2hlcyBmcm9tIGNvZGluZyB0byB5b2dhIGFuZCBiYWNrLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBcImxpdmVcIjogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBcImxvdmVcIjogXCIrNDAwXCIsXHJcbiAgICAgICAgICAgIFwiZHJlYW1cIjogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjIsXHJcbiAgICAgICAgbmFtZTogXCJIZWFsdGh5IFNuYWNrZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBbHdheXMgcGlja3MgZnJ1aXQsIGV2ZW4gd2hlbiBjaG9jb2xhdGUgaXMgd2l0aGluIGFybeKAmXMgcmVhY2guXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzQwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIzLFxyXG4gICAgICAgIG5hbWU6IFwiQ2hhaXIgRXhlcmNpc2VyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFuYWdlcyB0byB3b3JrIG91dCB3aXRob3V0IGxlYXZpbmcgdGhlIGNoYWlyLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IZWFsdGhcIixcclxuICAgICAgICBpbWc6IGZvckhlYWx0aCxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyNCxcclxuICAgICAgICBuYW1lOiBcIkNhZmZlaW5lIEZpbHRlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRyaW5rcyBjb2ZmZWUgYXQgbmlnaHQgYW5kIHN0aWxsIGZhbGxzIGFzbGVlcCB3aXRoIG5vIHByb2JsZW0uXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhlYWx0aFwiLFxyXG4gICAgICAgIGltZzogZm9ySGVhbHRoLFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzQwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzIwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDI1LFxyXG4gICAgICAgIG5hbWU6IFwiSm95IENoYXJnZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kcyBqb3kgaW4gdGhlIGxpdHRsZSB0aGluZ3PigJRldmVuIGluIGEgYnVpbGQgdGhhdCBmaW5pc2hlcyB1bmV4cGVjdGVkbHkgZmFzdC5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyNixcclxuICAgICAgICBuYW1lOiBcIkVycm9yIExhdWdoZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMYXVnaHMgYXQgY29kZSBlcnJvcnMgbGlrZSB0aGV54oCZcmUgam9rZXMgaW5zdGVhZCBvZiBnZXR0aW5nIGFuZ3J5LlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzUwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDI3LFxyXG4gICAgICAgIG5hbWU6IFwiQnVnIEFjY2VwdGFuY2UgR3VydVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFjY2VwdHMgYnVncyBhcyBwYXJ0IG9mIHRoZSBqb3VybmV5IHRvIHBlcmZlY3Rpb24g4oCUIGl04oCZcyBqdXN0IGFub3RoZXIgdGFzay5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrNTAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis0MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyOCxcclxuICAgICAgICBuYW1lOiBcIlNwb250YW5lb3VzIENvZGluZyBQaGlsb3NvcGhlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBoaWxvc29waGljYWxseSBhY2NlcHRzIGFueSBjbGllbnQgc3VnZ2VzdGlvbiBhZnRlciBhIGxvbmcgcmVmYWN0b3IuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrNDAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjksXHJcbiAgICAgICAgbmFtZTogXCJEZWFkbGluZSBTYWdlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmVtYWlucyB6ZW4gZXZlbiB3aGVuIHRoZSBkZWFkbGluZSBpcyBjbG9zZSBhbmQgdGhlIHByb2plY3QgbWFuYWdlciBpcyBzdHJlc3NlZC5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzMCxcclxuICAgICAgICBuYW1lOiBcIkluc3BpcmF0aW9uIE1hZXN0cm9cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kcyBpbnNwaXJhdGlvbiBvbiBhbiBlbXB0eSBzY3JlZW4gYXMgaWYgbWFzdGVycGllY2VzIGFyZSBhbHJlYWR5IHRoZXJlLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis0MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzEwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMxLFxyXG4gICAgICAgIG5hbWU6IFwiUGVhY2UgS2VlcGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFpbnRhaW5zIGlubmVyIGNhbG0gZXZlbiBpbiBtb21lbnRzIG9mIGludGVuc2UgY3Jpc2lzLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzUwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMyLFxyXG4gICAgICAgIG5hbWU6IFwiRW1wYXRoeSBHdXJ1XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmVlbHMgdGhlIHRlYW3igJlzIG1vb2QgYW5kIGNhbiBsaWZ0IGV2ZXJ5b25l4oCZcyBzcGlyaXRzLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzUwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzUwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMzLFxyXG4gICAgICAgIG5hbWU6IFwiTGF1Z2h0ZXIgR2VuZXJhdG9yXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FuIGxpZ2h0ZW4gYW55IHRlbnNlIHNpdHVhdGlvbiB3aXRoIGEgam9rZSB0aGF0IGV2ZW4gYnVncyBsYXVnaCBhdC5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIis1MDBcIn1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzNCxcclxuICAgICAgICBuYW1lOiBcIlBhdXNlIE1hc3RlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIktub3dzIHdoZW4gdG8ganVzdCBzdGVwIGJhY2sgZnJvbSB0aGUga2V5Ym9hcmQgYW5kIGJyZWF0aGUuXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiRm9yLUhhcm1vbnlcIixcclxuICAgICAgICBpbWc6IGZvckhhcm1vbnksXHJcbiAgICAgICAgc3VwZXJwb3dlcnM6IHtcclxuICAgICAgICAgICAgbGl2ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogXCIrMjAwXCIsXHJcbiAgICAgICAgICAgIGxvdmU6IFwiKzEwMFwiLFxyXG4gICAgICAgICAgICBkcmVhbTogXCIrMTAwXCJ9XHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMzUsXHJcbiAgICAgICAgbmFtZTogXCJDb2RlciBIZWFsZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDYW4gc3VwcG9ydCBhIGNvbGxlYWd1ZSBpbiB0aGVpciBkYXJrZXN0IGhvdXIsIGV2ZW4gaWYgaXTigJlzIGEgNTAwIGVycm9yLlwiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIkZvci1IYXJtb255XCIsXHJcbiAgICAgICAgaW1nOiBmb3JIYXJtb255LFxyXG4gICAgICAgIHN1cGVycG93ZXJzOiB7XHJcbiAgICAgICAgICAgIGxpdmU6IFwiKzMwMFwiLFxyXG4gICAgICAgICAgICBjcmVhdGU6IFwiKzIwMFwiLFxyXG4gICAgICAgICAgICBsb3ZlOiBcIis1MDBcIixcclxuICAgICAgICAgICAgZHJlYW06IFwiKzUwMFwifVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDM2LFxyXG4gICAgICAgIG5hbWU6IFwiTXVzaWMgQ29kZSBDdXJhdG9yXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlcyB3b3JrIHBsYXlsaXN0cyBzbyBnb29kLCBldmVuIGRlYWRsaW5lcyBmb2xsb3cgdGhlIHJoeXRobS5cIixcclxuICAgICAgICBjYXRlZ29yeTogXCJGb3ItSGFybW9ueVwiLFxyXG4gICAgICAgIGltZzogZm9ySGFybW9ueSxcclxuICAgICAgICBzdXBlcnBvd2Vyczoge1xyXG4gICAgICAgICAgICBsaXZlOiBcIiszMDBcIixcclxuICAgICAgICAgICAgY3JlYXRlOiBcIisyMDBcIixcclxuICAgICAgICAgICAgbG92ZTogXCIrMzAwXCIsXHJcbiAgICAgICAgICAgIGRyZWFtOiBcIisyMDBcIn1cclxuICAgIH1cclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnOyAvLyDQmNC80L/QvtGA0YLQuNGA0YPQtdC8IENTUy3RhNCw0LnQu1xyXG5cclxuaW1wb3J0IHtwcm9kdWN0c30gZnJvbSAnLi9jYXJkcy5qcyc7XHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgcmVuZGVyUHJvZHVjdHMgfSBmcm9tICcuL01vZGFsLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5naWZ0cy1uYXYtaXRlbS1idXR0b24nKTtcclxuICAgIGNvbnN0IGNhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lmdHMtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtb3ZlcmxheScpO1xyXG4gICAgY29uc3QgbW9kYWxEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWRldGFpbHMnKTtcclxuICAgIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2xvc2UnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0UHJvZHVjdHNCeU5hbWUocHJvZHVjdHMpIHtcclxuICAgICAgICByZXR1cm4gWy4uLnByb2R1Y3RzXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVBID0gYS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWVCID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RzKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ucHJvZHVjdHNdO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRQcm9kdWN0cyA9IHNvcnRQcm9kdWN0c0J5TmFtZShmaWx0ZXJlZFByb2R1Y3RzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFByb2R1Y3RzID0gc29ydFByb2R1Y3RzQnlOYW1lKGZpbHRlcmVkUHJvZHVjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJQcm9kdWN0cyhmaWx0ZXJlZFByb2R1Y3RzLGNhdGFsb2csIG9wZW5Nb2RhbCwgbW9kYWxEZXRhaWxzLCBtb2RhbE92ZXJsYXksIHByb2R1Y3RzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZU1lbnVCdXR0b24oY2xpY2tlZEJ1dHRvbikge1xyXG4gICAgICAgIG1lbnVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgY2xpY2tlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBtb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbChtb2RhbE92ZXJsYXkpKTtcclxuICAgIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxPdmVybGF5KSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWxPdmVybGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmaWx0ZXJQcm9kdWN0cygnYWxsJyk7XHJcblxyXG4gICAgbWVudUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmRhdGFzZXQuY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIGZpbHRlclByb2R1Y3RzKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgYWN0aXZhdGVNZW51QnV0dG9uKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJyZWRTdGFydCIsImdyYXlTdGFydCIsInByZXZlbnREZWZhdWx0IiwiZSIsImdlbmVyYXRlU3RhcnMiLCJ2YWx1ZSIsIm51bVN0YXJzIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwic3RhcnMiLCJpIiwiY29uY2F0Iiwib3Blbk1vZGFsIiwibW9kYWxEZXRhaWxzIiwibW9kYWxPdmVybGF5IiwicHJvZHVjdCIsImlubmVySFRNTCIsImltZyIsIm5hbWUiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiT2JqZWN0IiwiZW50cmllcyIsInN1cGVycG93ZXJzIiwibWFwIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJrZXkiLCJqb2luIiwic3R5bGUiLCJkaXNwbGF5IiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjbG9zZU1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlclByb2R1Y3RzIiwicHJvZHVjdHNUb1JlbmRlciIsImNhdGFsb2ciLCJwcm9kdWN0cyIsImZvckVhY2giLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJwcm9kdWN0SW5kZXgiLCJpbmRleE9mIiwiY2F0ZWdvcnlUZXh0IiwiY2F0ZWdvcnlTcGFuIiwiYXBwZW5kQ2hpbGQiLCJmb3JXb3JrIiwiZm9ySGVhbHRoIiwiZm9ySGFybW9ueSIsImlkIiwibGl2ZSIsImNyZWF0ZSIsImxvdmUiLCJkcmVhbSIsIm1lbnVCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsQ2xvc2VCdXR0b24iLCJzb3J0UHJvZHVjdHNCeU5hbWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzb3J0IiwiYSIsImIiLCJuYW1lQSIsInRvTG93ZXJDYXNlIiwibmFtZUIiLCJmaWx0ZXJQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJhY3RpdmF0ZU1lbnVCdXR0b24iLCJjbGlja2VkQnV0dG9uIiwiYnV0dG9uIiwicmVtb3ZlIiwiZXZlbnQiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9