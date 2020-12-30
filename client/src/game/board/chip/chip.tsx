import { memo } from 'react';
import { useSpring, animated } from 'react-spring';
import { easeQuadInOut } from 'd3-ease';

import styled from 'styled-components/macro';

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

export const Chip = memo(({ points, color }: ChipProps) => {
  const handleEndAnimation = () => {
    console.log('animation end');
  };

  const props = useSpring({
    // @ts-ignore
    to: async (animate: any) => {
      for (const point of points) {
        await animate({
          transform: `translate(${point.x}px, ${point.y}px)`,
          config: {
            easing: easeQuadInOut,
            duration: point.duration,
            precision: 0.01,
          },
        });
      }
    },
    from: {
      transform: `translate(${0}px, ${0}px)`,
    },
    onRest: handleEndAnimation,
  });

  return <ChipWrapper color={color} style={props} />;
});
