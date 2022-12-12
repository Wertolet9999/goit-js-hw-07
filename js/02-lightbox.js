import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = makeGallery(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryEl.addEventListener('click', selectImage);

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
              </a>
            </div>`;
    }).join('');
}
function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
      return
  }
    }

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionsData: 'alt',
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionDelay: 250,
});
