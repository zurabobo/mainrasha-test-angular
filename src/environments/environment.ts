const routeProperties = [
  {
    title: 'Блогеры',
    path: '/bloggers',
    key: 'menu_bloggers_title',
  },
  {
    title: 'Блогеры',
    path: '/blogger',
    key: 'menu_bloggers_title',
  },
  {
    title: 'Кейсы',
    path: '/cases',
    key: 'menu_cases_title',
  },
  {
    title: 'Агентство',
    path: '/exit-agency',
    key: 'menu_agency_title',
  },
  {
    title: 'Контакты',
    path: '/contacts',
    key: 'menu_contacts_title',
  },
];

const VIDEOS_CARD_LIST_DATA = [
  {
    id: 1,
    link: 'https://youtu.be/yivaVZNSWrM',
    image: '../assets/images/video-1.jpg',
  },
  {
    id: 2,
    link: 'https://newsbel.by/wp-content/uploads/2019/08/newsbel.by-19.08.2019-5tA45HbJOJLExgPgw3dhM9dULPwZ1L16.jpg',
    image: '../assets/images/video-2.jpg',
  },
  {
    id: 3,
    link: 'https://socialbus.ru/wp-content/uploads/2020/06/kak-vosstanovit-kanal-youtube.jpg',
    image: '../assets/images/video-3.jpg',
  },
  {
    id: 4,
    link: 'https://comp-pro.ru/wp-content/uploads/b/6/3/b63d31b07df6937fb5ee382ac86df007.jpeg',
    image: '../assets/images/video-4.jpg',
  },
  {
    id: 5,
    link: 'https://sun9-43.userapi.com/impf/c850420/v850420848/52c0b/oI57GUJ_fs8.jpg?size=1080x720&quality=96&sign=c5dcd36c36c2a8052b869e89a41b5dc3&c_uniq_tag=hSglr3AjvxOhHDG_H0fcjQxvHkoLafe7BAadriee_3U&type=video_thumb',
    image: '../assets/images/video-5.jpg',
  },
  {
    id: 6,
    link: 'https://www.likeni.ru/upload/iblock/d24/s1200-1-5-1024x768.jpg',
    image: '../assets/images/video-6.jpg',
  },
];

const BLOGGERS_CARD_DATA = [
  {
    id: 1,
    link: 'https://100biografiy.ru/wp-content/uploads/2020/10/katya-konasova3-650x571.jpg',
    title: 'Катя Конасова',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_1',
  },
  {
    id: 2,
    link: 'https://uchastniki.com/wp-content/uploads/2019/05/vlad-bumaga-25.jpg',
    title: 'Влад Силач',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_2',
  },
  {
    id: 3,
    link: 'https://socialbus.ru/wp-content/uploads/2020/06/kak-vosstanovit-kanal-youtube.jpg',
    title: 'Максим Голополосов',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_3',
  },
  {
    id: 4,
    link: 'https://comp-pro.ru/wp-content/uploads/b/6/3/b63d31b07df6937fb5ee382ac86df007.jpeg',
    title: 'Саша Спилберг',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_4',
  },
  {
    id: 5,
    link: 'https://sun9-43.userapi.com/impf/c850420/v850420848/52c0b/oI57GUJ_fs8.jpg?size=1080x720&quality=96&sign=c5dcd36c36c2a8052b869e89a41b5dc3&c_uniq_tag=hSglr3AjvxOhHDG_H0fcjQxvHkoLafe7BAadriee_3U&type=video_thumb',
    title: 'Николай Соболев',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_5',
  },
  {
    id: 6,
    link: 'https://www.likeni.ru/upload/iblock/d24/s1200-1-5-1024x768.jpg',
    title: 'Катя клэп',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_6',
  },
  {
    id: 7,
    link: 'https://i.pinimg.com/736x/a8/7a/3a/a87a3acc3f7a821c38ec38d2e9b70324.jpg',
    title: 'Катя клэп',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_7',
  },
  {
    id: 8,
    link: 'https://cdn.forbes.ru/files/story_images/new_forbes10-28322.jpg__1557927257__77541.jpg',
    title: 'Настя Ивлеева',
    youtube: '3 160 000',
    vk: '2 777 000',
    instagram: '3 333 000',
    key: 'blogger_title_8',
  },
];

const menuProperties = [
  {
    label: 'Блогеры',
    path: '/bloggers',
    key: 'menu_bloggers_title',
  },
  {
    label: 'Кейсы',
    path: '/cases',
    key: 'menu_cases_title',
  },
  {
    label: 'Агентство',
    path: '/exit-agency',
    key: 'menu_agency_title',
  },
  {
    label: 'Контакты',
    path: '/contacts',
    key: 'menu_contacts_title',
  },
];

const platformProperties = [
  {
    title: 'вконтакте',
    key: 'vk',
    link: 'https://vk.com/',
  },
  {
    title: 'Facebook',
    key: 'facebook',
    link: 'https://www.facebook.com/',
  },
  {
    title: 'Instagram',
    key: 'instagram',
    link: 'https://www.instagram.com/',
  },
];

const directionProperties = [
  {
    title: 'Животные',
    key: 'direction_animals',
  },
  {
    title: 'Игры',
    key: 'direction_games',
  },
  {
    title: 'Иностранные языки',
    key: 'direction_lang',
  },
];

const bloggersLocation = window.location.pathname === '/bloggers';

export interface RouteProperty {
  title: string;
  path: string;
  key: string;
}

export interface MenuProperty {
  label: string;
  path: string;
  key: string;
}

export interface PlatformProperty {
  title: string;
  link: string;
  key: string;
}

export interface DirectionProperty {
  title: string;
  key: string;
}

export interface BloggersCardData {
  id: number;
  link: string;
  title: string;
  youtube: string;
  vk: string;
  instagram: string;
  key: string;
}

export interface VideosCardData {
  id: number;
  link: string;
  image: any;
}

export const environment = {
  production: false,
  routeProperties,
  BLOGGERS_CARD_DATA,
  VIDEOS_CARD_LIST_DATA,
  menuProperties,
  platformProperties,
  directionProperties,
  bloggersLocation,
};
