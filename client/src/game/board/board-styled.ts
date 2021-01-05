import styled from 'styled-components/macro';

export const BoardWrapper = styled.div`
  display: block;

  div {
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .responsive {
    width: calc(120vh - 2rem);
    height: calc(100vh - 2rem);
    margin: 10px auto;
  }

  .mainSquare {
    position: relative;
    height: 100%;
    outline-offset: -13px;
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
    height: 21%;
    position: absolute;
    outline: 2px solid black;
    background: grey;
    /* width: 100%; */
  }

  .headerSide {
    /* height: 100%; */
    width: 21%;
    position: absolute;
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

  .firstLine {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .firstLine-top {
    height: 77%;
    left: 1px;
    right: 1px;

    .cell-image {
      width: 90%;
      height: 60%;
    }
  }

  .firstLine-right {
    position: relative;
    top: 0;
    bottom: 0;
    left: 21%;
    width: 77%;
    height: 100%;

    .cell-image {
      width: 80%;
      height: 60%;
    }
  }

  .firstLine-bottom {
    position: relative;
    left: 0;
    right: 0;
    top: 21%;
    height: 77%;

    .cell-image {
      width: 90%;
      height: 60%;
    }
  }

  .firstLine-left {
    position: relative;
    top: 0px;
    bottom: 0px;
    width: 77%;
    height: 100%;

    .cell-image {
      width: 80%;
      height: 60%;
    }
  }

  .rotation1 {
    transform: rotate(90deg);
  }

  .rotation2 {
    transform: rotate(-90deg);
  }

  .rotation3 {
    transform: rotate(0deg);
  }

  .logoBox {
    width: 46%;
    background: #ed1b24;
    position: absolute;
    transform: rotateZ(-45deg) translateX(-27%) translateY(237%);
    border: 3px solid black;
    text-align: center;
    box-shadow: inset 0px 2px 12px 0px white;
  }

  .logoName {
    font-size: 7.1vw;
    color: white;
    font-family: futura;
    text-shadow: -4px 3px 0px black;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #cfc2c3;
  }

  .card-box {
    position: absolute;
    width: 15%;
    height: 9vw;
  }

  .card-blue {
    background: linear-gradient(#4ccaf4, #a3dff9);
    transform: rotateZ(-45deg) translateX(-13%) translateY(66%);
  }

  .card-blue-inside {
    background: linear-gradient(#a3dff9, #4ccaf4);
    width: 94%;
    height: 94%;
    margin: 0.3vw auto;
    position: relative;
  }

  .card-orange {
    background: linear-gradient(#f99120, #f57420);
    transform: rotateZ(-45deg) translateX(-13%) translateY(610%);
  }

  .card-orange-inside {
    background: linear-gradient(#f57420, #f99120);
    width: 94%;
    height: 94%;
    margin: 0.3vw auto;
    position: relative;
  }

  .corner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .squareCorner {
    height: 65%;
    width: 65%;
    border: 2px solid black;
    right: -1px;
    top: -1px;
    position: absolute;
  }

  .corner4-left {
    position: absolute;
    transform: rotateZ(90deg) translateX(80%) translateY(-36%);
    font-size: 1.2vw;
    font-weight: 500;
  }

  .corner4-bottom {
    position: absolute;
    transform: translateX(112%) translateY(720%);
    font-size: 1.2vw;
    font-weight: 500;
  }

  .cell-image {
    width: 80%;
    height: 80%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
