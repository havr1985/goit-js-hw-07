import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery");

const markupGallery = galleryItems.map(({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");

container.insertAdjacentHTML("beforeend", markupGallery);

container.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const { target } = event;

    const originalUrl = target.dataset.source;
    console.log(originalUrl);
}
