import { Position } from 'shared';

import startImage from './images/start.png';
import chanelImage from './images/chanel.svg';
import chanceImage from './images/chance.png';
import hugoBossImage from './images/hugo-boss.svg';
import taxIncomeImage from './images/tax-income.png';
import mercedesImage from './images/mercedes.svg';
import adidasImage from './images/adidas.svg';
import pumaImage from './images/puma.svg';
import lacosteImage from './images/lacoste.svg';
import jailImage from './images/jail.png';
import vkImage from './images/vk.svg';
import rockstarImage from './images/rockstar.svg';
import facebookImage from './images/facebook.svg';
import twitterImage from './images/twitter.svg';
import audiImage from './images/audi.svg';
import cocaColaImage from './images/coca-cola.svg';
import pepsiImage from './images/pepsi.svg';
import fantaImage from './images/fanta.svg';
import jackpotImage from './images/jackpot.svg';
import americanAirlinesImage from './images/american-airlines.svg';
import lufthansaImage from './images/lufthansa.svg';
import britishAirwaysImage from './images/british-airways.svg';
import fordImage from './images/ford.svg';
import mcdonaldsImage from './images/mcdonalds.svg';
import burgerKingImage from './images/burger-king.svg';
import rovioImage from './images/rovio.svg';
import kfcImage from './images/kfc.svg';
import goToJailImage from './images/go-to-jail.png';
import holidayInnImage from './images/holiday-inn.svg';
import radissonImage from './images/radisson.svg';
import novotelImage from './images/novotel.svg';
import landRoverImage from './images/land-rover.svg';
import taxLuxuryImage from './images/tax-luxury.png';
import nokiaImage from './images/nokia.svg';
import appleImage from './images/apple.svg';

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
    image: startImage,
    type: 'start',
    square: true,
  },
  {
    id: 1,
    order: 1,
    position: 'top',
    image: chanelImage,
    price: 600,
    priceColor: '#df8ac1',
    type: 'company',
  },
  {
    id: 2,
    order: 2,
    position: 'top',
    image: chanceImage,
    type: 'riddle',
  },
  {
    id: 3,
    order: 3,
    position: 'top',
    image: hugoBossImage,
    price: 600,
    priceColor: '#df8ac1',
    type: 'company',
  },
  {
    id: 4,
    order: 4,
    position: 'top',
    image: taxIncomeImage,
    type: 'tax',
  },
  {
    id: 5,
    order: 5,
    position: 'top',
    image: mercedesImage,
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 6,
    order: 6,
    position: 'top',
    image: adidasImage,
    price: 1000,
    priceColor: '#dbb756',
    type: 'company',
  },
  {
    id: 7,
    order: 7,
    position: 'top',
    image: chanceImage,
    type: 'riddle',
  },
  {
    id: 8,
    order: 8,
    position: 'top',
    image: pumaImage,
    price: 1000,
    priceColor: '#dbb756',
    type: 'company',
  },
  {
    id: 9,
    order: 9,
    position: 'top',
    image: lacosteImage,
    price: 1200,
    priceColor: '#dbb756',
    type: 'company',
  },
  {
    id: 10,
    order: 10,
    position: 'top',
    image: jailImage,
    type: 'prison',
    square: true,
  },
  {
    id: 11,
    order: 11,
    position: 'right',
    image: vkImage,
    price: 1400,
    priceColor: '#71b6a4',
    type: 'company',
  },
  {
    id: 12,
    order: 12,
    position: 'right',
    image: rockstarImage,
    price: 1500,
    priceColor: '#722918',
    type: 'company',
  },
  {
    id: 13,
    order: 13,
    position: 'right',
    image: facebookImage,
    price: 1400,
    priceColor: '#71b6a4',
    type: 'company',
  },
  {
    id: 14,
    order: 14,
    position: 'right',
    image: twitterImage,
    price: 1600,
    priceColor: '#71b6a4',
    type: 'company',
  },
  {
    id: 15,
    order: 15,
    position: 'right',
    image: audiImage,
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 16,
    order: 16,
    position: 'right',
    image: cocaColaImage,
    price: 1800,
    priceColor: '#5787c7',
    type: 'company',
  },
  {
    id: 17,
    order: 17,
    position: 'right',
    image: chanceImage,
    type: 'riddle',
  },
  {
    id: 18,
    order: 18,
    position: 'right',
    image: pepsiImage,
    price: 1800,
    priceColor: '#5787c7',
    type: 'company',
  },
  {
    id: 19,
    order: 19,
    position: 'right',
    image: fantaImage,
    price: 2000,
    priceColor: '#5787c7',
    type: 'company',
  },
  {
    id: 20,
    order: 20,
    position: 'bottom',
    image: jackpotImage,
    type: 'jackpot',
    square: true,
  },
  {
    id: 21,
    order: 21,
    position: 'bottom',
    image: americanAirlinesImage,
    price: 2200,
    priceColor: '#98bd5d',
    type: 'company',
  },
  {
    id: 22,
    order: 22,
    position: 'bottom',
    image: chanceImage,
    type: 'riddle',
  },
  {
    id: 23,
    order: 23,
    position: 'bottom',
    image: lufthansaImage,
    price: 2200,
    priceColor: '#98bd5d',
    type: 'company',
  },
  {
    id: 24,
    order: 24,
    position: 'bottom',
    image: britishAirwaysImage,
    price: 2400,
    priceColor: '#98bd5d',
    type: 'company',
  },
  {
    id: 25,
    order: 25,
    position: 'bottom',
    image: fordImage,
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 26,
    order: 26,
    position: 'bottom',
    image: mcdonaldsImage,
    price: 2600,
    priceColor: '#6fbde1',
    type: 'company',
  },
  {
    id: 27,
    order: 27,
    position: 'bottom',
    image: burgerKingImage,
    price: 2600,
    priceColor: '#6fbde1',
    type: 'company',
  },
  {
    id: 28,
    order: 28,
    position: 'bottom',
    image: rovioImage,
    price: 1500,
    priceColor: '#722918',
    type: 'company',
  },
  {
    id: 29,
    order: 29,
    position: 'bottom',
    image: kfcImage,
    price: 2800,
    priceColor: '#6fbde1',
    type: 'company',
  },
  {
    id: 30,
    order: 30,
    position: 'bottom',
    image: goToJailImage,
    type: 'vacation',
    square: true,
  },
  {
    id: 31,
    order: 31,
    position: 'left',
    image: holidayInnImage,
    price: 3000,
    priceColor: '#8f7dd1',
    type: 'company',
  },
  {
    id: 32,
    order: 32,
    position: 'left',
    image: radissonImage,
    price: 3000,
    priceColor: '#8f7dd1',
    type: 'company',
  },
  {
    id: 33,
    order: 33,
    position: 'left',
    image: chanceImage,
    type: 'riddle',
  },
  {
    id: 34,
    order: 34,
    position: 'left',
    image: novotelImage,
    price: 3200,
    priceColor: '#8f7dd1',
    type: 'company',
  },
  {
    id: 35,
    order: 35,
    position: 'left',
    image: landRoverImage,
    price: 2000,
    priceColor: '#be5053',
    type: 'company',
  },
  {
    id: 36,
    order: 36,
    position: 'left',
    image: taxLuxuryImage,
    type: 'riddle',
  },
  {
    id: 37,
    order: 37,
    position: 'left',
    image: nokiaImage,
    price: 3500,
    priceColor: '#6d717a',
    type: 'company',
  },
  {
    id: 38,
    order: 38,
    position: 'left',
    image: chanceImage,
    type: 'riddle',
  },
  {
    id: 39,
    order: 39,
    position: 'left',
    image: appleImage,
    price: 4000,
    priceColor: '#6d717a',
    type: 'company',
  },
];
