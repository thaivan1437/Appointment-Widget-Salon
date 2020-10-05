import React, { FC } from 'react';

interface IconOptionCheckedProps {
  width?: number;
  height?: number;
  fill?: string;
}

const IconOptionChecked: FC<IconOptionCheckedProps> = ({
  width = '22',
  height = '22',
  fill = '#0079BE',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Solid checked circle"
      viewBox="0 0 167 167"
    >
      <circle cx="83.5" cy="83.5" r="83.5" fill={fill} data-name="Ellipse 54" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="17"
        d="M125.768 54L67.49 112.466 41 85.89"
        data-name="Icon feather-check"
      />
    </svg>
  );
};

export default IconOptionChecked;
