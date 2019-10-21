import React, { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { getDates } from '../../common/utils';
import { S } from 'components/day-picker/day-picker.styles';

const SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

const DayPicker = ({ selectedDateChange, initialValue }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(getDates());
  }, []);

  useEffect(() => {
    if (initialValue) {
      handleDateChange(initialValue);
    } else {
      handleDateChange(dates[0] || {});
    }
  }, [dates]);

  const handleDateChange = dateItem => {
    setSelectedDate(dateItem);

    if (selectedDateChange) {
      selectedDateChange(dateItem);
    }
  };

  return (
    <S.DayPickerWrapper>
      <Slider {...SETTINGS}>
        {dates.map(dateItem => (
          <div key={`${dateItem.day}_${dateItem.month}`}>
            <S.DayItem
              selected={
                selectedDate.day === dateItem.day &&
                selectedDate.month === dateItem.month
              }
              onClick={() => {
                handleDateChange(dateItem);
              }}
            >
              <S.DayInfo>{dateItem.month}</S.DayInfo>
              <S.DayValue>{dateItem.day}</S.DayValue>
              <S.DayInfo>{dateItem.weekday}</S.DayInfo>
            </S.DayItem>
          </div>
        ))}
      </Slider>
    </S.DayPickerWrapper>
  );
};

export default DayPicker;
