import { isEscapeKey, modalHiddenToggle, scrollLockToggle } from './util.js';
import { pictures, picturesList } from './gallery.js';
// import { renderComments, commentsLoaderHandler, renderCommentsLoader, clearComments } from './comments.js';
// import { renderComments, commentsLoaderHandler } from './comments.js';
// import { clearComments } from './comments.js';

// Ищем модальное окно
const modalPicture = document.querySelector('.big-picture');
// Ищем изображение модального окна
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
// Ищем лайки изображения
const modalPictureLikes = modalPicture.querySelector('.likes-count');
// Ищем описание изображения
const modalPictureDescription = modalPicture.querySelector('.social__caption');

// Ищем блок со списком комментариев
const modalPictureComments = modalPicture.querySelector('.social__comments');
// Ищем шаблон комментария
const modalPictureCommentTemplate = modalPictureComments.querySelector('.social__comment');
// Ищем кнопку загрузки комментариев
const modalPictureCommentsLoader = modalPicture.querySelector('.social__comments-loader');

// Ищем кнопку закрытия
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');

// console.log(picturesList); // Вывод DOM-списка миниатюр
let picture = {};
// console.log(picture);

// const onCommentsHandler = () => {
//   // evt.preventDefault();
//   renderCommentsLoader(picture.comments);
//   console.log(picture.comments);
// };

const renderComments = (comments) => {
//   // console.log(currentPicture); // Вывод объекта миниатюры
//   // const comments = picture.comments;
  console.log(comments); // Вывод массива объектов-комментариев
  // console.log(picture); // Вывод объекта-миниатюры

  modalPictureComments.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();

  comments.forEach(({avatar, name, message}) => {
    const comment = modalPictureCommentTemplate.cloneNode(true);
    const commentAvatar = comment.querySelector('.social__picture');
    const commentText = comment.querySelector('.social__text');

    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentText.textContent = message;

    commentsFragment.append(comment);
  });
  modalPictureComments.append(commentsFragment);
};

const onCommentsLoaderHandler = (evt) => {
  evt.preventDefault();
  const comments = picture.comments;
  console.log(comments);
  renderComments(comments);
};

const renderModal = (currentPicture) => {
  // В массиве объектов миниаютюр pictures ищем элемент item со значением ключа id
  // Значение ключа id должно быть таким же, как и значение атрибута data-index DOM-элемента currentPicture
  const picturesIndex = pictures.findIndex((item) => Number(item.id) === Number(currentPicture.dataset.index));
  picture = pictures[picturesIndex];

  // console.log(picture);
  // console.log(picture.comments);

  modalPictureImg.src = picture.url;
  modalPictureLikes.textContent = picture.likes;
  modalPictureDescription.textContent = picture.description;

  renderComments(picture.comments);
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
    // console.log(currentPicture); // Вывод DOM-элемент миниатюры по клику

    openModal(currentPicture);

    picturesList.removeEventListener('click', onModalPictureHandler);
  }
};

function openModal (currentPicture) {
  // console.log('Открыл окно'); // Вывод сообщения об открытии окна

  renderModal(currentPicture);

  modalHiddenToggle(modalPicture);
  scrollLockToggle();

  // modalPictureCommentsLoader.addEventListener('click', onCommentsHandler(picture.comments));
  document.addEventListener('keydown', onDocumentKeydownEscape);
}

function closeModal () {
  // console.log('Закрыл окно'); // Вывод сообщения о закрытии окна

  // clearComments();
  modalHiddenToggle(modalPicture);
  scrollLockToggle();

  document.removeEventListener('keydown', onDocumentKeydownEscape);
  picturesList.addEventListener('click', onModalPictureHandler);
}

// Добавляем обрабочик секции pictures
// При клике на секцию pictures вызываем функцию проверки клика
picturesList.addEventListener('click', onModalPictureHandler);

modalPictureCommentsLoader.addEventListener('click', onCommentsLoaderHandler);

// Добавляем обрабочик закрытия модального окна по крестику
modalPictureClose.addEventListener('click', () => {
  closeModal();
});
