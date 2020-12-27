type Position = 'top' | 'right' | 'bottom' | 'left';

type Type =
  | 'start'
  | 'prison'
  | 'jackpot'
  | 'vacation'
  | 'company'
  | 'riddle'
  | 'tax';

type PriceColor =
  | '#df8ac1'
  | '#be5053'
  | '#dbb756'
  | '#71b6a4'
  | '#722918'
  | '#5787c7'
  | '#98bd5d'
  | '#6fbde1'
  | '#8f7dd1'
  | '#6d717a';

type CellSquare = {
  id: number;
  image: string;
  position: 'top' | 'bottom';
  type: 'start' | 'prison' | 'jackpot' | 'vacation';
  square: true;
};

type CellCompany = {
  id: number;
  image: string;
  position: Position;
  price: number;
  priceColor: PriceColor;
  type: Type;
};

type CellRandom = {
  id: number;
  image: string;
  position: Position;
  type: 'riddle' | 'tax';
};

export const boardCells: (CellSquare | CellCompany | CellRandom)[] = [
  {
    id: 0,
    image: 'Start',
    position: 'top',
    type: 'start',
    square: true,
  },
  {
    id: 1,
    image: 'Channel',
    price: 600,
    priceColor: '#df8ac1',
    position: 'top',
    type: 'company',
  },
  {
    id: 2,
    image: 'riddle',
    position: 'top',
    type: 'riddle',
  },
  {
    id: 3,
    image: 'Boss',
    price: 600,
    priceColor: '#df8ac1',
    position: 'top',
    type: 'company',
  },
  {
    id: 4,
    image: 'Tax',
    position: 'top',
    type: 'tax',
  },
  {
    id: 5,
    image: 'Mersedes',
    price: 2000,
    priceColor: '#be5053',
    position: 'top',
    type: 'company',
  },
  {
    id: 6,
    image: 'Adidas',
    price: 1000,
    priceColor: '#dbb756',
    position: 'top',
    type: 'company',
  },
  {
    id: 7,
    image: 'riddle',
    position: 'top',
    type: 'riddle',
  },
  {
    id: 8,
    image: 'Puma',
    price: 1000,
    priceColor: '#dbb756',
    position: 'top',
    type: 'company',
  },
  {
    id: 9,
    image: 'Lacoste',
    price: 1200,
    priceColor: '#dbb756',
    position: 'top',
    type: 'company',
  },
  {
    id: 10,
    image: 'Prison',
    position: 'top',
    type: 'prison',
    square: true,
  },
  {
    id: 11,
    image: 'VK',
    price: 1400,
    priceColor: '#71b6a4',
    position: 'right',
    type: 'company',
  },
  {
    id: 12,
    image: 'RockStar',
    price: 1500,
    priceColor: '#722918',
    position: 'right',
    type: 'company',
  },

  {
    id: 13,
    image: 'Facebook',
    price: 1400,
    priceColor: '#71b6a4',
    position: 'right',
    type: 'company',
  },
  {
    id: 14,
    image: 'Twitter',
    price: 1600,
    priceColor: '#71b6a4',
    position: 'right',
    type: 'company',
  },
  {
    id: 15,
    image: 'Audi',
    price: 2000,
    priceColor: '#be5053',
    position: 'right',
    type: 'company',
  },
  {
    id: 16,
    image: 'CocaCola',
    price: 1800,
    priceColor: '#5787c7',
    position: 'right',
    type: 'company',
  },
  {
    id: 17,
    image: 'riddle',
    position: 'right',
    type: 'riddle',
  },
  {
    id: 18,
    image: 'Pepsi',
    price: 1800,
    priceColor: '#5787c7',
    position: 'right',
    type: 'company',
  },
  {
    id: 19,
    image: 'Pepsi',
    price: 2000,
    priceColor: '#5787c7',
    position: 'right',
    type: 'company',
  },
  {
    id: 20,
    image: 'JackPot',
    position: 'bottom',
    type: 'jackpot',
    square: true,
  },
  {
    id: 21,
    image: 'American Airline',
    price: 2200,
    priceColor: '#98bd5d',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 22,
    image: 'riddle',
    position: 'bottom',
    type: 'riddle',
  },
  {
    id: 23,
    image: 'Lufttaines',
    price: 2200,
    priceColor: '#98bd5d',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 24,
    image: 'British Airline',
    price: 2400,
    priceColor: '#98bd5d',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 25,
    image: 'Ford',
    price: 2000,
    priceColor: '#be5053',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 26,
    image: 'Macdonadls',
    price: 2600,
    priceColor: '#6fbde1',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 27,
    image: 'Burger King',
    price: 2600,
    priceColor: '#6fbde1',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 28,
    image: 'Arovio',
    price: 1500,
    priceColor: '#722918',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 29,
    image: 'KFC',
    price: 2800,
    priceColor: '#6fbde1',
    position: 'bottom',
    type: 'company',
  },
  {
    id: 30,
    image: 'Vacation',
    position: 'bottom',
    type: 'vacation',
    square: true,
  },
  {
    id: 31,
    image: 'Holiday Inn',
    price: 3000,
    priceColor: '#8f7dd1',
    position: 'left',
    type: 'company',
  },
  {
    id: 32,
    image: 'Radisson',
    price: 3000,
    priceColor: '#8f7dd1',
    position: 'left',
    type: 'company',
  },
  {
    id: 33,
    image: 'riddle',
    position: 'left',
    type: 'riddle',
  },
  {
    id: 34,
    image: 'Novotel',
    price: 3200,
    priceColor: '#8f7dd1',
    position: 'left',
    type: 'company',
  },
  {
    id: 35,
    image: 'Land Rover',
    price: 2000,
    priceColor: '#be5053',
    position: 'left',
    type: 'company',
  },
  {
    id: 36,
    image: 'riddle',
    position: 'left',
    type: 'riddle',
  },
  {
    id: 37,
    image: 'Apple',
    price: 3500,
    priceColor: '#6d717a',
    position: 'left',
    type: 'company',
  },
  {
    id: 38,
    image: 'riddle',
    position: 'left',
    type: 'riddle',
  },
  {
    id: 39,
    image: 'Nokia',
    price: 4000,
    priceColor: '#6d717a',
    position: 'left',
    type: 'company',
  },
];
