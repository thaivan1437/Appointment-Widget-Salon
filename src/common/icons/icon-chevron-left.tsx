import React, { FC } from 'react';
import { INPUT_COLORS } from '@common/colors';

interface IconChevronLeftProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const IconChevronLeft: FC<IconChevronLeftProps> = ({
  width = 18,
  height = 18,
  stroke = INPUT_COLORS.TEXT_COLOR,
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
        <path d="M74 0L0 74" data-name="Line 66" />
        <path d="M74 74L0 0" data-name="Line 66" transform="translate(0 74)" />
      </g>
    </svg>
  );
};

export default IconChevronLeft;
