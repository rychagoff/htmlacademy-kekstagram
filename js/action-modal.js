import { isEscapeKey, modalHiddenToggle, scrollLockToggle } from './util.js';
import { pictures, picturesList } from './gallery.js';

// Ищем модальное окно
const modalPicture = document.querySelector('.big-picture');
// Ищем изображение модального окна
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
// Ищем лайки изображения
const modalPictureLikes = modalPicture.querySelector('.likes-count');
// Ищем описание изображения
const modalPictureDescription = modalPicture.querySelector('.social__caption');
// Ищем кнопку закрытия
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');

// console.log(picturesList); // Вывод DOM-списка миниатюр

// Обработчик, который вызывает функцию закрытия модального окна клавишей ESC
const onDocumentKeydownEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

// Функция, которая проверяет клик на DOM-элементе миниатюры
// Если true — вызывается функция открытия молального окна
// Удаляется обработчик клика по секции pictures
const onModalPictureHandler = (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    openModal(currentPicture);
    // console.log(currentPicture); // Вывод DOM-элемент миниатюры по клику
    picturesList.removeEventListener('click', onModalPictureHandler);
  }
  // const pictureIndex = pictures.findIndex((item) => Number(item.id) === Number(currentPicture.dataset.index));
  // renderModal(pictures[pictureIndex]);
};

function openModal () {
  // console.log('Открыл окно'); // Вывод сообщения об открытии окна

  modalHiddenToggle(modalPicture);
  scrollLockToggle();

  document.addEventListener('keydown', onDocumentKeydownEscape);
}

function closeModal () {
  // console.log('Закрыл окно'); // Вывод сообщения о закрытии окна

  modalHiddenToggle(modalPicture);
  scrollLockToggle();

  document.removeEventListener('keydown', onDocumentKeydownEscape);
  picturesList.addEventListener('click', onModalPictureHandler);
}

// Добавляем обрабочик секции pictures
// При клике на секцию pictures вызываем функцию проверки клика
picturesList.addEventListener('click', onModalPictureHandler);

// Добавляем обрабочик закрытия модального окна по крестику
modalPictureClose.addEventListener('click', () => {
  closeModal();
});

// import { modalPicture, renderModal } from './render-modal.js';
// import { clearComments } from './render-modal.js';

// // Функция закрывает модальное окно, если нажата клавиша ESC
// const onDocumentKeydownEscape = (evt, pictures) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     modalHiddenToggle(modalPicture);
//     scrollLockToggle();
//     clearComments(pictures);
//     document.removeEventListener('keydown', onDocumentKeydownEscape);
//   }
// };

// const modalHandler = (modal) => {
//   modalHiddenToggle(modal);
//   scrollLockToggle();
//   // clearComments(modal);
//   document.addEventListener('keydown', onDocumentKeydownEscape);
// };

// const addModalHandler = (picturesList, pictures) => {
//   picturesList.addEventListener('click', (evt) => {
//     const currentPicture = evt.target.closest('.picture');
//     if (currentPicture) {
//       modalHandler(modalPicture);
//       console.log(modalPicture);
//       const pictureIndex = pictures.findIndex((item) => Number(item.id) === Number(currentPicture.dataset.index));
//       renderModal(pictures[pictureIndex]);
//       console.log(pictures[pictureIndex]);
//       // clearComments(pictures.comments);
//     }
//   });
//   // pictureList.addEventListener('keydown', (evt) => {
//   //   const currentPicture = evt.target.closest('.picture');
//   //   if (currentPicture && isEnterKey(evt)) {
//   //     modalHandler(currentPicture.dataset.index);
//   //   }
//   // });
// };

// modalPictureClose.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   modalHandler(modalPicture);
//   clearComments(modalPicture);
//   document.removeEventListener('keydown', onDocumentKeydownEscape);
// });

// export { addModalHandler };
