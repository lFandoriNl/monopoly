import { CellWrapper, Price } from './cell-styled';

type CellProps = {
  image: string;
  price?: number;
  priceColor: string;
  orientation: string;
  figure: string;
  position: string;
  type: string;
};

export const Cell = ({
  image,
  price,
  priceColor,
  orientation,
  figure,
  position,
  type,
}: CellProps) => {
  return (
    <CellWrapper figure={figure} orientation={orientation}>
      {type === 'element' && (
        <Price color={priceColor} position={position}>
          {price}
        </Price>
      )}
      <span>{image}</span>
    </CellWrapper>
  );
};
