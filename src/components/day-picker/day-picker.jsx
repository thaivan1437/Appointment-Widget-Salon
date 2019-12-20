import React, { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { getDates } from 'common/utils';
import { S } from 'components/day-picker/day-picker.styles';
import { ColorContext } from '@components/widget-view';

const SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

const DayPicker = ({ selectedDateChange, initialValue, holidays }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates(getDates(holidays));
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
    <ColorContext.Consumer>
      {color => (
        <S.DayPickerWrapper color={color}>
          <Slider {...SETTINGS}>
            {dates.map(dateItem => (
              <div key={`${dateItem.day}_${dateItem.month}`}>
                <S.DayItem
                  color={color}
                  selected={
                    selectedDate.day === dateItem.day &&
                    selectedDate.month === dateItem.month
                  }
                  isHoliday={dateItem.isHoliday}
                  onClick={() => {
                    !dateItem.isHoliday && handleDateChange(dateItem);
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
      )}
    </ColorContext.Consumer>
  );
};

export default DayPicker;
