import { openPopupPhoto, photoContainerPopup } from './popupPhoto.js';
import { picturesContainer } from './photo.js';

const listComments = document.querySelector('.social__comments');
const itemComments = document.querySelector('.social__comment');

const showFullPhoto = ({url, likes, comments, description}) => {
  photoContainerPopup.querySelector('.big-picture__img img').src = url;
  photoContainerPopup.querySelector('.likes-count').textContent = likes;
  photoContainerPopup.querySelector('.comments-count').textContent = comments.length;
  photoContainerPopup.querySelector('.social__caption').textContent = description;
};

const getCommentsPhoto = (comments) => {
  listComments.innerHTML = '';
  comments.forEach(({avatar,name, message}) => {
    const commentElement = itemComments.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    listComments.appendChild(commentElement);
  });
};

const renderFullPhoto = (dataPictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-picture-id]');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();

    const indexPicture = dataPictures.find((item) => item.id === +thumbnail.dataset.pictureId);
    openPopupPhoto();
    showFullPhoto(indexPicture);
    getCommentsPhoto(indexPicture.comments);
  });
};

export { renderFullPhoto };
