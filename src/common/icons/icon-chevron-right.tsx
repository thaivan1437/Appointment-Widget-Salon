import React, { FC } from 'react';
import { COLORS } from '@common/colors';

interface IconChevronRightProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const IconChevronRight: FC<IconChevronRightProps> = ({
  width = 22,
  height = 18,
  stroke = COLORS.WHITE,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 98.042 172.042"
    >
      <g
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="17"
        transform="translate(12.021 12.021)"
      >
        <path
          d="M74 0L0 74"
          data-name="Line 66"
          transform="rotate(180 37 74)"
        />
        <path
          d="M74 74L0 0"
          data-name="Line 67"
          transform="rotate(180 37 37)"
        />
      </g>
    </svg>
  );
};

export default IconChevronRight;
