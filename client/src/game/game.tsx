import Cell from './board/cell';

export function Game() {
  return (
    <div>
      <Cell
        orientation="vertical"
        type="vertical"
        priceColor="red"
        image="Chanel"
        price={1400}
      />
    </div>
  );
}
