import {
  getRandomInteger,
  getRandomArrayElement,
  getIdGenerator
} from './util.js';

const UPPER_RANGE = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;
const COMENT_COUNT = 20;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Чил на крутейшем пляже.',
  'Направление в рай - дорога к пляжу.',
  'Лазурный берег с бархатным белым песочком.',
  'Очень красивая девушка. Ваааайяяяяя.',
  'Поднимающий настроение супчик с пупочками ежа.',
  'Sport car продавца бахил в Spa.',
  'Восхитительные завтраки.',
  'Кисель - пушка.',
  'Девушка машет руками самолёту заходившему на посадку.',
  'Обувница с обувью соседа.',
  'Дорога от столовой до пляжа',
  'Sport car мамы продавца бахил в Spa.',
  'Ммм..Салатииик!',
  'Суши по корейски.Можем добавть морковочки.',
  'Я у мамы автобот. Угнал педали у трансформера.',
  'Белый след в небе от самолёта...Выглядит круто.',
  'Оркестр "Прощание славянки"',
  'Легендарное авто отца продавца бахил в Spa.',
  'Тапочки с Aliexpressa с фонариком.',
  'О, я тут живу!',
  'Рис с овощами по Албански.',
  'Потрясающий закат',
  'Краб клешни сушит.',
  'Концерт Олечки Бузовой на стадионе Камп Ноу',
  'Бегемоты смеются над моей новой тачкой. Зато маи и без кредитов'
];

const NAMES = [
  'Миша',
  'Паша',
  'Саша',
  'Леша',
  'Гриша',
  'Сергей',
  'Денис',
  'Андрей'
];

const generateCommentId = getIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    { length: getRandomInteger(0, COMENT_COUNT) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({ length: UPPER_RANGE }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures};
