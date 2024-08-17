import { getDataPictures } from './data.js';
import { renderThumbnailPhotos } from './photo.js';

const thumbnailPhotos = renderThumbnailPhotos(getDataPictures());
