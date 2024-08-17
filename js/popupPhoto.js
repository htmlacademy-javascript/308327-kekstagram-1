import { isEscapeKey, isEnterKey } from './util.js';

const picturesContainer = document.querySelector('.pictures');
const photoContainerPopup = document.querySelector('.big-picture');
const buttonClosePopup = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');


const onPopupKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closePopupPhoto();
  }
};

const openPopupPhoto = () => {
  photoContainerPopup.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onPopupKeydown);
};

const closePopupPhoto = () => {
  photoContainerPopup.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupKeydown);
};

picturesContainer.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openPopupPhoto();
  }
});

buttonClosePopup.addEventListener('click', closePopupPhoto);
buttonClosePopup.addEventListener('keydown', closePopupPhoto);

export { openPopupPhoto, photoContainerPopup };
