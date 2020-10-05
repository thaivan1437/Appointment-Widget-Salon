import React, { FC } from 'react';

interface IconOptionUnCheckedProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const IconOptionUnChecked: FC<IconOptionUnCheckedProps> = ({
  width = '22',
  height = '22',
  stroke = '#0079BE',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Empty circle"
      viewBox="0 0 167 167"
    >
      <g fill="none" stroke={stroke} strokeWidth="17" data-name="Ellipse 54">
        <circle cx="83.5" cy="83.5" r="83.5" stroke="none" />
        <circle cx="83.5" cy="83.5" r="75" />
      </g>
    </svg>
  );
};

export default IconOptionUnChecked;
