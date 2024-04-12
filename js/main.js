import '../vendor/pristine/pristine.min.js'; // +++
import '../vendor/nouislider/nouislider.js'; // +++
import '../vendor/nouislider/nouislider.css'; // +++

import { getData } from './api.js';
import { showAlert } from './util.js';
import { getGallery } from './gallery.js'; // +++
import { renderModal } from './action-modal.js'; // +++
// import './upload-form.js';

// import './photo-scale.js';
// import './photo-effects.js';

import { setUserFormSubmit } from './validator.js';
import { closeUploadModal } from './upload-form.js';

// import './photo-upload.js';
// import './validator.js';

getData()
  // .then((response) => response.json())
  .then((gallery) => {
    // console.log(gallery);
    getGallery(gallery);
    renderModal(gallery);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUploadModal);
