import { CellKind, Position } from 'shared-types';

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
  order: number;
  position: 'top' | 'bottom';
  image: string;
  type: 'start' | 'prison' | 'jackpot' | 'vacation';
  square: true;
};

type CellCompany = {
  id: number;
  order: number;
  position: Position;
  image: string;
  price: number;
  priceColor: PriceColor;
  type: 'company';
};

type CellRandom = {
  id: number;
  order: number;
  position: Position;
  image: string;
  type: 'riddle' | 'tax';
};

export type CellVariant = CellSquare | CellCompany | CellRandom;

export const boardCells: CellVariant[] = [
  {
    id: 0,
    order: 0,
    position: 'top',
    image: 'Start',
    type: 'start',
    square: true,
  },
  {
    id: 1,
    order: 1,
    position: 'top',
    image: 'Channel',
    price: 600,
    priceColor: '#df8ac1',
    type: 'company',
  },
  {
    id: 2,
    order: 2,
    position: 'top',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 3,
    order: 3,
    position: 'top',
    image: 'Boss',
    price: 600,
    priceColor: '#df8ac1',
    type: 'company',
  },
  {
    id: 4,
    order: 4,
    position: 'top',
    image: 'Tax',
    type: 'tax',
  },
  {
    id: 5,
    order: 5,
    position: 'top',
    image: 'Mersedes',
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 6,
    order: 6,
    position: 'top',
    image: 'Adidas',
    price: 1000,
    priceColor: '#dbb756',
    type: 'company',
  },
  {
    id: 7,
    order: 7,
    position: 'top',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 8,
    order: 8,
    position: 'top',
    image: 'Puma',
    price: 1000,
    priceColor: '#dbb756',
    type: 'company',
  },
  {
    id: 9,
    order: 9,
    position: 'top',
    image: 'Lacoste',
    price: 1200,
    priceColor: '#dbb756',
    type: 'company',
  },
  {
    id: 10,
    order: 10,
    position: 'top',
    image: 'Prison',
    type: 'prison',
    square: true,
  },
  {
    id: 11,
    order: 11,
    position: 'right',
    image: 'VK',
    price: 1400,
    priceColor: '#71b6a4',
    type: 'company',
  },
  {
    id: 12,
    order: 12,
    position: 'right',
    image: 'RockStar',
    price: 1500,
    priceColor: '#722918',
    type: 'company',
  },

  {
    id: 13,
    order: 13,
    position: 'right',
    image: 'Facebook',
    price: 1400,
    priceColor: '#71b6a4',
    type: 'company',
  },
  {
    id: 14,
    order: 14,
    position: 'right',
    image: 'Twitter',
    price: 1600,
    priceColor: '#71b6a4',
    type: 'company',
  },
  {
    id: 15,
    order: 15,
    position: 'right',
    image: 'Audi',
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 16,
    order: 16,
    position: 'right',
    image: 'CocaCola',
    price: 1800,
    priceColor: '#5787c7',
    type: 'company',
  },
  {
    id: 17,
    order: 17,
    position: 'right',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 18,
    order: 18,
    position: 'right',
    image: 'Pepsi',
    price: 1800,
    priceColor: '#5787c7',
    type: 'company',
  },
  {
    id: 19,
    order: 19,
    position: 'right',
    image: 'Pepsi',
    price: 2000,
    priceColor: '#5787c7',
    type: 'company',
  },
  {
    id: 20,
    order: 20,
    position: 'bottom',
    image: 'JackPot',
    type: 'jackpot',
    square: true,
  },
  {
    id: 21,
    order: 21,
    position: 'bottom',
    image: 'American Airline',
    price: 2200,
    priceColor: '#98bd5d',
    type: 'company',
  },
  {
    id: 22,
    order: 22,
    position: 'bottom',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 23,
    order: 23,
    position: 'bottom',
    image: 'Lufttaines',
    price: 2200,
    priceColor: '#98bd5d',
    type: 'company',
  },
  {
    id: 24,
    order: 24,
    position: 'bottom',
    image: 'British Airline',
    price: 2400,
    priceColor: '#98bd5d',
    type: 'company',
  },
  {
    id: 25,
    order: 25,
    position: 'bottom',
    image: 'Ford',
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 26,
    order: 26,
    position: 'bottom',
    image: 'Macdonadls',
    price: 2600,
    priceColor: '#6fbde1',
    type: 'company',
  },
  {
    id: 27,
    order: 27,
    position: 'bottom',
    image: 'Burger King',
    price: 2600,
    priceColor: '#6fbde1',
    type: 'company',
  },
  {
    id: 28,
    order: 28,
    position: 'bottom',
    image: 'Arovio',
    price: 1500,
    priceColor: '#722918',
    type: 'company',
  },
  {
    id: 29,
    order: 29,
    position: 'bottom',
    image: 'KFC',
    price: 2800,
    priceColor: '#6fbde1',
    type: 'company',
  },
  {
    id: 30,
    order: 30,
    position: 'bottom',
    image: 'Vacation',
    type: 'vacation',
    square: true,
  },
  {
    id: 31,
    order: 31,
    position: 'left',
    image: 'Holiday Inn',
    price: 3000,
    priceColor: '#8f7dd1',
    type: 'company',
  },
  {
    id: 32,
    order: 32,
    position: 'left',
    image: 'Radisson',
    price: 3000,
    priceColor: '#8f7dd1',
    type: 'company',
  },
  {
    id: 33,
    order: 33,
    position: 'left',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 34,
    order: 34,
    position: 'left',
    image: 'Novotel',
    price: 3200,
    priceColor: '#8f7dd1',
    type: 'company',
  },
  {
    id: 35,
    order: 35,
    position: 'left',
    image: 'Land Rover',
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 36,
    order: 36,
    position: 'left',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 37,
    order: 37,
    position: 'left',
    image: 'Apple',
    price: 3500,
    priceColor: '#6d717a',
    type: 'company',
  },
  {
    id: 38,
    order: 38,
    position: 'left',
    image: 'riddle',
    type: 'riddle',
  },
  {
    id: 39,
    order: 39,
    position: 'left',
    image: 'Nokia',
    price: 4000,
    priceColor: '#6d717a',
    type: 'company',
  },
];
