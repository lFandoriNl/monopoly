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

type ChipProps = {
  x: number;
  y: number;
  duration: number;
  color: string;
};

export const Chip = memo(({ x, y, duration, color }: ChipProps) => {
  const props = useSpring({
    config: { easing: easeQuadInOut, duration },
    transform: `translate(${x}px, ${y}px)`,
  });

  return <ChipWrapper color={color} style={props} />;
});
