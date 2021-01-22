import styled from 'styled-components/macro';

export const BoardWrapper = styled.div`
  margin: 22px 22px 22px 32px;
  width: 695px;
  height: 695px;

  .mainSquare {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .row {
    width: 100%;
    display: flex;
  }

  .cell {
    background-color: #fff;
    cursor: pointer;
  }

  .top {
    height: 15.384615385%;
  }

  .center {
    height: 69.23076923%;
  }

  .square1 {
    outline: 2px solid #212121;
    flex-grow: 1;
    position: relative;
  }

  .square2 {
    flex-grow: 2;
    outline: 2px solid #212121;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .square9 {
    flex-grow: 9;
    outline: 1px solid #212121;
  }

  .squareSide {
    outline: 2px solid #212121;
    width: 100%;
    flex-grow: 1;
    position: relative;
  }

  .header {
    position: absolute;
    height: 21%;
    font-size: 14px;
    outline: 2px solid black;
    background: grey;
  }

  .headerSide {
    position: absolute;
    width: 21%;
    font-size: 14px;
    outline: 2px solid black;
  }

  .header-top {
    bottom: 1px;
    left: 0;
    right: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-right {
    top: 0;
    bottom: 1px;
    left: 1px;
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;

    > .price {
      transform: rotate(90deg);
    }
  }

  .header-bottom {
    top: 1px;
    left: 0;
    right: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-left {
    top: 0;
    bottom: 1px;
    right: 1px;
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;

    > .price {
      transform: rotate(-90deg);
    }
  }

  .side {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-top {
    height: 77%;
    left: 1px;
    right: 1px;

    .cell-image {
      width: 90%;
      height: 60%;
    }
  }

  .side-right {
    position: relative;
    top: 0;
    bottom: 0;
    left: 24%;
    width: 76%;
    height: 100%;

    .cell-image {
      width: 80%;
      height: 60%;
    }
  }

  .side-bottom {
    position: relative;
    left: 0;
    right: 0;
    top: 24%;
    height: 76%;

    .cell-image {
      width: 90%;
      height: 60%;
    }
  }

  .side-left {
    position: relative;
    top: 0px;
    bottom: 0px;
    width: 76%;
    height: 100%;

    .cell-image {
      width: 80%;
      height: 60%;
    }
  }

  .left-rotation {
    transform: rotate(-90deg);
  }

  .corner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cell-image {
    width: 80%;
    height: 80%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
