import styled, { css } from 'styled-components/macro';

function setWidth({ type }: { type: string }) {
  if (type == 'square') {
    return '10rem';
  } else if (type == 'vertical') {
    return '3rem';
  } else if (type == 'horizontal') {
    return '5rem';
  }
  return '';
}

function setHeight({ type }: { type: string }) {
  if (type == 'square') {
    return '10rem';
  } else if (type == 'vertical') {
    return '5rem';
  } else if (type == 'horizontal') {
    return '3rem';
  }
  return '';
}

function setPosition({ position, color }: { position: string; color: string }) {
  if (position == 'top') {
    return css`
      position: absolute;
      background-color: ${color};
      width: 100%;
      top: calc(0% - 20px);
      height: 20px;
      text-align: center;
    `;
  } else if (position == 'bottom') {
    return css`
      position: absolute;
      background-color: ${color};
      width: 100%;
      bottom: -25%;
      height: 20px;
      text-align: center;
    `;
  } else if (position == 'right') {
    return css`
      position: absolute;
      background-color: ${color};
      width: 63%;
      right: -44%;
      height: 20px;
      transform: rotate(90deg);
      text-align: center;
    `;
  } else if (position == 'left') {
    return css`
      position: absolute;
      background-color: ${color};
      width: 63%;
      left: -44%;
      height: 20px;
      transform: rotate(-90deg);
      text-align: center;
    `;
  }
  return '';
}

export const CellWrapper = styled.div<{ type: string; orientation: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: ${(p) => setWidth(p)};
  height: ${(p) => setHeight(p)};
  span {
    transform: ${(p) =>
      p.orientation == 'vertical' ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
`;

export const Price = styled.div<{ color: string; position: string }>`
  ${setPosition}
`;
