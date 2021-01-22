import { memo } from 'react';
import { useSpring, animated } from 'react-spring';
import { easeQuadInOut } from 'd3-ease';

import styled from 'styled-components/macro';
import { ls } from '../../../lib/local-storage';
import { gameSettingStore } from '../../../create-game/game-setting-store';

const ChipWrapper = styled(animated.div)`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(p) => p.color};
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 1;
`;

export type PointType = { x: number; y: number; duration: number };

type ChipProps = {
  color: string;
  points: PointType[];
};

export const Chip = memo(
  ({ points, color }: ChipProps) => {
    const chipAnimatedDisabled = ls.get('chipAnimatedDisabled');

    const handleStartAnimation = () => {
      console.log('animation start');
      gameSettingStore.setChipMoveActive(true);
    };

    const handleEndAnimation = () => {
      console.log('animation end');
      gameSettingStore.setChipMoveActive(false);
    };

    const props = useSpring({
      // @ts-ignore
      to: async (animate: any) => {
        for (const { x, y, duration } of points) {
          await animate({
            transform: `translate(${x}px, ${y}px)`,
            config: {
              easing: easeQuadInOut,
              duration: chipAnimatedDisabled ? 0 : duration,
              precision: 0.01,
            },
          });
        }
      },
      from: {
        transform: `translate(${0}px, ${0}px)`,
      },
      onStart: handleStartAnimation,
      onRest: handleEndAnimation,
    });

    return <ChipWrapper color={color} style={props} />;
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.points) === JSON.stringify(nextProps.points)
    );
  },
);
