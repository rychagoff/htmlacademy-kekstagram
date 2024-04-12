import '../vendor/pristine/pristine.min.js'; // +++
import '../vendor/nouislider/nouislider.js'; // +++
import '../vendor/nouislider/nouislider.css'; // +++

import { getData } from './api.js'; // +++
import { showAlert } from './util.js'; // +++
import { getGallery } from './gallery.js'; // +++
import { renderModal } from './action-modal.js'; // +++
import { setUserFormSubmit } from './validator.js'; // +++
import { closeUploadModal } from './upload-form.js'; // +++

getData()
  // .then((response) => response.json())
  .then((gallery) => {
    getGallery(gallery);
    renderModal(gallery);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUploadModal);
