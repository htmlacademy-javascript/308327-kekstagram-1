import { renderFullPhoto } from './gallery.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();

const renderThumbnailPhotos = (arrayPictures) => {
  arrayPictures.forEach(({url,likes,comments, id}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.dataset.pictureId = id;
    similarListFragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(similarListFragment);
  renderFullPhoto(arrayPictures);
};

export { renderThumbnailPhotos, picturesContainer };
