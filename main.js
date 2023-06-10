const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menuMobile = document.querySelector('.menu-mobile');
const cart = document.querySelector('.cart');
const closeModalCart = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-cart');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const addToCart = document.querySelector('.add-to-cart');
const quantity = document.getElementById('quantity');
const quantityItem = document.querySelector('.quantity-item');
const emptyDiv = document.querySelector('.detail');
const price = document.querySelector('.price');
const prices = document.querySelector('.prices');
const productDiv = document.querySelector('.cart-product');
const deleteBtn = document.querySelector('.delete');
const preview = document.querySelectorAll('.preview');
const image = document.querySelector('.image-main');
const imagesBox = document.querySelectorAll('.img-box');
const imageMainBox = document.querySelector('.image-main-box'); 
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
let totalQuantity = 1;
let totalPrice = 0;
const product = {
    name: 'Fall Limited Edition Sneakers',
    price: '125',
    quantity: 0,
    buy: false
}

/* Handle Menu Mobile */
btnOpen.addEventListener('click', () => {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('block');
});

btnClose.addEventListener('click', () => {
    menuMobile.classList.remove('block');
    menuMobile.classList.add('hidden');
});

/* Handle Modal Cart */
cart.addEventListener('click', () => {
    modal.classList.add('block');
    modal.classList.remove('hidden');
    console.log(product);
    if (product.quantity == 0) {
        emptyDiv.classList.add('block');
        emptyDiv.classList.remove('hidden');
    } else {
        emptyDiv.classList.remove('block');
        emptyDiv.classList.add('hidden');
        productDiv.classList.add('block');
        productDiv.classList.remove('hidden');
    }
});
/* cart.addEventListener('mouseout', () => {
    modal.classList.add('hidden');
    modal.classList.remove('block');
}); */

closeModalCart.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('block');
});

/* Handle Slide */
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('opacity-100'));
    slides[index].classList.add('opacity-100');
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
};

nextBtn.addEventListener('click', function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

previousBtn.addEventListener('click', function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

setInterval(nextSlide, 3000);

plusBtn.addEventListener('click', () => {
    quantity.value++;
    totalQuantity = quantity.value;
});

minusBtn.addEventListener('click', (event) => {
    if (quantity.value == 1) {
        event.preventDefault();
    } else {
        quantity.value--;
        totalQuantity = quantity.value;
    }
});


/* Add to cart event */
addToCart.addEventListener('click', () => {
    product.quantity = totalQuantity;
    product.buy = true;
    quantityItem.textContent = product.quantity;
    quantityItem.classList.add('block');
    quantityItem.classList.remove('hidden');
    totalPrice = 125 * product.quantity;
    price.textContent = `$125.00 x ${product.quantity}`;
    prices.textContent = `$${totalPrice}.00`;
    quantity.value = 1;
    product.quantity = product.quantity;
    product.buy = true;
    console.log(product);
});

/* Delete item */
deleteBtn.addEventListener('click', () => {
    product.quantity = 0;
    totalPrice = 0;
    quantityItem.classList.remove('block');
    quantityItem.classList.add('hidden');

    emptyDiv.classList.add('block');
    emptyDiv.classList.remove('hidden');

    productDiv.classList.add('hidden');
    productDiv.classList.remove('block');

});

/* Preview Picture */
const productImages = [
    './ecommerce-product-page-main/images/image-product-1.jpg',
    './ecommerce-product-page-main/images/image-product-2.jpg',
    './ecommerce-product-page-main/images/image-product-3.jpg',
    './ecommerce-product-page-main/images/image-product-4.jpg',
]
preview.forEach((pr)=> {
    pr.addEventListener('click', (e) => {
        let currentIndex = 0;
        let idImage = e.target.id;
        let preview = e.target;
        if(idImage == 'pr-1') {currentIndex = 0}
        else if(idImage == 'pr-2') {currentIndex = 1}
        else if(idImage == 'pr-3') {currentIndex = 2}
        else if(idImage == 'pr-4') {currentIndex = 3}
        image.src = productImages[currentIndex];
        removeCurrentPreviewImage();
        preview.classList.toggle('actived');
    })
});

function removeCurrentPreviewImage(){
    preview.forEach((p) => {
        p.classList.remove('actived');
        
    })
};

/* Image lightbox */
imagesBox.forEach((p)  => {
    p.addEventListener('click', (e) => {
        let currentIndex = 0;
        let id = e.target.id;
        if(id == 'box-1'){currentIndex = 0}
        else if(id == 'box-2'){currentIndex = 1}
        else if(id == 'box-3'){currentIndex = 2}
        else if(id == 'box-4'){currentIndex = 3}
        imageMainBox.src = productImages[currentIndex];
        removeCurrentPreviewImageBox();
        p.classList.toggle('actived')
    })
})

function removeCurrentPreviewImageBox(){
    imagesBox.forEach((p) => {
        p.classList.remove('actived');
        
    })
};

function handleCloseBox(){
    overlay.classList.add('hidden');
    overlay.classList.remove('block');
}

function handleShowModal(){
    overlay.classList.add('block');
    overlay.classList.remove('hidden');

}