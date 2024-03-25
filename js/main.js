import { getPhotos } from './data.js';
import { getGallery, picturesList } from './gallery.js';
import { addHandler } from './action-modal.js';

const pictures = getPhotos();
// console.log(pictures);
getGallery(pictures);
addHandler(picturesList);
