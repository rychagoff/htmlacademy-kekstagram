// import { isEscapeKey, isEnterKey } from './util.js';
// // import { renderModal } from './render-modal.js';

// // Ищем модальное окно
// const modalPicture = document.querySelector('.big-picture');
// // Ищем кнопку закрытия
// const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');
// // const miniatures = document.querySelectorAll('.picture'); // Ищем миниатюры

// const modalOpen = function() {
//   modalPicture.classList.remove('hidden');
//   console.log('opened');
// };

// const modalClose = function() {
//   modalPicture.classList.add('hidden');
//   console.log('closed');
// };

// const scrollLock = function() {
//   document.body.classList.toggle('modal-open');
// };

// // Функция закрывает модальное окно, если нажата клавиша ESC
// const onDocumentKeydownEscape = function(evt) {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     modalClose();
//     document.removeEventListener('keydown', onDocumentKeydownEscape);
//   }
// };

// const modalOpenHandler = function(picture) {
//   picture.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     scrollLock();
//     modalOpen();
//     document.addEventListener('keydown', onDocumentKeydownEscape);
//   });
//   picture.addEventListener('keydown', (evt) => {
//     if (isEnterKey(evt)) {
//       scrollLock();
//       modalOpen();
//       document.addEventListener('keydown', onDocumentKeydownEscape);
//     }
//   });
// };

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
