import {
  IBoard,
  CellsData,
  CellDataCompany,
  CellsPriceData,
  CellPriceData,
  CellPosition,
} from 'shared';

import { Player } from './player';
import { cellsData, cellsPriceData } from '../common/cells-data';

export class Board implements IBoard {
  cellsData: CellsData = {};
  cellsPriceData: CellsPriceData = {};

  constructor(board: Partial<Board>) {
    if (!board.cellsData) {
      board.cellsData = { ...cellsData };
    }

    if (!board.cellsPriceData) {
      board.cellsPriceData = { ...cellsPriceData };
    }

    Object.assign(this, board);
  }

  buyCompany(player: Player, order: CellPosition['order']) {
    const cell = this.cellsData[order];
    const cellPrice = this.cellsPriceData[order];

    if (cell.type === 'company') {
      cell.ownerId = player.id;
      cell.ownerColor = player.color;

      if (cellPrice.type === 'Company') {
        cell.rentLevel = 'rent0';
      }
    }
  }

  getRentPrice(cellDataCompany: CellDataCompany, company: CellPriceData) {
    if (cellDataCompany.rentLevel) {
      if (company.type === 'Company') {
        const rentPrice = company[cellDataCompany.rentLevel];
        return rentPrice;
      }

      return 0;
    }

    return 0;
  }

  getCellDataByPosition(cell: CellPosition) {
    return this.cellsData[cell.order];
  }

  getCompanyPriceByPosition(cell: CellPosition) {
    return this.cellsPriceData[cell.order];
  }
}
