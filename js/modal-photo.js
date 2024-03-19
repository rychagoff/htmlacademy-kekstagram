import { pictures } from './photo.js';

const modalPicture = document.querySelector('.big-picture'); // Ищем модальное окно

// Ищем его изображение и кнопку закрытия
const modalPictureImg = modalPicture.querySelector('.big-picture__img').querySelector('img');
const modalPictureClose = modalPicture.querySelector('.big-picture__cancel');

const miniatures = document.querySelectorAll('.picture'); // Ищем миниатюры

const arrayUrl = pictures.map((item) => item.url); // Получаем массив путей изображений
// console.log(arrayUrl);

const modalOpen = function() {
  modalPicture.classList.remove('hidden');
};

const modalClose = function() {
  modalPicture.classList.add('hidden');
};

// Пишем обработчик для каждой миниатюры
// В параметрах миниатюра и элемент массива путей
const miniatureClickHandler = function(miniature, arayUrlItem) {
  miniature.addEventListener('click', () => {
    modalOpen();
    modalPictureImg.src = arayUrlItem; // Меняем путь большого изображения
  });
};

// Перебор массива миниатюр
// В параметрах миниатюра и её индекс
miniatures.forEach((miniature, index) => {
  // Индекс миниатюры передаем в параметр обработчику (как индекс пути),
  // чтобы связать каждую миниатюру с каждым её путем
  miniatureClickHandler(miniature, arrayUrl[index]);
});

modalPictureClose.addEventListener('click', () => {
  modalClose();
});
