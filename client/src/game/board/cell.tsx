import { gameStore } from '../../core/game-store';
import { CellVariant } from './board-cells';
import { Price } from './cell-styled';

const getColorForCell = (order: number) => {
  const currentCell = gameStore.board?.cellsData[order];

  if (currentCell?.type === 'company' && currentCell.ownerId) {
    return `${currentCell.ownerColor}b0`;
  }

  return 'transparent';
};

type CellProps = CellVariant;

export const Cell = (props: CellProps) => {
  const classNameId = `${props.position}-${props.order}`;

  if (props.type === 'start') {
    return (
      <div className={`cell square2 ${classNameId}`}>
        <span className="corner">
          <div
            className="cell-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </span>
      </div>
    );
  }

  if (props.type === 'prison') {
    return (
      <div className={`cell square2 ${classNameId}`}>
        <span className="corner">
          <div
            className="cell-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </span>
      </div>
    );
  }

  if (props.type === 'jackpot') {
    return (
      <div className={`cell square2 ${classNameId}`}>
        <span className="corner">
          <div
            className="cell-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </span>
      </div>
    );
  }

  if (props.type === 'vacation') {
    return (
      <div className={`cell square2 ${classNameId}`}>
        <span className="corner">
          <div
            className="cell-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </span>
      </div>
    );
  }

  if (props.position === 'top') {
    return (
      <div className={`cell square1 ${classNameId}`}>
        {props.type === 'company' && (
          <Price color={props.priceColor} className="header header-top">
            {props.price}$
          </Price>
        )}
        <div
          className="side side-top"
          style={{ backgroundColor: getColorForCell(props.order) }}
        >
          <div
            className="cell-image left-rotation"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </div>
      </div>
    );
  }

  if (props.position === 'right') {
    return (
      <div className={`cell squareSide ${classNameId}`}>
        {props.type === 'company' && (
          <Price color={props.priceColor} className="headerSide header-right">
            <span className="price">{props.price}$</span>
          </Price>
        )}
        <div
          className="side side-right"
          style={{ backgroundColor: getColorForCell(props.order) }}
        >
          <div
            className="cell-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </div>
      </div>
    );
  }

  if (props.position === 'bottom') {
    return (
      <div className={`cell square1 ${classNameId}`}>
        {props.type === 'company' && (
          <Price color={props.priceColor} className="header header-bottom">
            {props.price}$
          </Price>
        )}
        <div
          className="side side-bottom"
          style={{ backgroundColor: getColorForCell(props.order) }}
        >
          <div
            className="cell-image left-rotation"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </div>
      </div>
    );
  }

  if (props.position === 'left') {
    return (
      <div className={`cell squareSide ${classNameId}`}>
        {props.type === 'company' && (
          <Price color={props.priceColor} className="headerSide header-left">
            <span className="price">{props.price}$</span>
          </Price>
        )}
        <div
          className="side side-left"
          style={{ backgroundColor: getColorForCell(props.order) }}
        >
          <div
            className="cell-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
        </div>
      </div>
    );
  }

  return null;
};
