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
  
  if (target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = target.dataset.source;
  const currentImg = galleryItems.find(({ original }) => original === originalUrl);
    const instance = basicLightbox.create(`
    <div class="modal">
        <img
      class="gallery__image"
      src="${originalUrl}"
      alt="${currentImg.description}"
    />
    </div>
`)

  instance.show();
  document.addEventListener('keydown', closeEscape);

  function closeEscape(event) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener('keydown', closeEscape);
  }

}
}


