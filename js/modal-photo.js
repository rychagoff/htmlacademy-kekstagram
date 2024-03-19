import { getPhotos } from './data.js';

const modalPicture = document.querySelector('.big-picture');
const miniaturePicture = document.querySelector('.picture');

miniaturePicture.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalPicture.classList.remove('hidden');
});
