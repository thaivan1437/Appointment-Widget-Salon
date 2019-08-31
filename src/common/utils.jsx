export const getDateString = date => {
  return date && typeof date.toLocaleDateString === 'function'
    ? date.toLocaleDateString('en-US')
    : '';
};

export const getTimeString = date =>
  date && typeof date.toLocaleTimeString === 'function'
    ? date.toLocaleTimeString('en-US')
    : '';
