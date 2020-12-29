import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { easeQuadInOut } from 'd3-ease';

import styled from 'styled-components/macro';

import { Cell } from './cell';
import { BoardWrapper } from './board-styled';

import { boardCells } from './board-cells';

const Chip = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(p) => p.color};
  border: 2px solid #fff;
  border-radius: 50%;
`;

const sequencePaths = [];

function calcNumberMoveCells(index: number, prevIndex: number) {
  return Math.abs(index - prevIndex);
}

function getPositionRelativeToParent(parent: HTMLElement, child: HTMLElement) {
  let childTemp: HTMLElement | null | undefined = child;
  let x = 0;
  let y = 0;

  while (parent !== childTemp) {
    if (childTemp) {
      x += childTemp.offsetLeft;
      y += childTemp.offsetTop;
    }

    childTemp = childTemp?.parentElement;
  }

  return { x, y };
}

export const Board = () => {
  const [position, setPosition] = useState({
    path: 'top',
    index: '0',
  });
  const [prevPosition, setPrevPosition] = useState({
    path: 'top',
    index: '0',
  });

  const [positionChip, setPositionChip] = useState({ x: 0, y: 0, duration: 0 });

  const boardRef = useRef<HTMLDivElement>(null);

  const props = useSpring({
    config: { easing: easeQuadInOut, duration: positionChip.duration },
    transform: `translate(${positionChip.x}px, ${positionChip.y}px)`,
  });

  const handleStartMove = (event: React.FormEvent) => {
    event.preventDefault();

    const boardElement = boardRef.current;

    if (boardElement) {
      const cells = boardElement.querySelectorAll<HTMLDivElement>(
        `.cells-${position.path} .cell`,
      );
      const target = cells[+position.index];

      if (target) {
        const { x, y } = getPositionRelativeToParent(boardElement, target);
        const rect = target.getBoundingClientRect();

        setPrevPosition(position);

        const numberMoveCells = calcNumberMoveCells(
          Number(position.index),
          Number(prevPosition.index),
        );

        const msForOneCell = 200;

        setPositionChip({
          x: x + rect.width / 2 - 12,
          y: y + rect.height / 2 - 12,
          duration: numberMoveCells * msForOneCell,
        });
      }
    }
  };

  return (
    <BoardWrapper>
      <form onSubmit={handleStartMove}>
        <button type="submit">Start</button>
        <input
          value={position.path}
          onChange={(event) =>
            setPosition((prev) => ({ ...prev, path: event.target.value }))
          }
        />
        <input
          value={position.index}
          onChange={(event) =>
            setPosition((prev) => ({
              ...prev,
              index: event.target.value,
            }))
          }
        />
      </form>
      <div className="responsive">
        <div className="mainSquare" ref={boardRef}>
          <animated.div style={{ ...props, position: 'absolute', zIndex: 1 }}>
            <Chip color="#ff4e4e" />
          </animated.div>

          <div className="row top cells-top">
            {boardCells
              .filter((cell) => cell.position === 'top')
              .map((cell) => (
                <Cell key={cell.id} {...cell} />
              ))}
          </div>

          <div className="row center">
            <div className="square2 cells-left">
              {boardCells
                .filter((cell) => cell.position === 'left')
                .map((cell) => (
                  <Cell key={cell.id} {...cell} />
                ))}
            </div>
            <div className="square9"></div>
            <div className="square2 cells-right">
              {boardCells
                .filter((cell) => cell.position === 'right')
                .map((cell) => (
                  <Cell key={cell.id} {...cell} />
                ))}
            </div>
          </div>

          <div className="row top cells-bottom">
            {boardCells
              .filter((cell) => cell.position === 'bottom')
              .map((cell) => (
                <Cell key={cell.id} {...cell} />
              ))}
          </div>
        </div>
      </div>
    </BoardWrapper>
  );
};
