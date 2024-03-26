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
const modalPictureCommentCount = modalPicture.querySelector('.social__comment-count');
// const modalPictureCommentShown = modalPictureCommentCount.querySelector('.social__comment-shown-count');
// const modalPictureCommentTotal = modalPictureCommentCount.querySelector('.social__comment-total-count');
// Ищем блок комментариев
const modalPictureComments = modalPicture.querySelector('.social__comments');
// Ищем шаблон комментария
const modalPictureCommentTemplate = modalPictureComments.querySelector('.social__comment');
// Ищем кнопку загрузки комментариев
const modalPictureCommentsLoader = document.querySelector('.social__comments-loader');

const renderComments = (picture) => {
  modalPictureComments.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();

  modalPictureCommentCount.classList.add('hidden');
  modalPictureCommentsLoader.classList.add('hidden');

  // const commentsShown = picture.comments.slice(0, SHOWN_COMMENTS);
  // // console.log(commentsShown);

  // if (commentsShown.length <= SHOWN_COMMENTS) {
  //   modalPictureCommentShown.textContent = commentsShown.length;
  //   console.log('Мало комментов');
  //   modalPictureCommentsLoader.classList.add('visually-hidden');
  // } else {
  //   modalPictureCommentShown.textContent = SHOWN_COMMENTS;
  //   const renderCommentsMore = function() {
  //     let arr = SHOWN_COMMENTS;
  //     if (arr < picture.comments.length) {

  //     }
  //   };
  // }
  // modalPictureCommentTotal.textContent = picture.comments.length;

  picture.comments.forEach((comment) => {
    const commentItem = modalPictureCommentTemplate.cloneNode(true);
    const commentAvatar = commentItem.querySelector('.social__picture');
    const commentText = commentItem.querySelector('.social__text');

    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentText.textContent = comment.message;

    commentsFragment.append(commentItem);
  });
  modalPictureComments.append(commentsFragment);
};

const renderModal = (picture) => {
  modalPictureImg.src = picture.url;
  modalPictureLikes.textContent = picture.likes;
  modalPictureDescription.textContent = picture.description;

  renderComments(picture);
};

export { modalPicture, renderModal };
