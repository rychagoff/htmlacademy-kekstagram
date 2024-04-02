import { isEscapeKey, modalHiddenToggle, scrollLockToggle } from './util.js';

const form = document.querySelector('.img-upload__form');
const formInput = form.querySelector('.img-upload__input');
const formOverlay = form.querySelector('.img-upload__overlay');
const formCancel = form.querySelector('.img-upload__cancel');

// Обработчик, который вызывает функцию закрытия модального окна клавишей ESC
const onDocumentKeydownEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  modalHiddenToggle(formOverlay);
  scrollLockToggle();

  document.addEventListener('keydown', onDocumentKeydownEscape);
  console.log('ЗАГРУЗКА КАРТИНКИ -->');
}

function closeModal () {
  modalHiddenToggle(formOverlay);
  scrollLockToggle();

  document.removeEventListener('keydown', onDocumentKeydownEscape);
  formInput.value = '';
  console.log('<-- ЗАКРЫТО МОДАЛЬНОЕ ОКНО');
}

formInput.addEventListener('change', () => {
  openModal();
});

formCancel.addEventListener('click', () => {
  closeModal();
});