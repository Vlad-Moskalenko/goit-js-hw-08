// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryWrapper = document.querySelector('.gallery')

function showGallery() {
  galleryWrapper.innerHTML = createGallery()
}

//як зробити автозапуск функції, при події load бібліотека праює некоректно
showGallery()

function createGallery(){
  return (galleryItems.map(({preview, original, description}) => {
    return (`<a class='gallery__item' href=${original}><img class='gallery__image' src=${preview} alt=${description}/></a>`)
  }).join('')
  )
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
 });
