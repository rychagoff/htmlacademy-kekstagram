import { isEscapeKey, modalHiddenToggle, scrollLockToggle } from './util.js';
import { pictures, picturesList } from './gallery.js';
// import { renderComments } from './comments.js';

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

const renderModal = (currentPicture) => {
  // В массиве объектов миниаютюр pictures ищем элемент item со значением ключа id
  // Значение ключа id должно быть таким же, как и значение атрибута data-index DOM-элемента currentPicture
  const picturesIndex = pictures.findIndex((item) => Number(item.id) === Number(currentPicture.dataset.index));
  const picture = pictures[picturesIndex];

  modalPictureImg.src = picture.url;
  modalPictureLikes.textContent = picture.likes;
  modalPictureDescription.textContent = picture.description;

  // renderComments(currentPicture);
};

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
    renderModal(currentPicture);
    openModal(currentPicture);
    // console.log(currentPicture); // Вывод DOM-элемент миниатюры по клику
    picturesList.removeEventListener('click', onModalPictureHandler);
  }
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
