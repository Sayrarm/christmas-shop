function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import './style.css'; // Импортируем CSS-файл

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
import { products } from './cards.js';
import { openModal, closeModal, renderProducts } from './Modal.js';

// Код для отображения случайных карточек
document.addEventListener('DOMContentLoaded', function () {
  var catalog = document.querySelector('.best-gifts-cards');
  var modalOverlay = document.getElementById('modal-overlay');
  var modalDetails = document.getElementById('modal-details');
  var modalCloseButton = document.getElementById('modal-close');
  var shuffledProducts = shuffleArray(_toConsumableArray(products));
  var randomProducts = shuffledProducts.slice(0, 4);
  renderProducts(randomProducts, catalog, openModal, modalDetails, modalOverlay, products);
  modalCloseButton.addEventListener('click', function () {
    return closeModal(modalOverlay);
  });
  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      closeModal(modalOverlay);
    }
  });
});