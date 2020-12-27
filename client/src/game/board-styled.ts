import styled, { css } from 'styled-components/macro';

export const Board = styled.div`
  display: block;
  div {
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .responsive {
    background: #cde6d0;
    width: calc(150vh - 2rem);
    height: calc(100vh - 2rem);
    margin: 10px auto;
  }

  .mainSquare {
    height: 100%;
    outline: 1px dashed #c2dec5;
    outline-offset: -13px;
  }

  .row {
    width: 100%;
    display: flex;
  }

  .top {
    height: 15.384615385%;
  }

  .center {
    height: 69.23076923%;
  }
  .square1 {
    outline: 1px solid black;
    flex-grow: 1;
    position: relative;
  }

  .square2 {
    flex-grow: 2;
    outline: 1px solid black;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .square9 {
    flex-grow: 9;
    outline: 1px solid black;
  }

  .squareSide {
    outline: 1px solid black;
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
    left: 1px;
    right: 1px;
  }

  .header-bottom {
    top: 1px;
    left: 1px;
    right: 1px;
  }

  .header-left {
    top: 1px;
    bottom: 1px;
    right: 1px;
    background: grey;
  }

  .header-right {
    top: 1px;
    bottom: 1px;
    left: 1px;
    background: grey;
  }

  .firstLine {
    position: absolute;
    font-size: 0.7vw;
    font-weight: 500;
    line-height: 1vw;
    text-align: center;
  }

  .firstLine-top {
    left: 1px;
    right: 1px;
    bottom: 30%;
    height: 10%;
  }

  .firstLine-top.no-color {
    bottom: 12%;
  }

  .firstLine-left {
    top: 0px;
    bottom: 0px;
    right: 42%;
  }

  .firstLine-left.no-color {
    right: 23%;
  }

  .firstLine-right {
    top: 0;
    bottom: 0;
    left: 42%;
  }

  .firstLine-right.no-color {
    left: 23%;
  }

  .firstLine-bottom {
    left: 0;
    right: 0;
    top: 30%;
  }

  .firstLine-bottom.no-color {
    top: 12%;
  }

  .red {
    background-color: #ed1b24;
  }

  .yellow {
    background-color: #fef200;
  }

  .lightblue {
    background-color: #aae0fa;
  }

  .brown {
    background-color: #955436;
  }

  .blue {
    background-color: #0072bb;
  }

  .green {
    background-color: #1fb25a;
  }

  .orange {
    background-color: #f7941d;
  }

  .purple {
    background-color: #d93a96;
  }

  .rotation1 {
    transform: rotate(90deg);
  }

  .rotation2 {
    transform: rotate(180deg);
  }

  .rotation3 {
    transform: rotate(-90deg);
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
    position: absolute;
    text-align: center;
    line-height: 8vw;
    font-size: 1.2vw;
    font-weight: 500;
  }

  .corner1 {
    transform: rotateZ(135deg) translateX(-66%) translateY(-15%);
  }

  .corner2 {
    transform: rotateZ(-135deg) translateX(-30%) translateY(23%);
    line-height: 9vw;
  }

  .corner3 {
    transform: rotateZ(-45deg) translateX(-14%) translateY(26%);
    line-height: 1.4vw;
    font-size: 1vw;
  }

  .corner4 {
    transform: rotateZ(45deg) translateX(-9%) translateY(-31%);
    line-height: 7vw;
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
`;
