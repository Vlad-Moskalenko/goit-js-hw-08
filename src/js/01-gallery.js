// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryWrapper = document.querySelector('.gallery')

function showGallery() {
  galleryWrapper.innerHTML = createGallery()
}

showGallery()

function createGallery(){
  return (galleryItems.reduce((acc, {preview, original, description}) => {
    return acc +=
    `<a class='gallery__item' href=${original}>
      <img
        class='gallery__image'
        src=${preview}
        alt=${description}/>
    </a>`
  }, '')
  )
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
 });
