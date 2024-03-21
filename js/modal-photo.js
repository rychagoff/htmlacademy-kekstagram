/* ПОМЕТКИ */
// блокировку и разблокировку скролла вынести в отдельную функцию
/* */

// import { pictures } from './photo.js';
import { isEscapeKey, isEnterKey } from './util.js';

const modalPicture = document.querySelector('.big-picture'); // Ищем модальное окно

// Ищем его изображение и кнопку закрытия
// const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');

const miniatures = document.querySelectorAll('.picture'); // Ищем миниатюры

// const arrayUrl = pictures.map((item) => item.url); // Получаем массив путей изображений
// console.log(arrayUrl);

const modalOpen = function() {
  modalPicture.classList.remove('hidden');
};

const modalClose = function() {
  modalPicture.classList.add('hidden');
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

// // Пишем обработчик для каждой миниатюры
// // В параметрах миниатюра и элемент массива путей
// const miniatureClickHandler = function(miniature, arayUrlItem) {
//   miniature.addEventListener('click', () => {
//     modalOpen();
//     modalPictureImg.src = arayUrlItem; // Меняем путь большого изображения
//   });
// };

// // Перебор массива миниатюр
// // В параметрах миниатюра и её индекс
// miniatures.forEach((miniature, index) => {
//   // Индекс миниатюры передаем в параметр обработчику (как индекс пути),
//   // чтобы связать каждую миниатюру с каждым её путем
//   miniatureClickHandler(miniature, arrayUrl[index]);
// });

// Функция добавляет обработчик нажатия клавиши ESC
const miniatureKeydownEscapeOn = function() {
  document.addEventListener('keydown', onDocumentKeydownEscape);
};
// Функция удаляет обработчик нажатия клавиши ESC
const miniatureKeydownEscapeOff = function() {
  document.removeEventListener('keydown', onDocumentKeydownEscape);
};

// Функция добавления обработчиков открытия модального окна по ESC и ENTER для каждой миниатюры
const miniatureOpenHandler = function(miniature) {
  miniature.addEventListener('click', () => {
    modalOpen();
    miniatureKeydownEscapeOn();
  });
  miniature.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      modalOpen();
      miniatureKeydownEscapeOn();
      // console.log('Ха! Работает isEnterKey!');
    }
  });
};

miniatures.forEach((miniature) => {
  miniatureOpenHandler(miniature);
});

modalPictureClose.addEventListener('click', () => {
  modalClose();
  miniatureKeydownEscapeOff();
});

modalPictureClose.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    modalClose();
    miniatureKeydownEscapeOff();
    // console.log('Ха! Работает isEnterKey!');
  }
});
