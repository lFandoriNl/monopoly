import { CellWrapper, Price } from './cell-styled';

type CellProps = {
  image: string;
  price: number;
  priceColor: string;
  orientation: string;
  type: string;
};

const Cell = ({ image, price, priceColor, orientation, type }: CellProps) => {
  return (
    <CellWrapper test1={orientation} test2={type}>
      <Price color={priceColor}>{price}</Price>
      <span>{image}</span>
    </CellWrapper>
  );
};

export default Cell;
