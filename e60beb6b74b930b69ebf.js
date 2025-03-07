function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import './style.css'; // Импортируем CSS-файл

import { products } from './cards.js';
import { openModal, closeModal, renderProducts } from './Modal.js';
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
    var filteredProducts = _toConsumableArray(products);
    if (category === 'all') {
      filteredProducts = sortProductsByName(filteredProducts);
    } else {
      filteredProducts = products.filter(function (product) {
        return product.category === category;
      });
      filteredProducts = sortProductsByName(filteredProducts);
    }
    renderProducts(filteredProducts, catalog, openModal, modalDetails, modalOverlay, products);
  }
  function activateMenuButton(clickedButton) {
    menuButtons.forEach(function (button) {
      return button.classList.remove('active');
    });
    clickedButton.classList.add('active');
  }
  modalCloseButton.addEventListener('click', function () {
    return closeModal(modalOverlay);
  });
  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      closeModal(modalOverlay);
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