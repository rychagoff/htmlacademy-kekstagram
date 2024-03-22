// import { pictures } from './photo.js';
// import { SHOWN_COMMENTS } from './data.js';

// Ищем модальное окно
const modalPicture = document.querySelector('.big-picture');
// Ищем изображение модального окна
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
// Ищем лайки изображения
const modalPictureLikes = modalPicture.querySelector('.likes-count');
// Ищем описание изображения
const modalPictureDescription = modalPicture.querySelector('.social__caption');
// Ищем кол-во показываемых и всего комментариев
// const modalPictureCommentShown = modalPicture.querySelector('.social__comment-shown-count');
const modalPictureCommentTotal = modalPicture.querySelector('.social__comment-total-count');
// Ищем блок комментариев
const modalPictureComments = modalPicture.querySelector('.social__comments');
// Ищем шаблон комментария
const modalPictureCommentTemplate = modalPictureComments.querySelector('.social__comment');

const commentsFragment = document.createDocumentFragment();

const renderComments = (picture) => {
  modalPictureComments.innerHTML = '';
  picture.comments.forEach((comment) => {
    const commentItem = modalPictureCommentTemplate.cloneNode(true);
    const commentAvatar = commentItem.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentItem.querySelector('.social__text').textContent = comment.message;
    commentsFragment.append(commentItem);
  });
  modalPictureComments.append(commentsFragment);
};

const renderModal = (picture) => {
  modalPictureImg.src = picture.url;
  modalPictureLikes.textContent = picture.likes;
  modalPictureDescription.textContent = picture.description;
  // modalPictureCommentShown.textContent = SHOWN_COMMENTS;
  modalPictureCommentTotal.textContent = picture.comments.length;
  renderComments(picture);
};

export { modalPicture, renderModal };
