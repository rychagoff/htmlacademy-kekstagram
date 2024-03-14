import { getPhotos } from './data.js';

// Ищем контейнер для изображений
const picturesList = document.querySelector('.pictures');
// Ищем шаблон
const pictureTemplate = document.querySelector('#picture');
// Ищем элемент шаблона
const pictureTemplateItem = pictureTemplate.content.querySelector('.picture');

const pictures = getPhotos();
const picturesFragment = document.createDocumentFragment();

pictures.forEach((picture) => {
  const similarPicture = pictureTemplateItem.cloneNode(true);
  similarPicture.querySelector('.picture__img').src = picture.url;
  similarPicture.querySelector('.picture__img').alt = picture.description;
  similarPicture.querySelector('.picture__comments').textContent = picture.comment.length;
  similarPicture.querySelector('.picture__likes').textContent = picture.likes;
  picturesFragment.appendChild(similarPicture);
});

picturesList.append(picturesFragment);
