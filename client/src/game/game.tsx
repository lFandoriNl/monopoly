import Cell from './board/cell';

export function Game() {
  return (
    <div>
      <Cell
        orientation="horizontal"
        type="horizontal"
        priceColor="red"
        image="Chanel"
        price={1400}
        position="right"
      />
    </div>
  );
}
