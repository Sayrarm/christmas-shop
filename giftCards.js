import {products} from './cards.js';
import { openModal, closeModal, renderProducts } from './Modal.js';

document.addEventListener('DOMContentLoaded', function () {
    const menuButtons = document.querySelectorAll('.gifts-nav-item-button');
    const catalog = document.querySelector('.gifts-container');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalDetails = document.getElementById('modal-details');
    const modalCloseButton = document.getElementById('modal-close');

    function sortProductsByName(products) {
        return [...products].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
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
        let filteredProducts = [...products];
        if (category === 'all') {
            filteredProducts = sortProductsByName(filteredProducts);
        } else {
            filteredProducts = products.filter(product => product.category === category);
            filteredProducts = sortProductsByName(filteredProducts);
        }
        renderProducts(filteredProducts,catalog, openModal, modalDetails, modalOverlay, products);
    }

    function activateMenuButton(clickedButton) {
        menuButtons.forEach(button => button.classList.remove('active'));
        clickedButton.classList.add('active');
    }

    modalCloseButton.addEventListener('click', () => closeModal(modalOverlay));
    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });

    filterProducts('all');

    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;
            filterProducts(category);
            activateMenuButton(this);
        });
    });
});