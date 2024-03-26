import { isEscapeKey, modalHiddenToggle, scrollLockToggle } from './util.js';
import { modalPicture, renderModal } from './render-modal.js';

// Ищем кнопку закрытия
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');

// Функция закрывает модальное окно, если нажата клавиша ESC
const onDocumentKeydownEscape = function(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalHiddenToggle();
    scrollLockToggle();
    document.removeEventListener('keydown', onDocumentKeydownEscape);
  }
};

const modalHandler = function(modal) {
  modalHiddenToggle(modal);
  scrollLockToggle();
  document.addEventListener('keydown', onDocumentKeydownEscape);
};

const addModalHandler = function(pictureList, pictures) {
  pictureList.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      modalHandler(modalPicture);
      // console.log(modalHandler(modalPicture));
      const pictureIndex = pictures.findIndex((item) => Number(item.id) === Number(currentPicture.dataset.index));
      renderModal(pictures[pictureIndex]);
    }
  });
  // pictureList.addEventListener('keydown', (evt) => {
  //   const currentPicture = evt.target.closest('.picture');
  //   if (currentPicture && isEnterKey(evt)) {
  //     modalHandler(currentPicture.dataset.index);
  //   }
  // });
};

modalPictureClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalHandler(modalPicture);
  document.removeEventListener('keydown', onDocumentKeydownEscape);
});

export { addModalHandler };
