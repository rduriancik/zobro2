export const MAIN_MENU = 'main-menu';
export const ANIMAL_DETAIL = 'animal-detail';
export const ANIMAL_LIST = 'animal-list';
export const EVENTS = 'events';
export const ANIMAL_NEIGHBOURS = 'animal-neighbour';
export const QR_READER = 'qr-scene';
export const ABOUT = 'about';
export const VISITORS = 'visitors';
export const GAME = 'game';
export const SERVICES = 'services';

export const sceneTitles = {
  [MAIN_MENU]: { name: 'MAIN_MENU', barColor: '#f6f6f6' },
  [QR_READER]: { name: 'QR_READER', title: 'Načíst QR kód', bgColor: '#37af54', barColor: '#3c3c3b'},
  [ANIMAL_LIST]: { name: 'ANIMAL_LIST', title: 'Zvířata', bgColor: '#2d9946', barColor: '#3c3c3b'},
  [EVENTS]: { name: 'EVENTS', title: 'Krmení zvířat', bgColor: '#267f3b', barColor: '#3c3c3b'},
  [GAME]: {name: 'GAME', title: 'Šifrovací hra', bgColor: '#20642f', barColor: '#3c3c3b'},
  [VISITORS]: {name: 'VISITORS',  title: 'Pro návštěvníky', bgColor: '#2d9946', barColor: '#3c3c3b'},
  [SERVICES]: {name: 'SERVICES',  title: 'Služby', bgColor: '#267f3b', barColor: '#3c3c3b'},
  [ABOUT]: {name: 'ABOUT',  title: 'O aplikaci', bgColor: '#37af54', barColor: '#3c3c3b'},

  [ANIMAL_DETAIL]: {name: 'ANIMAL_DETAIL',  bgColor: 'green', barColor: '#3c3c3b' },
  [ANIMAL_NEIGHBOURS]: {name: 'ANIMAL_NEIGHBOURS',  title: 'Sousedi', bgColor: 'blue', barColor: '#3c3c3b' },
}
