import { getPhotos } from './data.js';
import { getGallery } from './gallery.js';
// import './action-modal.js';

const pictures = getPhotos();
// console.log(pictures);
getGallery(pictures);
