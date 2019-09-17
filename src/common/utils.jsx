export const getDateString = date => {
  return date && typeof date.toLocaleDateString === 'function'
    ? date.toLocaleDateString('en-US')
    : '';
};

export const getTimeString = date =>
  date && typeof date.toLocaleTimeString === 'function'
    ? date.toLocaleTimeString('en-US')
    : '';

const addDays = (date, days) => {
  const tempDate = new Date(date);
  return tempDate.setDate(tempDate.getDate() + days);
};

const addMonth = (date, month) => {
  const tempDate = new Date(date);
  return tempDate.setMonth(tempDate.getMonth() + month);
};

const sliderDateObj = date => {
  date.toDateString('en-US', { month: 'short', weekday: 'short' });

  return {
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    weekday: date
      .toLocaleDateString('en-US', { weekday: 'short' })
      .toUpperCase(),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
};

export const getDates = () => {
  const dateArray = [];

  let currentDate = new Date();
  const stopDate = addMonth(currentDate, 1);

  while (currentDate <= stopDate) {
    const tempDate = new Date(currentDate);

    dateArray.push({ dateValue: tempDate, ...sliderDateObj(tempDate) });
    currentDate = addDays(currentDate, 1);
  }

  return dateArray;
};
