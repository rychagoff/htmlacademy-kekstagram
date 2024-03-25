import { isEscapeKey, isEnterKey } from './util.js';
// import { renderModal } from './render-modal.js';

// Ищем модальное окно
const modalPicture = document.querySelector('.big-picture');
// // Ищем кнопку закрытия
// const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');
// // const miniatures = document.querySelectorAll('.picture'); // Ищем миниатюры

const modalHiddenToggle = function() {
  modalPicture.classList.toggle('hidden');
  console.log('хоп, модалка');
};

const scrollLockToggle = function() {
  document.body.classList.toggle('modal-open');
};

// Функция закрывает модальное окно, если нажата клавиша ESC
const onDocumentKeydownEscape = function(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalHiddenToggle();
    scrollLockToggle();
    document.removeEventListener('keydown', onDocumentKeydownEscape);
  }
};

const modalHandler = function(evt) {
  modalHiddenToggle(evt);
  scrollLockToggle();
  document.addEventListener('keydown', onDocumentKeydownEscape);
};

const addHandler = function(pictureList) {
  pictureList.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      modalHandler(currentPicture.dataset.index);
    }
  });
  pictureList.addEventListener('keydown', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture && isEnterKey(evt)) {
      modalHandler(currentPicture.dataset.index);
    }
  });
};

// modalPictureClose.addEventListener('click', () => {
//   scrollLock();
//   modalClose();
//   document.addEventListener('keydown', onDocumentKeydownEscape);
// });

// modalPictureClose.addEventListener('keydown', (evt) => {
//   if (isEnterKey(evt)) {
//     scrollLock();
//     modalClose();
//     document.addEventListener('keydown', onDocumentKeydownEscape);
//   }
// });

// export { modalOpenHandler };
export { addHandler };
