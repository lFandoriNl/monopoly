import { Price } from './cell-styled';

type CellProps = {
  image: string;
  price?: number;
  position: string;
  type?: string;
  priceColor?: string;
  square?: boolean;
};

export const Cell = ({
  image,
  price,
  position,
  priceColor,
  type,
  square,
}: CellProps) => {
  if (position === 'top' && !square) {
    return (
      <div className="square1">
        {priceColor && (
          <Price color={priceColor} className="header header-top">
            {price}
          </Price>
        )}
        <div className="firstLine firstLine-top rotation2">{image}</div>
      </div>
    );
  }

  if (position === 'bottom' && !square) {
    return (
      <div className="square1">
        {priceColor && (
          <Price color={priceColor} className="header header-bottom">
            {price}
          </Price>
        )}
        <div className="firstLine firstLine-bottom">{image}</div>
      </div>
    );
  }

  if (position === 'right') {
    return (
      <div className="squareSide">
        {priceColor && (
          <Price color={priceColor} className="headerSide header-right">
            {price}
          </Price>
        )}
        <div className="firstLine firstLine-right rotation3">{image}</div>
      </div>
    );
  }

  if (position === 'left') {
    return (
      <div className="squareSide">
        {priceColor && (
          <Price color={priceColor} className="headerSide header-left">
            {price}
          </Price>
        )}
        <div className="firstLine firstLine-left rotation1">{image}</div>
      </div>
    );
  }

  if (type === 'start') {
    return (
      <div className="square2">
        <span className="corner corner1">1</span>
      </div>
    );
  }

  if (type === 'prison') {
    return (
      <div className="square2">
        <span className="corner corner2">2</span>
      </div>
    );
  }

  if (type === 'jackpot') {
    return (
      <div className="square2">
        <span className="corner corner3">3</span>
      </div>
    );
  }

  if (type === 'vacation') {
    return (
      <div className="square2">
        <span className="corner corner4">4</span>
      </div>
    );
  }

  return null;
};
