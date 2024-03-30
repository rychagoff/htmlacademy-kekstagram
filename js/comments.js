// import { START_COMMENTS, COMMENTS_STEP } from './data.js';
// import { onCommentsHandler } from './action-modal.js';

// Ищем модальное окно
const modalPicture = document.querySelector('.big-picture');
// Ищем блок с счетчиком и кол-вом комментариев
const modalPictureCommentCount = modalPicture.querySelector('.social__comment-count');
const modalPictureCommentShown = modalPictureCommentCount.querySelector('.social__comment-shown-count');
const modalPictureCommentTotal = modalPictureCommentCount.querySelector('.social__comment-total-count');
// Ищем блок со списком комментариев
const modalPictureComments = modalPicture.querySelector('.social__comments');
// Ищем шаблон комментария
const modalPictureCommentTemplate = modalPictureComments.querySelector('.social__comment');
// Ищем кнопку загрузки комментариев
const modalPictureCommentsLoader = modalPicture.querySelector('.social__comments-loader');
// // Ищем кнопку закрытия
// const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');

// let startComment = START_COMMENTS;
// const commentItem = comments.find((item) => Number(item.id) === Number(currentPicture.dataset.index));

modalPictureComments.innerHTML = '';

// const renderComments = (commentsShown) => {
// //   // console.log(picture); // Вывод объекта миниатюры
// //   // const comments = picture.comments;
//   console.log(commentsShown); // Вывод массива объектов-комментариев

//   const commentsFragment = document.createDocumentFragment();
//   // const commentsShown = comments.slice(startComment, startComment + COMMENTS_STEP);
//   // const commentsShownLength = commentsShown.length + startComment;

//   // modalPictureCommentShown.textContent = commentsShownLength;
//   // modalPictureCommentTotal.textContent = comments.length;

//   // const pictureComments = comments.find((item) => Number(item.id) === Number(currentPicture.dataset.index));

//   // if (commentsShownLength >= comments.length) {
//   //   modalPictureCommentShown.textContent = comments.length;
//   //   modalPictureCommentsLoader.classList.add('hidden');
//   // }
//   commentsShown.forEach(({avatar, name, message}) => {
//     const comment = modalPictureCommentTemplate.cloneNode(true);
//     const commentAvatar = comment.querySelector('.social__picture');
//     const commentText = comment.querySelector('.social__text');

//     commentAvatar.src = avatar;
//     commentAvatar.alt = name;
//     commentText.textContent = message;

//     commentsFragment.append(comment);
//   });
//   modalPictureComments.append(commentsFragment);

// //   // modalPictureCommentsLoader.addEventListener('click', renderCommentsLoader, {once: true});
// };

// const renderCommentsLoader = (comments) => {
//   console.log(comments);
//   if (startComment >= comments.length) {
//     startComment = comments.length;
//     console.log(comments);
//     modalPictureCommentsLoader.classList.add('hidden');

//     modalPictureCommentShown.textContent = startComment;
//     modalPictureCommentTotal.textContent = comments.length;

//     modalPictureCommentsLoader.removeEventListener('click', onCommentsHandler(comments));

//     // return renderComments(comments);
//   }
//   startComment = 0;
//   // const commentsFragment = document.createDocumentFragment();
//   const commentsShown = comments.slice(startComment, startComment + COMMENTS_STEP);
//   const commentsShownLength = commentsShown.length + startComment;

//   modalPictureCommentShown.textContent = commentsShownLength;
//   modalPictureCommentTotal.textContent = comments.length;

//   // if (commentsShownLength >= comments.length) {
//   //   modalPictureCommentShown.textContent = comments.length;
//   //   modalPictureCommentsLoader.classList.add('hidden');
//   // }

//   renderComments(commentsShown);
//   // renderComments(commentsShown);
//   startComment += COMMENTS_STEP;

// };


const clearComments = () => {
  startComment = 0;
  modalPictureComments.innerHTML = '';
  modalPictureCommentsLoader.classList.remove('hidden');
  modalPictureCommentsLoader.removeEventListener('click', renderCommentsLoader);
};
// function renderCommentsLoader () {
//   renderComments();
//   console.log(renderComments());
// };

// modalPictureCommentsLoader.addEventListener('click', renderCommentsLoader, {once: true});

// const commentsLoaderHandler = (picture) => {
//   console.log(picture);
//   modalPictureCommentsLoader.addEventListener('click', renderCommentsLoader(picture), {once: true});
//   // startComment += COMMENTS_STEP;
//   // renderComments(picture);
// };

// const renderCommentsLoader = (picture) => {
//   startComment += COMMENTS_STEP;
//   renderComments(picture);
// };

// export { renderComments, commentsLoaderHandler, renderCommentsLoader, clearComments };
// export { renderComments, commentsLoaderHandler };
export { clearComments };
