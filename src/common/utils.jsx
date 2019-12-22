export const getDateString = date => {
  return date && typeof date.toLocaleDateString === 'function'
    ? date.toLocaleDateString('en-US')
    : '';
};

export const getTimeString = date =>
  date && typeof date.toLocaleTimeString === 'function'
    ? date.toLocaleTimeString('en-US')
    : '';

export const getDisplayDateString = date => {
  return date && typeof date.toLocaleTimeString === 'function'
    ? date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;
};

export const getRequestDateString = date => {
  if (date && typeof date.toLocaleTimeString === 'function') {
    const parsedDate = date
      .toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      })
      .split('/');

    return `${parsedDate[2]}${parsedDate[0]}${parsedDate[1]}`;
  } else {
    return null;
  }
};

const addDays = (date, days) => {
  const tempDate = new Date(date);
  return tempDate.setDate(tempDate.getDate() + days);
};

const addMonth = (date, month) => {
  const tempDate = new Date(date);
  return tempDate.setMonth(tempDate.getMonth() + month);
};

const sliderDateObj = date => {
  return {
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    weekday: date
      .toLocaleDateString('en-US', { weekday: 'short' })
      .toUpperCase(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
};

export const getDates = (holidays = []) => {
  const dateArray = [];
  const holidayArray = [];

  let currentDate = new Date();
  const stopDate = addMonth(currentDate, 1);

  if (holidays.length > 0) {
    holidays.map(holiday => {
      holidayArray.push(getRequestDateString(new Date(holiday.date)));
    });
  }

  while (currentDate <= stopDate) {
    const tempDate = new Date(currentDate);
    const dateString = getRequestDateString(tempDate);

    dateArray.push({
      dateValue: tempDate,
      ...sliderDateObj(tempDate),
      isHoliday: holidayArray.indexOf(dateString) !== -1,
    });
    currentDate = addDays(currentDate, 1);
  }

  return dateArray;
};

// WORKING HOURS
export const colorWeekend = (index,color) => {
  switch (index) {
    case 5:
      return '#1fab83';
    case 6:
      return '#1fab83';
    default:
      return color;
  }
};
