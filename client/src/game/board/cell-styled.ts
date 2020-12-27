import styled from 'styled-components/macro';

export const CellWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: ${(p) => (p.test == 'square' ? '10rem' : '5rem')};
  height: ${(p) => (p.test == 'square' ? '10rem' : '5rem')};
  span {
    transform: rotate(-90deg);
  }
`;

export const Price = styled.div`
  position: absolute;
  background-color: ${(p) => p.color};
  width: 100%;
  top: calc(0% - 20px);
  height: 20px;
`;
