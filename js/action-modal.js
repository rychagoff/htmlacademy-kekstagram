/* ПОМЕТКИ */
// блокировку и разблокировку скролла вынести в отдельную функцию
/* */

import { pictures } from './photo.js';
import { isEscapeKey, isEnterKey } from './util.js';
import { modalPicture, renderModal } from './render-modal.js';

// const modalPicture = document.querySelector('.big-picture'); // Ищем модальное окно
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel'); // Ищем кнопку закрытия
const miniatures = document.querySelectorAll('.picture'); // Ищем миниатюры

const modalOpen = function() {
  modalPicture.classList.remove('hidden');
};

const modalClose = function() {
  modalPicture.classList.add('hidden');
};

const scrollLock = function() {
  document.body.classList.toggle('modal-open');
};

// Функция закрывает окно, если нажата клавиша ESC
const onDocumentKeydownEscape = function(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalClose();
    // console.log('Ха! Работает isEscapeKey!');
    document.removeEventListener('keydown', onDocumentKeydownEscape);
  }
};

// Функция добавляет обработчик нажатия клавиши ESC
const miniatureKeydownEscapeOn = function() {
  document.addEventListener('keydown', onDocumentKeydownEscape);
};
// Функция удаляет обработчик нажатия клавиши ESC
const miniatureKeydownEscapeOff = function() {
  document.removeEventListener('keydown', onDocumentKeydownEscape);
};

// Функция добавления обработчиков открытия модального окна по ESC и ENTER для каждой миниатюры
const miniatureOpenHandler = function(miniature, picture) {
  miniature.addEventListener('click', () => {
    renderModal(picture);
    modalOpen();
    scrollLock();
    miniatureKeydownEscapeOn();
    // console.log(picture);
  });
  miniature.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      renderModal(picture);
      modalOpen();
      scrollLock();
      miniatureKeydownEscapeOn();
      // console.log('Ха! Работает isEnterKey!');
    }
  });
};

miniatures.forEach((miniature, index) => {
  miniatureOpenHandler(miniature, pictures[index]);
});

modalPictureClose.addEventListener('click', () => {
  modalClose();
  scrollLock();
  miniatureKeydownEscapeOff();
});

modalPictureClose.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    modalClose();
    scrollLock();
    miniatureKeydownEscapeOff();
    // console.log('Ха! Работает isEnterKey!');
  }
});
