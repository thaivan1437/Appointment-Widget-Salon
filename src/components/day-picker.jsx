import React, { useState } from 'react';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { getDates } from '../common/utils';
import { COLORS } from '../common/colors';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
};

const DayPickerWrapper = styled.div`
  width: 455px;
  margin: 0 auto;
  position: relative;

  * {
    font-family: 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${COLORS.MONZA};
  }
`;

const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 60px;
  border-radius: 10px;

  margin: 0 3px;
  box-shadow: inset -1px -1px 3px 1px ${COLORS.SHADOW};

  background-color: ${props => (props.selected ? COLORS.MONZA : COLORS.WHITE)};
  color: ${props => (props.selected ? COLORS.WHITE : COLORS.BLACK)};

  :hover {
    background-color: ${props => (props.selected ? COLORS.MONZA : COLORS.ALTO)};
    cursor: pointer;
  }
`;

const DayValue = styled.div`
  font-size: 24px;
`;
const DayInfo = styled.div`
  font-size: 12px;
`;

const BoxBackground = styled.div`
  background-color: ${COLORS.ALABASTER};
  position: absolute;

  height: 45px;
  bottom: -10px;
  left: -5px;
  right: -5px;
  border-radius: 4px;
`;

const dates = getDates();

const DayPicker = () => {
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <DayPickerWrapper>
      <BoxBackground />
      <Slider {...settings}>
        {dates.map(dateItem => (
          <div key={`${dateItem.day}_${dateItem.month}`}>
            <DayItem
              selected={selectedDate.dateValue === dateItem.dateValue}
              onClick={() => {
                setSelectedDate(dateItem);
              }}
            >
              <DayInfo>{dateItem.month}</DayInfo>
              <DayValue>{dateItem.day}</DayValue>
              <DayInfo>{dateItem.weekday}</DayInfo>
            </DayItem>
          </div>
        ))}
      </Slider>
    </DayPickerWrapper>
  );
};

export default DayPicker;
