const form = document.querySelector('.img-upload__form');
const formHashtag = form.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

// Функция проверки хэштега по условию
// По ТХ хэштег начинается с символа '#', строка после '#' должна состоять из букв и чисел
// Хэштэг не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи
// Хэштэг не может состоять только из одной решётки и быть длиннее 20 символов, включая решётку
// Хэштэги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом
const isValidateHashtag = (hashtag) => {
  const hashtagItem = /^#[a-zа-я0-9ё]{2,19}$/i;
  return hashtagItem.test(hashtag.trim());
};

// console.log(isValidateHashtag('#Хэштег')); // true
// console.log(isValidateHashtag('#Хэште!г')); // false
// console.log(isValidateHashtag('Хэштег')); // false
// console.log(isValidateHashtag('#Я')); // false

// Функция проверки всех хэштегов на соблюдение условий регулярного выражения в функции 'isValidateHashtag'
const isValidateAllHashtags = (hashtags) => hashtags.trim().split(' ').every(isValidateHashtag);

// Функция проверки дубликатов хэштегов
// Метод 'size' возвращает длину массива 'hashtags' без учета повторений
// Сравниваем длину массива без повторения с длиной исходного массива
// Выводит true - если длины совпадают,а дубликатов нет и false - если дубликаты есть
const hasDuplicateValidate = (hashtags) => {
  const setHashtags = new Set(hashtags.trim().split(' '));
  return setHashtags.size === hashtags.trim().split(' ').length;
};

// console.log(hasDuplicateValidate('Значение этого выражения в JavaScript будет "искать такси". Почему?'));
// console.log(hasDuplicateValidate('Значение этого JavaScript выражения в JavaScript будет "искать такси". Почему?'));

// Функция проверки длины массива, полученного из строки методом split
// По ТЗ в поле ввода хэштеги разделяются пробелами, хэштегов должно быть не больше 5
// Выводит true - если хэштегов меньше или равно 5 и false - если хэштегов больше 5
const isValidateTotalHashtags = (hashtags) => hashtags.split(' ').length <= 5;

// console.log(isValidateTotalHashtags('Значение этого выражения в JavaScript будет "искат ьтакси". Почему?'));
// console.log(isValidateTotalHashtags('Значение этого выражения меньше'));

pristine.addValidator((formHashtag), isValidateAllHashtags, 'Введен невалидный хештег');
pristine.addValidator((formHashtag), hasDuplicateValidate, 'Хэштеги повторяются');
pristine.addValidator((formHashtag), isValidateTotalHashtags, 'Превышено количество хэштегов');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
    console.log('НЕ ВАЛИДНО');
  } else {
    console.log('ВАЛИДНО');
  }
});
