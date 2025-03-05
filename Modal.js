function preventDefault(e) {
    e.preventDefault();
}

function generateStars(value) {
    const numStars = parseInt(value.replace('+', '')) / 100;
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < numStars) {
            stars += '<img class="red-star" src="images/mini-snowflake.svg" alt="red-snowflake"></img>';
        } else {
            stars += '<img class="gray-star" src="images/mini-snowflake-disable.svg" alt="gray-snowflake"></img>';
        }
    }
    return stars;
}

export function openModal(modalDetails, modalOverlay, product) {
    modalDetails.innerHTML = `
        <div class="modal-product-info">
            <img class="gift" src="${product.img}" width="310" height="230" alt="${product.name}">
            <div class="gift-card-text-modal">
                <div class="gift-category"><span class="category-text ${product.category}">${product.category.replace(/-/g, ' ')}</span></div>
                <div class="gift-card-item"><b></b> ${product.name}</div>
                <div class="modal-product-description"><b></b> ${product.description}</div>
                <div class="modal-product-superpowers">
                <b class="modal-product-superpowers-description">Adds superpowers to:</b>
                <ul class="modal-product-superpowers-items">
                ${Object.entries(product.superpowers).map(([key, value]) => `<li class="superpowers-item"><span class="superpowers-item-key">${key}</span> <span class="superpowers-item-value">${value} ${generateStars(value)}</span></li>`).join('')}
                </ul>
                </div>
             </div>
        </div>
        `;

    modalOverlay.style.display = 'flex';
    document.body.addEventListener('wheel', preventDefault, { passive: false });
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}

export function closeModal(modalOverlay) {
    modalOverlay.style.display = 'none';
    document.body.removeEventListener('wheel', preventDefault);
    document.body.removeEventListener('touchmove', preventDefault);
}

export function renderProducts(productsToRender, catalog, openModal, modalDetails, modalOverlay, products) {
    catalog.innerHTML = '';
    productsToRender.forEach(product => {
        const card = document.createElement('button');
        card.classList.add('button-card');
        card.dataset.category = product.category;
        card.dataset.productIndex = products.indexOf(product);

        let categoryText = product.category.replace(/-/g, ' ');
        let categorySpan = `<span class="category-text ${product.category}">${categoryText}</span>`;

        card.innerHTML = `
                <img class="gift" src="${product.img}" width="310" height="230" alt="gift-picture">
                <div class="gift-card-text">
                    <div class="gift-category">${categorySpan}</div>
                    <div class="gift-card-item">${product.name}</div>
                </div>
    `;
        catalog.appendChild(card);
        card.addEventListener('click', function () {
            const productIndex = parseInt(this.dataset.productIndex);
            openModal(modalDetails, modalOverlay,products[productIndex]);
        });
    });
}