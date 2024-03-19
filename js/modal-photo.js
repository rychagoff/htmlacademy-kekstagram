// import { getPhotos } from './data.js';
import { pictures } from './photo.js';

const modalPicture = document.querySelector('.big-picture'); // Ищем модальное окно
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img'); // Ищем изображение
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel'); // Ищем кнопку закрытия
const miniaturePicture = document.querySelector('.picture');

const modalOpen = function() {
  modalPicture.classList.remove('hidden');
};

const modalClose = function() {
  modalPicture.classList.add('hidden');
};

miniaturePicture.addEventListener('click', () => {
  modalOpen();
});

modalPictureClose.addEventListener('click', () => {
  modalClose();
});
