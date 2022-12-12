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
  const imageRef = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${imageRef}">`,
    {
      OnClose: () => {
        window.removeEventListener('keydown', closeMod)
      }
  });
  instance.show();
  window.addEventListener('keydown',closeMod)
    
  function closeMod(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  };
}
