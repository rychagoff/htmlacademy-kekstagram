import '../vendor/pristine/pristine.min.js';
import '../vendor/nouislider/nouislider.js';
import '../vendor/nouislider/nouislider.css';

import './action-modal.js';
import './photo-upload.js';
import './photo-scale.js';
import './photo-effects.js';
import './validator.js';

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((gallery) => {
    console.log(gallery);
  });
