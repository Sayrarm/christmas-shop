import './style.css'; // Импортируем CSS-файл

//Burger-menu

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-menu-button');
    const menuOverlay = document.getElementById('burger-menu');
    let menuOpen = false; // Отслеживаем состояние меню

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

const backToTopBtn = document.getElementById('back-to-top-button');

window.addEventListener('scroll', function() {
    // Проверка прокрутки
    if (document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }

    // Убираем кнопку в самом верху
    if (document.documentElement.scrollTop === 0)
        backToTopBtn.style.display = 'none';

});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//Slider

document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-row');
    const slides = document.querySelectorAll('.row-pic, .row-text');
    const prevButton = document.querySelector('.slider-button-1');
    const nextButton = document.querySelector('.slider-button-2');


    let currentIndex = 0; // Индекс текущего активного слайда (первого видимого)
    const slidesToScroll = 1; // Количество слайдов для прокрутки
    let slideWidth = 0; // Ширина одного слайда
    let sliderOffset = 0; // Текущее смещение слайдера

    // Функция для сдвига слайдера
    function moveSlider(shouldReset = false) {
        slideWidth = slides[4].offsetWidth;
        if (shouldReset) {
            sliderOffset = 0; // Сбрасываем смещение при сбросе
        } else {
            sliderOffset = currentIndex * slideWidth;
        }
        sliderWrapper.style.transform = `translateX(-${sliderOffset}px)`;
        updateButtons();
    }


    // Функция для обновления состояния кнопок
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex + slidesToScroll >= slides.length;
    }


    // Обработчик для кнопки "Вперед"
    nextButton.addEventListener('click', () => {
        if (currentIndex + slidesToScroll < slides.length) {
            currentIndex += slidesToScroll;
            moveSlider();
        }
    });

    // Обработчик для кнопки "Назад"
    prevButton.addEventListener('click', () => {
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
    const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);
    const now = new Date();
    const timeLeft = newYearDate - now;

    if (timeLeft <= 0) {
        document.getElementById('days').textContent = 'С';
        document.getElementById('hours').textContent = 'Н';
        document.getElementById('minutes').textContent = 'О';
        document.getElementById('seconds').textContent = 'М';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Импортируем данные о продуктах
import { products } from './cards.js';
import { openModal, closeModal, renderProducts } from './Modal.js';

// Код для отображения случайных карточек
document.addEventListener('DOMContentLoaded', function () {
    const catalog = document.querySelector('.best-gifts-cards');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalDetails = document.getElementById('modal-details');
    const modalCloseButton = document.getElementById('modal-close');

    const shuffledProducts = shuffleArray([...products]);
    const randomProducts = shuffledProducts.slice(0, 4);
    renderProducts(randomProducts,catalog, openModal, modalDetails, modalOverlay, products);

    modalCloseButton.addEventListener('click', ()=> closeModal(modalOverlay));
    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });

});