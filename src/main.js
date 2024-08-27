import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchValue = searchForm.elements.searchValue.value.trim();

  if (searchValue === '') {
    iziToast.warning({
      position: 'topRight',
      title: 'Caution',
      message: 'Please enter a search query',
    });
    return;
  }
  getImages(searchValue)
    .then(({ hits }) => {
      renderImages(hits);
    })
    .catch();
}
