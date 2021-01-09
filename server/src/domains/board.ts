import { CellPosition } from 'shared';
import { cellsData, cellsPriceData } from '../common/cells-data';

export class Board {
  static getCellDataByPosition(cell: CellPosition) {
    return cellsData[cell.order];
  }

  static getCompanyByPosition(cell: CellPosition) {
    return cellsPriceData[cell.order];
  }
}
