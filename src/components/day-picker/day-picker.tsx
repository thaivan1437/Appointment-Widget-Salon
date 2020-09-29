import React, { useState, useEffect, FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { getDates } from '@common/utils';
import { ColorContext } from '@components/widget-view/widget-view';
import { useMediaQuery } from 'react-responsive';
import { Holiday } from 'types';
import { S } from './day-picker.styles';

const SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
};

const DayPicker: FC<DayPickerProps> = ({
  selectedDateChange,
  initialValue,
  holidays,
}) => {
  const [selectedDate, setSelectedDate] = useState<
    DatePickerDate | undefined
  >();
  const [dates, setDates] = useState<DatePickerDate[]>([]);
  const [showErrorContainer, setShowErrorContainer] = useState(false);

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useEffect(() => setDates(getDates(holidays)), []);

  useEffect(() => {
    if (initialValue) {
      handleDateChange(initialValue);
    } else {
      handleDateChange(dates[0] || undefined);
    }
  }, [dates]);

  const handleDateChange = (dateItem: DatePickerDate) => {
    setSelectedDate(dateItem);

    if (selectedDateChange) {
      selectedDateChange(dateItem);
    }
  };

  return (
    <ColorContext.Consumer>
      {(color: string) => (
        <S.DayPickerWrapper color={color}>
          <Slider
            {...SETTINGS}
            slidesToShow={isTablet ? 5 : isMobile ? 3 : 5}
            slidesToScroll={isTablet ? 5 : isMobile ? 3 : 5}
          >
            {dates.map((dateItem) => (
              <div key={`${dateItem.day}_${dateItem.month}`}>
                <S.DayItem
                  color={color}
                  selected={
                    selectedDate?.day === dateItem.day &&
                    selectedDate?.month === dateItem.month
                  }
                  onMouseEnter={() => {
                    setShowErrorContainer(dateItem.isHoliday);
                  }}
                  onMouseLeave={() => {
                    setShowErrorContainer(false);
                  }}
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
          {showErrorContainer ? (
            <S.ErrorContainer>We are closed on this date</S.ErrorContainer>
          ) : null}
        </S.DayPickerWrapper>
      )}
    </ColorContext.Consumer>
  );
};

export type DayPickerProps = {
  selectedDateChange: (dateItem: DatePickerDate) => void;
  initialValue: DatePickerDate;
  holidays: Holiday[];
};

type DatePickerDate = {
  isHoliday: boolean;
  day: any;
  weekday: any;
  month: any;
  dateValue: Date;
};

export default DayPicker;
