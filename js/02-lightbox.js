import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");

const markupGallery = galleryItems.map(({ preview, description, original }) => `
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>`).join('');

container.insertAdjacentHTML('beforeend', markupGallery);
console.log(container);

document.addEventListener('DOMContentLoaded', function () {
      const gallery = new SimpleLightbox('.gallery');
    });

